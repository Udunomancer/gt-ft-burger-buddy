// ===Require mysql dependency===
const mysql = require("mysql");

// ===Create mysql connection===
let connection;

if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "password",
        database: "burger_db"
    });
};

// ===Connect to mysql server===
connection.connect(function (err) {
  if (err) {
    console.error("Error connecting: " + err.stack);
    return;
  }
  console.log("Connected as id: " + connection.threadId);
});

// ===Export mysql connection===
module.exports = connection;
