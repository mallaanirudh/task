import express from "express";
import pkg from "pg";
const { Client } = pkg;

const app = express();
const PORT = 3000;

app.get("/", (req, res) => res.send("🚀 Backend is alive"));

app.get("/db-check", async (req, res) => {
  const client = new Client({
    host: "db",
    user: "postgres",
    password: "secret",
    database: "postgres",
  });

  try {
    await client.connect();
    const result = await client.query("SELECT NOW() AS current_time");
    res.send(`✅ Connected to PostgreSQL at ${result.rows[0].current_time}`);
  } catch (err) {
    res.status(500).send(`❌ DB connection failed: ${err.message}`);
  } finally {
    await client.end();
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Backend running on port ${PORT}`);
});
