//import mysql from "mysql2";
const mysql = require('mysql2');

// conexion a la base de datos sql
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'peki123',
    database: 'register'
});

db.connect(err => {
    if(err) {
        throw err
    }
    console.log('Mysql conecto)')
})

//export default db;
module.exports = db;