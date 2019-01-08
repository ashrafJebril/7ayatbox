const express = require("express");
const router = express.Router();
const Reservation = require("../../DataBase/Reservation");

router.use(function(res, req, next) {
  next();
});

router.route("/addReservation").post(function(req, res) {
  var body = req.body;
  var userID = body.userID;
  var providerId = body.providerID;
  var cartDetails = body.cartDetails;

  Reservation.addReservation(userID, providerId, function(err, result) {
    if (err) console.log("err adding reservation");
    console.log("ReservationId", result.insertId);

    Reservation.addReservationDetails(cartDetails, result.insertId, function() {
      res.send(true);
    });
  });
});
router.route("/userReservation").get(function(req, res) {
  Reservation.getUserReservationDetails(req.query.userId, function(
    err,
    result
  ) {
    if (err) console.log("err getting user reservation", err);
    res.json(result);
  });
});

module.exports = router;
