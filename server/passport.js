const localStrategy = require("passport-local").Strategy;
const user = require("../DataBase/user");

module.exports = function(passport) {
  passport.serializeUser(function(user, done) {
    done(null, user);
  });
  passport.deserializeUser(function(user, done) {
    done(null, user);
  });

  passport.use(
    new localStrategy(function(username, password, done) {
      console.log("ddsdsdsdsffg", username, password);
      user.checkPassword(req.body.email, req.body.password, function(
        isMatched,
        user,
        err
      ) {
        if (isMatched) {
          res.send(isMatched);
        } else {
          res.status(500).send("login error");
        }
      });
    })
  );
};
