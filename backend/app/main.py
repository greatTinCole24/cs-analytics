from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow frontend origin
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For dev, restrict for prod!
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/teams_players")
def get_teams_players():
    # Dummy data for demo
    return {
        "teams": [
            {"name": "NAVI", "players": ["s1mple", "electroNic", "b1t"]},
            {"name": "FaZe", "players": ["karrigan", "rain", "broky"]},
        ],
        "players": [
            {"name": "s1mple", "team": "NAVI", "stats": {"elo": 2100}},
            {"name": "broky", "team": "FaZe", "stats": {"elo": 1950}},
        ]
    }

@app.post("/api/video_analysis")
async def video_analysis(player_name: str = Form(...), file: UploadFile = File(...)):
    # Placeholder for video analysis logic
    # For now, just mock result
    return {"player": player_name, "feedback": "Great crosshair placement. Work on utility usage."}

@app.post("/api/opponent_analysis")
async def opponent_analysis(opponent_name: str = Form(...), file: UploadFile = File(...)):
    return {"opponent": opponent_name, "report": "Prefers A site on Mirage. Weak eco rounds."}

@app.post("/api/elo_chatbot")
async def elo_chatbot(player_name: str = Form(...), question: str = Form(...)):
    # Mock chatbot response
    return {
        "player": player_name,
        "answer": f"Player {player_name} is recommended for recruitment. Elo above team average. Excellent AWP performance."
    }
