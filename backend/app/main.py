from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from .mock_db import MOCK_TEAMS, MOCK_PLAYERS, MOCK_MATCHES

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
    # Combines teams and players for frontend
    return {
        "teams": MOCK_TEAMS,
        "players": MOCK_PLAYERS
    }

@app.get("/api/teams")
def get_teams():
    return MOCK_TEAMS

@app.get("/api/players")
def get_players():
    return MOCK_PLAYERS

@app.get("/api/matches")
def get_matches():
    return MOCK_MATCHES

@app.get("/api/players/{player_id}")
def get_player(player_id: int):
    p = next((pl for pl in MOCK_PLAYERS if pl["id"] == player_id), None)
    return p or {}

@app.post("/api/video_analysis")
async def video_analysis(player_name: str = Form(...), file: UploadFile = File(...)):
    # Placeholder - you can later call OpenAI here for feedback!
    # For now, return mock feedback
    return {"player": player_name, "feedback": "This is a mock analysis result. Connect to OpenAI or plug in your model here."}

@app.post("/api/opponent_analysis")
async def opponent_analysis(opponent_name: str = Form(...), file: UploadFile = File(...)):
    return {"opponent": opponent_name, "report": "This is a mock opponent analysis. Add your scouting code here."}

@app.post("/api/elo_chatbot")
async def elo_chatbot(player_name: str = Form(...), question: str = Form(...)):
    # Mock chatbot logic, could plug in OpenAI or logic here
    return {
        "player": player_name,
        "answer": f"Mock answer for {player_name}. You asked: {question}"
    }

