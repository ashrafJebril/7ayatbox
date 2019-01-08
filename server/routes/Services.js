const express = require("express");
const router = express.Router();
const services = require("../../DataBase/Services");

router.use(function(res, req, next) {
  next();
});
//getting categories based on the category provided
router.route("/:category").get(function(req, res) {
  services.getAllServices(req.params.category, function(result) {
    res.json(result);
  });
});
router.route("/Recommendation").post(function(req, res) {
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
});
module.exports = router;
