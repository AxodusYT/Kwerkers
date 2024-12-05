const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./feedback.db");

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS feedback (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            feedback TEXT NOT NULL
        )
    `);
});

module.exports = db;
