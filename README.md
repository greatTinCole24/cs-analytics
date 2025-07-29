# CS2 Analytics App

## Monorepo Structure

- `/frontend`: Next.js frontend (UI, 4 main tabs)
- `/backend`: FastAPI backend (API endpoints)
- `/workers`: Optional scripts for data sync
- `/shared`: (for schemas, if needed)

## Local Development

1. Backend:
    ```
    cd backend
    pip install -r requirements.txt
    uvicorn app.main:app --reload --host 0.0.0.0 --port 10000
    ```

2. Frontend:
    ```
    cd frontend
    npm install
    npm run dev
    ```
    - Set `NEXT_PUBLIC_API_URL` in `.env.local` to `http://localhost:10000`

3. App runs at [http://localhost:3000](http://localhost:3000)

## Deployment

- **Frontend:** Deploy `/frontend` on Vercel (set `NEXT_PUBLIC_API_URL` to Render backend)
- **Backend:** Deploy `/backend` on Render (Python web service)
- **Workers:** Add as Background Workers on Render

## Notes

- Backend CORS is open for dev. Restrict in production.
- Endpoints are mock/stub—custom logic can be added as you build.
