from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
import aiosqlite
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# SQLite database - use /tmp for Vercel serverless
DATABASE_URL = os.environ.get('DATABASE_URL', '/tmp/status_checks.db')

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Database functions
async def init_db():
    async with aiosqlite.connect(DATABASE_URL) as db:
        await db.execute('''
            CREATE TABLE IF NOT EXISTS status_checks (
                id TEXT PRIMARY KEY,
                client_name TEXT NOT NULL,
                timestamp TEXT NOT NULL
            )
        ''')
        await db.commit()

async def get_db():
    return await aiosqlite.connect(DATABASE_URL)

# Initialize database on startup
@app.on_event("startup")
async def startup_event():
    await init_db()

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(client_name=input.client_name)

    async with aiosqlite.connect(DATABASE_URL) as db:
        await db.execute(
            'INSERT INTO status_checks (id, client_name, timestamp) VALUES (?, ?, ?)',
            (status_obj.id, status_obj.client_name, status_obj.timestamp.isoformat())
        )
        await db.commit()

    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    async with aiosqlite.connect(DATABASE_URL) as db:
        cursor = await db.execute('SELECT id, client_name, timestamp FROM status_checks ORDER BY timestamp DESC')
        rows = await cursor.fetchall()

    status_checks = []
    for row in rows:
        status_checks.append(StatusCheck(
            id=row[0],
            client_name=row[1],
            timestamp=datetime.fromisoformat(row[2])
        ))

    return status_checks

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Vercel handler
from mangum import Mangum

handler = Mangum(app)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()