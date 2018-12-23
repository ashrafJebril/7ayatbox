const pool = require("./ConnectionPool");
const insertProvider = (providerName, providerPassword) => {
  pool.getConnection(function(err, con) {
    if (err) console.log("connection err", err);
    console.log("Connected!");
    var sql = `INSERT INTO Provider (name, password) VALUES ("${providerName}","${providerPassword}")`;
    con.query(sql, function(err, result) {
      if (err) console.log("query error", err);
      console.log("1 record inserted");
      con.release(); //releasing the connection back to the pool
    });
  });
};
const selectProviders = cb => {
  pool.getConnection(function(err, con) {
    if (err) console.log("SELECT connection err", err);
    con.query("SELECT * FROM Provider", function(err, results) {
      if (err) console.log("SELECT query error", err);
      //results is the returned array of objects
      cb(results);
      con.release();
    });
  });
};
module.exports.insertProvider = insertProvider;
module.exports.selectProviders = selectProviders;
