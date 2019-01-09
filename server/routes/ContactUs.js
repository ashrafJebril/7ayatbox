const express = require("express");
const router = express.Router();
const contactus = require("../../DataBase/ContactUs");

router.use(function(res, req, next) {
  next();
});
//gettin user input and save in the database
router.route("/submit").post(function(req, res) {
  contactus.addMessage(
    req.body.name,
    req.body.phone,
    req.body.message,
    function(result) {
      res.json(result);
    }
  );
});

module.exports = router;
