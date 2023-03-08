const mysql=require('mysql2');
  // create the connection to database
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:"mehak@811",
    database: 'library'
  });

  const connectToSql=()=>{
    connection.connect(()=>{
      console.log("CONNECTED");
    })
  }
  module.exports={connection,connectToSql};