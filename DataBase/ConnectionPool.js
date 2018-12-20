var mysql = require("mysql");

module.exports = mysql.createPool({
  connectionLimit: 10,
  host: "sql2.freemysqlhosting.net",
  user: "sql2270948",
  password: "wN5%kN9!",
  database: "sql2270948"
});
