# Grocery Frontend (Vite + React)

This repository contains the frontend for the Grocery Go demo application.

Contents
- `src/` — React components, pages, contexts and styles
- `public/` — static public assets
- `server/` — small Express server used for local demo auth (dev only)
- `Dockerfile` — production image that builds the Vite app and serves `dist`
- `k8s-deployment.yaml` — sample Kubernetes Deployment + Service

Local development
1. Install Node (recommended via nvm or Chocolatey). See project `INSTALL_NODE_WINDOWS.md` at the root.
2. Install dependencies and start Vite dev server:

```powershell
cd frontend
npm install
npm run dev
```

Production image
Build and run the Docker image (requires Docker):

```powershell
docker build -t groceries-frontend:local ./frontend
docker run --rm -p 5173:5173 groceries-frontend:local
```

Notes
- The frontend expects the backend API at `/api` (proxy configured for development).
- This project is for demo/dev use; do not use the embedded `server/` or plaintext credentials in production.
