// db-test.js
import pkg from "pg";
const { Client } = pkg;

const client = new Client({
  host: "db",
  user: "postgres",
  password: "secret",
  database: "postgres",
});

(async () => {
  try {
    await client.connect();
    const res = await client.query("SELECT NOW() AS current_time");
    console.log(" Connected to PostgreSQL!");
    console.log(" Database time:", res.rows[0].current_time);
  } catch (err) {
    console.error(" Connection failed:", err.message);
  } finally {
    await client.end();
  }
})();
