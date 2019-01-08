const pool = require("./ConnectionPool");

const addReservation = (userID, providerID, cb) => {
  pool.getConnection(function(err, con) {
    if (err) console.log("connection err", err);
    console.log("Connected!");
    var sql = `INSERT INTO reservations (userID,providerID) VALUES 
      (${userID},${providerID})`;
    con.query(sql, function(err, result) {
      if (err) console.log("query error", err);
      console.log("1 record inserted");
      cb(err, result);
      con.release(); //releasing the connection back to the pool
    });
  });
};
const addReservationDetails = (cartDetails, reservationID, cb) => {
  cartDetails.forEach((ele, index) => {
    console.log("WHAT ", index, cartDetails.length);
    if (index === cartDetails.length - 1) {
      cb();
    }
    pool.getConnection((err, con) => {
      if (err) console.log("connection err", err);
      console.log("Connected!");

      var sql = `INSERT INTO reservationDetails (reservationId,serviceId) VALUES 
      (${reservationID},${ele.serviceID})`;
      con.query(sql, function(err, result) {
        if (err) console.log("query error", err);
        console.log("1 record inserted");
        // cb(err, result);
        con.release(); //releasing the connection back to the pool
      });
    });
  });
};
const getUserReservationDetails = (userID, cb) => {
  pool.getConnection(function(err, con) {
    if (err) console.log("connection err", err);
    console.log("Connected!");
    var sql = `SELECT T4.name AS providerName,title,description,imageUrl,capacity,location,price,rate  FROM reservations as T1 JOIN reservationDetails AS T2 ON T1.id = T2.reservationID JOIN services AS T3 ON T3.id = T2.serviceID JOIN providers as T4 ON T4.id = T1.providerID WHERE (T1.userID = "${userID}")`;
    con.query(sql, function(err, result) {
      if (err) console.log("query error", err);

      cb(err, result);
      con.release(); //releasing the connection back to the pool
    });
  });
};

module.exports.addReservation = addReservation;
module.exports.addReservationDetails = addReservationDetails;
module.exports.getUserReservationDetails = getUserReservationDetails;
