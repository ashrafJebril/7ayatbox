const express = require("express");
const router = express.Router();
const contactus = require("../../DataBase/ContactUs");

router.use(function(res, req, next) {
    next();
  });
  //getting categories based on the category provided
  router.route("/submit").post(function(req, res) {
    console.log("Hello World");
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