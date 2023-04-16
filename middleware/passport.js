const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const userController = require("../controllers/userController");

const localLogin = new LocalStrategy( // local strategy
  {
    usernameField: "email", 
    passwordField: "password",
  },

  (email, password, done) => {

    // checks if user exists in database
    const user = userController.getUserByEmailIdAndPassword(email, password);

    // if user exists
    return user // bool value
      ? done(null, user)
      : done(null, false, {
          message: "Your login details are not valid. Please try again",
        });
  }
);

// creates a session for the user (stores info on the server abt the user)
// executed by passport.js when done function is returned with a user
// it then attached the user object in a var named (req.user)
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  let user = userController.getUserById(id);  
  if (user) {
    done(null, user);
  } else {
    done({ message: "User not found" }, null);
  }
});

module.exports = passport.use(localLogin);
