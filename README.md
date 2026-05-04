# H4 Company - Landing Page

Uma landing page moderna para a empresa H4 Company, construída com React (frontend) e FastAPI (backend).

## 🚀 Tecnologias

### Frontend
- React 19
- Tailwind CSS
- Radix UI Components
- React Router DOM
- Axios para API calls

### Backend
- FastAPI (Python)
- MongoDB com Motor
- Uvicorn server
- Pydantic para validação

## 🛠️ Desenvolvimento Local

### Pré-requisitos
- Node.js 18+
- Python 3.11+
- MongoDB (local ou Atlas)

### Instalação e Execução

1. **Clone o repositório**
   ```bash
   git clone https://github.com/SEU-USUARIO/h4company-main.git
   cd h4company-main
   ```

2. **Execute tudo de uma vez**
   ```bash
   pwsh.exe -File .\run-all.ps1
   ```

   Ou manualmente:

   **Backend:**
   ```bash
   cd backend
   python -m venv .venv
   .venv\Scripts\Activate  # Windows
   pip install -r requirements.txt
   uvicorn server:app --reload --host 0.0.0.0 --port 8000
   ```

   **Frontend:**
   ```bash
   cd frontend
   npm install
   npm start
   ```

## 🌐 Deploy

### Frontend (GitHub Pages)

1. **Push para GitHub**
   ```bash
   git remote add origin https://github.com/SEU-USUARIO/h4company-main.git
   git branch -M main
   git push -u origin main
   ```

2. **Ative GitHub Pages**
   - Settings → Pages → Source: "GitHub Actions"
   - URL: `https://SEU-USUARIO.github.io/h4company-main`

### Backend (Railway)

1. **Crie conta no Railway**
   - Acesse: https://railway.app

2. **Conecte o repositório**
   - New Project → Deploy from GitHub
   - Selecione o repositório `h4company-main`

3. **Configure variáveis de ambiente**
   - MONGO_URL: Sua string de conexão MongoDB
   - DB_NAME: Nome do banco (ex: h4company_prod)
   - CORS_ORIGINS: URL do frontend (ex: https://seu-usuario.github.io)

4. **Deploy automático**
   - Railway detectará o `railway.json` e fará deploy automático

## 📁 Estrutura do Projeto

```
h4company-main/
├── backend/           # API FastAPI
│   ├── server.py      # Servidor principal
│   ├── requirements.txt
│   └── railway.json   # Config Railway
├── frontend/          # React App
│   ├── src/
│   ├── public/
│   └── package.json
├── .github/           # GitHub Actions
└── README.md
```

## 🔧 Scripts Disponíveis

### Frontend
- `npm start` - Desenvolvimento
- `npm run build` - Build de produção
- `npm test` - Executar testes

### Backend
- `uvicorn server:app --reload` - Desenvolvimento
- `uvicorn server:app` - Produção

## 📞 API Endpoints

- `GET /api/` - Health check
- `POST /api/status` - Criar status check
- `GET /api/status` - Listar status checks

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT.
