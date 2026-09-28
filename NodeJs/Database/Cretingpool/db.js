const { Pool } = require("pg");
// postgers is a wildely nong database taht allows us to stoere we can use the module pg and install then create pool to connect
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "TEST_DB",
  password: "your_password",
  port: 5432,
});

async function test_db() {
  let client;
  try {
    // 1. Manually request a connection from the pool.
    // If the password is wrong and Postgres requires one, this will throw an error immediately!
    client = await pool.connect();
    console.log("🔒 Credentials verified. Connected to the database.");

    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        quantity INT DEFAULT 0,
        price NUMERIC(10, 2) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;

    // 2. Run your query using the verified client
    await client.query(createTableQuery);
    console.log("✅ 'users' table verified/created successfully.");
  } catch (err) {
    console.error("❌ Database Connection Error:", err.message);
  } finally {
    // 3. Always release the client back to the pool, then close the pool
    if (client) client.release();
    await pool.end();
  }
}

test_db();
