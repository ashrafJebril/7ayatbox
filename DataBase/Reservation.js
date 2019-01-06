const pool = require("./ConnectionPool");

const addReservation = (
  serviceID,
    userID,
    
    providerID,
  
    cb
  ) => {
  
  
    pool.getConnection(function(err, con) {
      if (err) console.log("connection err", err);
      console.log("Connected!");
      var sql = `INSERT INTO reservations (userID,proCateID,providerID) VALUES 
      (${ userID},${ serviceID},${ providerID})`
      con.query(sql, function(err, result) {
        if (err) console.log("query error", err);
        console.log("1 record inserted");
        cb(err, result);
        con.release(); //releasing the connection back to the pool

      });
    });
  };
  module.exports.addReservation = addReservation;