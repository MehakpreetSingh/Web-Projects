var express = require('express');
var app = express();
const cors = require('cors')

app.use(cors())
app.use(express.json());

const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mehak@811',
  database: 'library'
});

const connectToSql = () => {
  connection.connect(() => {
    console.log("CONNECTED");
  })
}

connectToSql()


app.get('/', (req, res)=> {
  console.log("hello")
  res.send("hello")
})

app.use("/api/books", require("./routes/books"), (req, res) => {
  res.send("Running");
});

// simple query
// connection.query(
//   'SELECT * FROM book',
//   function(err, results, fields) {
//     console.log(results); // results contains rows returned by server
//     console.log(fields); // fields contains extra meta data about results, if available
//   }
// );

app.listen(5000,  ()=> {
  console.log('Server is running..');
});