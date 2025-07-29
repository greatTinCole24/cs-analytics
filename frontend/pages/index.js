import { useState } from 'react';

export default function Home() {
  const [tab, setTab] = useState(1);

  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: 700, margin: 'auto', padding: 24 }}>
      <h1>CS2 Analytics App</h1>
      <div style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
        <button onClick={() => setTab(1)}>Teams/Players DB</button>
        <button onClick={() => setTab(2)}>Player Video Analysis</button>
        <button onClick={() => setTab(3)}>Opponent Analysis</button>
        <button onClick={() => setTab(4)}>Elo Chatbot</button>
      </div>
      {tab === 1 && <TeamsPlayers />}
      {tab === 2 && <VideoAnalysis />}
      {tab === 3 && <OpponentAnalysis />}
      {tab === 4 && <EloChatbot />}
    </div>
  );
}

// --- TAB 1 ---
function TeamsPlayers() {
  const [data, setData] = useState(null);
  return (
    <div>
      <h2>Teams & Players Database</h2>
      <button onClick={async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/teams_players`);
        setData(await res.json());
      }}>Load Data</button>
      {data && (
        <pre style={{ background: "#eee", padding: 12 }}>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
}

// --- TAB 2 ---
function VideoAnalysis() {
  const [result, setResult] = useState(null);
  const [file, setFile] = useState();
  const [player, setPlayer] = useState("");
  return (
    <div>
      <h2>Video Analysis</h2>
      <form onSubmit={async e => {
        e.preventDefault();
        const form = new FormData();
        form.append("player_name", player);
        form.append("file", file);
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/video_analysis`, { method: "POST", body: form });
        setResult(await res.json());
      }}>
        <input required placeholder="Player Name" value={player} onChange={e => setPlayer(e.target.value)} />
        <input required type="file" accept="video/*,.dem" onChange={e => setFile(e.target.files[0])} />
        <button>Analyze</button>
      </form>
      {result && (
        <pre style={{ background: "#eee", padding: 12 }}>{JSON.stringify(result, null, 2)}</pre>
      )}
    </div>
  );
}

// --- TAB 3 ---
function OpponentAnalysis() {
  const [result, setResult] = useState(null);
  const [file, setFile] = useState();
  const [opponent, setOpponent] = useState("");
  return (
    <div>
      <h2>Opponent Analysis</h2>
      <form onSubmit={async e => {
        e.preventDefault();
        const form = new FormData();
        form.append("opponent_name", opponent);
        form.append("file", file);
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/opponent_analysis`, { method: "POST", body: form });
        setResult(await res.json());
      }}>
        <input required placeholder="Opponent Name" value={opponent} onChange={e => setOpponent(e.target.value)} />
        <input required type="file" accept="video/*,.dem" onChange={e => setFile(e.target.files[0])} />
        <button>Analyze</button>
      </form>
      {result && (
        <pre style={{ background: "#eee", padding: 12 }}>{JSON.stringify(result, null, 2)}</pre>
      )}
    </div>
  );
}

// --- TAB 4 ---
function EloChatbot() {
  const [result, setResult] = useState(null);
  const [player, setPlayer] = useState("");
  const [question, setQuestion] = useState("");
  return (
    <div>
      <h2>Elo Chatbot</h2>
      <form onSubmit={async e => {
        e.preventDefault();
        const form = new FormData();
        form.append("player_name", player);
        form.append("question", question);
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/elo_chatbot`, { method: "POST", body: form });
        setResult(await res.json());
      }}>
        <input required placeholder="Player Name" value={player} onChange={e => setPlayer(e.target.value)} />
        <input required placeholder="Ask a question..." value={question} onChange={e => setQuestion(e.target.value)} />
        <button>Ask</button>
      </form>
      {result && (
        <pre style={{ background: "#eee", padding: 12 }}>{JSON.stringify(result, null, 2)}</pre>
      )}
    </div>
  );
}
