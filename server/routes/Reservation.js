const express = require("express");
const router = express.Router();
const Reservation = require("../../DataBase/Reservation");


router.use(function(res, req, next) {
  next();
});

router.route("/addReservation").post(function(req, res) {
    var body = req.body;
    var serviceID = body.serviceID;
    var userID = body.userID;
    var providerId = body.providerID;
    console.log(body)

  
    Reservation.addReservation(
        serviceID,
        userID,
        providerId, 
      function(err, result) {
        if (err) console.log("err adding reservation");
        res.send(true);
      }
    );
  });

  module.exports = router