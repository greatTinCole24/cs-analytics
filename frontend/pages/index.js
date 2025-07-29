import { useState, useEffect } from 'react';

export default function Home() {
  const [tab, setTab] = useState(1);

  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: 900, margin: 'auto', padding: 24 }}>
      <h1>CS2 Analytics App</h1>
      <div style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
        <button onClick={() => setTab(1)}>Dashboard</button>
        <button onClick={() => setTab(2)}>Player Video Analysis</button>
        <button onClick={() => setTab(3)}>Opponent Analysis</button>
        <button onClick={() => setTab(4)}>Elo Chatbot</button>
      </div>
      {tab === 1 && <Dashboard />}
      {tab === 2 && <VideoAnalysis />}
      {tab === 3 && <OpponentAnalysis />}
      {tab === 4 && <EloChatbot />}
    </div>
  );
}

// --- Dashboard Tab (Tab 1) ---
function Dashboard() {
  const [teams, setTeams] = useState([]);
  const [players, setPlayers] = useState([]);
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/teams`).then(r => r.json()).then(setTeams);
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/players`).then(r => r.json()).then(setPlayers);
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/matches`).then(r => r.json()).then(setMatches);
  }, []);

  return (
    <div>
      <h2>Teams</h2>
      <table border="1" cellPadding="8"><thead>
        <tr><th>Name</th><th>Region</th><th>Roster IDs</th></tr>
      </thead>
        <tbody>
          {teams.map(t => (
            <tr key={t.id}>
              <td>{t.name}</td>
              <td>{t.region}</td>
              <td>{t.roster.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Players</h2>
      <table border="1" cellPadding="8"><thead>
        <tr><th>Name</th><th>Team</th><th>Role</th><th>Elo</th><th>KDR</th><th>ADR</th><th>HS%</th></tr>
      </thead>
        <tbody>
          {players.map(p => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{(teams.find(t => t.id === p.team_id) || {}).name || '-'}</td>
              <td>{p.role}</td>
              <td>{p.elo}</td>
              <td>{p.stats.kdr}</td>
              <td>{p.stats.adr}</td>
              <td>{p.stats.hs_pct}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Matches</h2>
      <table border="1" cellPadding="8"><thead>
        <tr><th>ID</th><th>Teams</th><th>Map</th><th>Score</th><th>Date</th></tr>
      </thead>
        <tbody>
          {matches.map(m => (
            <tr key={m.id}>
              <td>{m.id}</td>
              <td>{m.teams.map(teamId => (teams.find(t => t.id === teamId) || {}).name).join(' vs ')}</td>
              <td>{m.map}</td>
              <td>{m.score}</td>
              <td>{m.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// --- Video Analysis Tab (Tab 2) ---
function VideoAnalysis() {
  const [result, setResult] = useState(null);
  const [file, setFile] = useState();
  const [player, setPlayer] = useState("");
  return (
    <div>
      <h2>Player Video Analysis (Mock)</h2>
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
        <button>Analyze (Mock)</button>
      </form>
      {result && (
        <pre style={{ background: "#eee", padding: 12 }}>{JSON.stringify(result, null, 2)}</pre>
      )}
      <div style={{ marginTop: 16, fontStyle: 'italic', color: '#777' }}>
        *This is a placeholder. Plug in OpenAI or your real model for actual feedback!*
      </div>
    </div>
  );
}

// --- Opponent Analysis Tab (Tab 3) ---
function OpponentAnalysis() {
  const [result, setResult] = useState(null);
  const [file, setFile] = useState();
  const [opponent, setOpponent] = useState("");
  return (
    <div>
      <h2>Opponent Analysis (Mock)</h2>
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
        <button>Analyze (Mock)</button>
      </form>
      {result && (
        <pre style={{ background: "#eee", padding: 12 }}>{JSON.stringify(result, null, 2)}</pre>
      )}
      <div style={{ marginTop: 16, fontStyle: 'italic', color: '#777' }}>
        *This is a placeholder. Build your opponent scout logic here!*
      </div>
    </div>
  );
}

// --- Elo Chatbot Tab (Tab 4) ---
function EloChatbot() {
  const [result, setResult] = useState(null);
  const [player, setPlayer] = useState("");
  const [question, setQuestion] = useState("");
  return (
    <div>
      <h2>Elo Chatbot (Mock)</h2>
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
        <button>Ask (Mock)</button>
      </form>
      {result && (
        <pre style={{ background: "#eee", padding: 12 }}>{JSON.stringify(result, null, 2)}</pre>
      )}
      <div style={{ marginTop: 16, fontStyle: 'italic', color: '#777' }}>
        *This is a placeholder. Hook up OpenAI or your own logic here!*
      </div>
    </div>
  );
}
