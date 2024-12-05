const express = require("express");
const router = express.Router();
const db = require("../database");

router.post("/", async (req, res) => {
    const { name, email, feedback } = req.body;
    try {
        await db.run("INSERT INTO feedback (name, email, feedback) VALUES (?, ?, ?)", [name, email, feedback]);
        res.status(201).json({ message: "Feedback submitted successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to save feedback." });
    }
});

module.exports = router;
