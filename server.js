const express = require("express");
const { Pool } = require("pg");

const app = express();
app.use(express.json());

// Supabase / Postgres connection (Render will provide DATABASE_URL)
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

// Create table if it doesn't exist
async function init() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS messages (
      id SERIAL PRIMARY KEY,
      text TEXT NOT NULL,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `);
}

app.get("/", (req, res) => {
  res.send(`
    <h1>My Online Web Database</h1>

    <input id="msg" placeholder="Type a message" />
    <button onclick="send()">Save</button>

    <ul id="list"></ul>

    <script>
      async function load() {
        const res = await fetch("/messages");
        const data = await res.json();
        document.getElementById("list").innerHTML =
          data.map(m => "<li>" + m.text + "</li>").join("");
      }

      async function send() {
        const text = document.getElementById("msg").value;
        await fetch("/messages", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text })
        });
        document.getElementById("msg").value = "";
        load();
      }

      load();
    </script>
  `);
});

app.get("/messages", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT id, text, created_at FROM messages ORDER BY id DESC"
    );
    res.json(result.rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post("/messages", async (req, res) => {
  const text = (req.body?.text || "").trim();
  if (!text) return res.status(400).json({ error: "No text" });

  try {
    await pool.query("INSERT INTO messages (text) VALUES ($1)", [text]);
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

const PORT = process.env.PORT || 3000;

init()
  .then(() => {
    app.listen(PORT, () => console.log("Server running on port", PORT));
  })
  .catch((e) => {
    console.error("DB init failed:", e.message);
    process.exit(1);
  });
