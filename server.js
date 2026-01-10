const express = require("express");
const sqlite3 = require("sqlite3").verbose();

const app = express();
app.use(express.json());

// Open or create the database file
const db = new sqlite3.Database("database.db");

// Create a table if it does not exist
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      text TEXT NOT NULL
    )
  `);
});

// Home route
app.get("/", (req, res) => {
  res.send(`
    <h1>Hello 👋</h1>
    <p>This is your first web database.</p>

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

// Get all messages
app.get("/messages", (req, res) => {
  db.all("SELECT * FROM messages", (err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
});

// Save a message
app.post("/messages", (req, res) => {
  const text = req.body.text;
  if (!text) return res.status(400).json({ error: "No text" });

  db.run("INSERT INTO messages (text) VALUES (?)", [text], () => {
    res.json({ success: true });
  });
});

// Start the server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
