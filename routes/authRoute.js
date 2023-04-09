const express = require("express");
const passport = require("../middleware/passport");
const { forwardAuthenticated } = require("../middleware/checkAuth");

const router = express.Router();

// Displays login page
router.get(
  "/login", 
  forwardAuthenticated, 
  (req, res) => res.render("login")); // renders the login.ejs page to browser on call

// Authenticates user details when button is clicked
router.post(
  "/login",
  passport.authenticate("local", { // passport verifies user email and password (strategy located in ../middleware/passport)
    successRedirect: "/dashboard", // if user exist, redirect to dashboard
    failureRedirect: "/auth/login", 
  })
  // (req, res) => {
  //   console.log(req.body)
  //   res.send(req.body)
  // }
);

// code ran when logout button is clicked
// logs user out of session and redirects to login page
router.get("/logout", (req, res) => {
  req.logout((err) => {
    err && next(err)     // if (err) { return next(err); }
    res.redirect('/auth/login');
  });
});

module.exports = router;
