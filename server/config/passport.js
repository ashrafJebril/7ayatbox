const LocalStrategy = require("passport-local").Strategy;

const User = require("../../DataBase/user");

module.exports = function(passport) {
  passport.use(
    new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
      // Match user
      User.checkUser(email, function(results) {
        if (results.length > 0) {
          // Match password
          User.checkPassword(email, password, function(isMatch, result, err) {
            if (err) throw err;
            if (isMatch) {
              console.log("what the function", result);
              return done(null, result);
            } else {
              return done(null, false, { message: "Password incorrect" });
            }
          });
        } else {
          return done(null, false, { message: "The Email is not registered" });
        }
      });
    })
  );

  passport.serializeUser(function(user, done) {
    console.log("oooooo", user);
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    console.log("id", id);
    done(null, {});
    // User.findById(id, function(err, user) {
    //   done(err, user);
    // });
  });
};
