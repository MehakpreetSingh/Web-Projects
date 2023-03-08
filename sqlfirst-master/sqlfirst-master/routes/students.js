const express = require("express");
const fs = require("fs");
const router = express.Router();
const db = require("../db");

router.get("/all", (req, res) => {
    const query = fs.readFileSync("./sql/queries/all.sql").toString();

    db.connection.query(query, function (error, results, fields) {
        if (error) {
            throw error;
        }
        console.log(results);
        res.send(results);
    });
});

module.exports = router;
