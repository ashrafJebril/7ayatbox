const express = require("express");
const router = express.Router();
const providerCategories = require("../../DataBase/providerCategories");

router.use(function(res, req, next) {
  next();
});
router.route("/:category").post(function(req, res) {
  providerCategories.getAllProviderCategories(req.params.category, function(
    result
  ) {
    res.json(result);
  });
});

module.exports = router;
