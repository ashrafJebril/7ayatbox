var mysql = require("mysql");
//creating a connection pool to prevent overloading the server with connections every time a request is made
module.exports = mysql.createPool({
  connectionLimit: 10,
  host: "sql2.freemysqlhosting.net",
  user: "sql2270948",
  password: "wN5%kN9!",
  database: "sql2270948"
});
