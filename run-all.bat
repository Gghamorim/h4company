@echo off
REM Execute este arquivo dentro da pasta raiz do projeto: h4company-main\h4company-main
SET BACKEND_DIR=%~dp0backend
SET FRONTEND_DIR=%~dp0frontend

start "Backend" cmd /k "cd /d "%BACKEND_DIR%" && call .venv\Scripts\Activate && set MONGO_URL=mongodb://localhost:27017 && set DB_NAME=test && uvicorn server:app --reload --host 0.0.0.0 --port 8000"
start "Frontend" cmd /k "cd /d "%FRONTEND_DIR%" && npm start"

echo Backend: http://localhost:8000
echo Frontend: http://localhost:3000
pause