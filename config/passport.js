var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

//using local strategy (email and password);
passport.use(new LocalStrategy(
  {
      usernameField: "email"
    },
    function(email, password, done) {
          // When a user tries to sign in this code runs
      db.User.findOne({
          where: {
            email: email
          }
        }).then(function(dbUser) {

          //IF invalid Email or no user on databse with that email.
          if (!dbUser) {
              return done(null, false, {
                message: "Incorrect email."
              });
            }
          //IF invalid Password 
            else if (!dbUser.validPassword(password)) {
              return done(null, false, {
                message: "Incorrect password."
              });
            }

            return done(null, dbUser);
          });
        }
      ));

// sequelize serialise and deserialise user data.
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;