// ===Require mysql dependency===
const mysql = require("mysql");

// ===Create mysql connection===
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "V!sionfor20202",
    database: "burger_db"
});

// ===Connect to mysql server===
connection.connect(function(err) {
    if(err) {
        console.error("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as id: " + connection.threadId);
});

// ===Export mysql connection===
module.exports = connection;