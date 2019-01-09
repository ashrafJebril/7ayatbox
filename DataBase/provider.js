const pool = require("./ConnectionPool");
const bcrypt = require("bcryptjs");
const SALT_WORK_FACTOR = 10;

const checkProvider = (email, cb) => {
  pool.getConnection(function(err, con) {
    if (err) console.log("CheckProvider connection err", err);
    con.query(`SELECT * FROM providers Where email= ("${email}")`, function(
      err,
      results
    ) {
      if (err) console.log("CheckProvider query error", err);
      //results is the returned array of objects
      cb(results);
      con.release();
    });
  });
};

const addProvider = (name, email, password, cb) => {
  hashPassword(password, function(err, hashedPassword) {
    if (err) console.log("HashPassword Error", err);
    pool.getConnection(function(err, con) {
      if (err) console.log("connection err", err);
      console.log("Connected!");
      var sql = `INSERT INTO providers (name, password,email) VALUES ("${name}","${hashedPassword}","${email}")`;
      con.query(sql, function(err, result) {
        if (err) console.log("query error", err);
        console.log("1 record inserted");
        cb(err, result.insertId);
        con.release(); //releasing the connection back to the pool
      });
    });
  });
};
//generating hash password using bcrypt
const hashPassword = function(password, cb) {
  bcrypt.hash(password, SALT_WORK_FACTOR, function(err, hash) {
    if (err) return cb(err, null);
    cb(null, hash);
  });
};
//checking login password with database
const checkPassword = (email, password, cb) => {
  pool.getConnection(function(err, con) {
    if (err) console.log("CheckPassword connection err", err);
    con.query(
      `SELECT id,name,password FROM providers Where email = "${email}"`,
      function(err, results) {
        if (err) console.log("CheckPassword query error", err);
        //results is the returned array of objects
        if (results.length > 0) {
          bcrypt.compare(password, results[0].password, function(err, isMatch) {
            if (err) return cb(null, err);
            if (isMatch) {
              cb({ id: results[0].id, name: results[0].name }, err);
            } else {
              cb(isMatch, err);
            }
          });
        } else {
          cb(false, null);
        }
        con.release();
      }
    );
  });
};
module.exports.checkProvider = checkProvider;
module.exports.checkPassword = checkPassword;
module.exports.addProvider = addProvider;
