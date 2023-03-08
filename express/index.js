const express = require('express')
const app = express()
const port = 5000
var cors = require('cors')


app.use(express.json());
app.use(cors())
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


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})