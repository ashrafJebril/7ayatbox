const express = require("express");
const router = express.Router();
const provider = require("../../DataBase/provider");
const service=require("../../DataBase/Services")

router.use(function(res, req, next) {
  next();
});
router.route("/signup").post(function(req, res) {
  var body = req.body;
  var email = body.email;
  var password = body.password;
  var name = body.name;
  provider.checkProvider(email, function(result) {
    if (result.length > 0) {
      res.status(500).send("Username already exists");
    } else {
      provider.addProvider(name, email, password, function(err, user) {
        if (err) {
          console.log("errr", err);
          res.status(500).send("db error");
        } else {
          res.redirect("/login");
        }
      });
    }
  });
});
router.route('/addService').post(function(req,res){
  var body=req.body;
  var title=body.title;
  var description=body.description;
  var price=body.price;
  var imageUrl=body.imageUrl;
  var providerId=body.providerId;
  var categoryId=body.categoryId;
  var rate=body.rate;
  var capicity=body.capicity;
  var location=body.location

  console.log("body",body)

  service.addService(capicity,description,imageUrl,location,price,rate,title,providerId,categoryId , function(err,result){
    if(err)
    console.log("err adding service")
    res.send(true)

    
  })

  

  
  
})

// router.post(
//   "/login",
//   passport.authenticate("local", {
//     failureRedirect: "/login",
//     successRedirect: "/profile"
//   }),
//   function(req, res) {
//     console.log("yoooooooo");
//     res.send("hey");
//   }
// );

router.route("/login").post(function(req, res) {
  provider.checkPassword(req.body.email, req.body.password, function(
    result,
    user,
    err
  ) {
    if (result) {

      res.status(200).send(result);
    } else {
      res.status(500).send("login error");
    }
  });
});

module.exports = router;
