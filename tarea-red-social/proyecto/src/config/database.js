//import mysql from "mysql2";
const mysql = require('mysql2');

// create the connection to database
const db = mysql.createConnection({
  host: 'localhost' ,
  user: 'root',
  password: 'admin',
  database: 'pos_db'
});

db.connect(err => {
  if(err) {
      throw err
  }
  console.log('Mysql conecto)')
})

 
module.exports = db;
//export default db;