const express = require("express");
const db = require("./db");

db.connectToSQL();
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("hello world");
});

app.use("/api/students", require("./routes/students"), (req, res) => {
    res.send("Endpoint ready!");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
