const express = require("express");
const router = express.Router();
const services = require("../../DataBase/Services");

router.use(function(res, req, next) {
  next();
});
//getting categories based on the category provided
router.route("/:category").post(function(req, res) {
  console.log("dsdsdsdsdsdsdsd");
  if (req.params.category === "Recommendation") {
    services.getRecommendedServices(
      req.body.hallPrice,
      req.body.zafehPrice,
      req.body.djPrice,
      req.body.beautyCentersPrice,
      req.body.flowersPrice,
      req.body.carsPrice,
      function(result) {
        res.json(result);
      }
    );
  } else {
    services.getAllServices(req.params.category, function(result) {
      console.log("dsdsdsdsdsdsdsd");
      res.json(result);
    });
  }
});


module.exports = router;
