# This file simulates a "database" you can edit!
MOCK_TEAMS = [
    {
        "id": 1,
        "name": "NAVI",
        "region": "EU",
        "roster": [1, 2, 3]
    },
    {
        "id": 2,
        "name": "FaZe",
        "region": "EU",
        "roster": [4, 5, 6]
    }
]

MOCK_PLAYERS = [
    {
        "id": 1,
        "name": "s1mple",
        "team_id": 1,
        "role": "AWPer",
        "elo": 2100,
        "stats": {
            "kdr": 1.45,
            "adr": 87.2,
            "hs_pct": 49,
            "recent_matches": [101, 102]
        }
    },
    {
        "id": 2,
        "name": "electroNic",
        "team_id": 1,
        "role": "Rifler",
        "elo": 1930,
        "stats": {
            "kdr": 1.22,
            "adr": 75.6,
            "hs_pct": 54,
            "recent_matches": [103]
        }
    },
    {
        "id": 3,
        "name": "b1t",
        "team_id": 1,
        "role": "Rifler",
        "elo": 1850,
        "stats": {
            "kdr": 1.10,
            "adr": 71.4,
            "hs_pct": 62,
            "recent_matches": [104]
        }
    },
    {
        "id": 4,
        "name": "karrigan",
        "team_id": 2,
        "role": "IGL",
        "elo": 1890,
        "stats": {
            "kdr": 0.99,
            "adr": 68.5,
            "hs_pct": 38,
            "recent_matches": [105]
        }
    },
    {
        "id": 5,
        "name": "rain",
        "team_id": 2,
        "role": "Entry",
        "elo": 1940,
        "stats": {
            "kdr": 1.13,
            "adr": 72.3,
            "hs_pct": 56,
            "recent_matches": [106]
        }
    },
    {
        "id": 6,
        "name": "broky",
        "team_id": 2,
        "role": "AWPer",
        "elo": 2025,
        "stats": {
            "kdr": 1.29,
            "adr": 81.7,
            "hs_pct": 42,
            "recent_matches": [107]
        }
    }
]

MOCK_MATCHES = [
    {
        "id": 101,
        "teams": [1, 2],
        "map": "Mirage",
        "score": "16-12",
        "date": "2024-07-28"
    },
    {
        "id": 102,
        "teams": [1, 2],
        "map": "Inferno",
        "score": "10-16",
        "date": "2024-07-25"
    },
    # Add more matches as needed!
]
