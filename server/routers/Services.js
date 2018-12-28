const express = require("express");
const router = express.Router();
const services = require("../../DataBase/Services");

router.use(function(res, req, next) {
  next();
});
router.route("/:category").post(function(req, res) {
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
      res.json(result);
    });
  }
});

module.exports = router;
