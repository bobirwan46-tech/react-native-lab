import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import pool from "./pool.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const migrationsDir = path.join(__dirname, "migrations");

async function runMigrations() {
  try {
    console.log("Running migrations...");

    const files = fs
      .readdirSync(migrationsDir)
      .filter((file) => file.endsWith(".sql"))
      .sort();

    for (const file of files) {
      const filePath = path.join(migrationsDir, file);
      const sql = fs.readFileSync(filePath, "utf8");

      console.log(`Running migration: ${file}`);
      await pool.query(sql);
      console.log(`Completed: ${file}`);
    }

    console.log("All migrations completed successfully.");

    const result = await pool.query(`
        SELECT tablename
        FROM pg_tables
        WHERE schemaname = 'public'
        ORDER BY tablename;
`);

console.log(result.rows);

  } catch (error) {
    console.error("Migration failed:");
    console.error(error);
  } finally {
    await pool.end();
  }
}

runMigrations();