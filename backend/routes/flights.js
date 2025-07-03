const express = require('express');
const db = require('../config/database');

const router = express.Router();

router.post('/search', (req, res) => {
    const { from, to } = req.body;

    if (!from || !to) {
        return res.status(400).json({ error: "Both 'from' and 'to' are required." });
    }

    const query = `
        SELECT * FROM flights
        WHERE LOWER(origin_airport) = LOWER(?) AND LOWER(destination_airport) = LOWER(?)
    `;

    db.all(query, [from, to], (err, rows) => {
        if (err) {
            console.error("Database query error:", err);
            return res.status(500).json({ error: "Internal server error" });
        }

        res.json(rows);
    });
});

module.exports = router;
