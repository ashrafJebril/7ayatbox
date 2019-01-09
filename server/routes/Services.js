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
router.route("/deleteService").post(function(req, res) {
  var body = req.body;
  var id = body.id;
console.log("my provider router")

  service.deleteService(
    id,

    function(err, result) {
      console.log("my result",result)
      if (err) console.log("err selecting provider services");
      res.send(result);
    }
  );
});
module.exports = router;
