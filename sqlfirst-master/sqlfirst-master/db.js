const sql = require("mysql2");
var connection = sql.createConnection({
    host: "localhost",
    user: "root",
    password: "Harsh2002#",
    database: "school",
});
const connectToSQL = () => {
    connection.connect(() => {
        console.log("Connected to db");
    });
};

module.exports = { connectToSQL, connection };
