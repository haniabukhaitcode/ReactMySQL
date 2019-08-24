let mysql = require("mysql2");
// connection configurations
let db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "sql_react"
});
// connect to database
db.connect();

module.exports = db;
