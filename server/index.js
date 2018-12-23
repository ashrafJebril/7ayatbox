const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const passport = require("passport");
const userRouter = require("./routers/user.js");
const port = process.env.PORT || 5000;
const db = require("../DataBase/index");
require("./passport")(passport);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Priority to serve any static files.
app.use(express.static(path.resolve(__dirname, "../client/build")));

app.use(
  session({
    secret: "thesecret",
    saveUninitialized: true,
    resave: true
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use("/user", userRouter);
app.get("/hello", (req, res) => {
  //db.insertProvider("yazeed", "y1y2y3");
  // db.selectProviders(results => {
  //   console.log("eeeeeee", results);
  //   var hi = `Hello From Express and mysql ${results[0].name}`;
  //   res.send({ express: hi });
  // });

  var hi = `Hello From Express and mysql`;
  res.send({ express: hi });
});
app.get("/profile", function(req, res) {
  console.log("sdsdsdsdsdsdsaaa");
  res.send(req.session);
});
// All remaining requests return the React app, so it can handle routing.
app.get("*", function(request, response) {
  response.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});
app.listen(port, () => console.log(`Listening on port ${port}`));
