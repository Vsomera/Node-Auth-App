module.exports = {
  ensureAuthenticated: function (req, res, next) {
    if (req.isAuthenticated()) { // returns true if the user has a session
      return next(); // tells passport to move forward
    }
    res.redirect("/auth/login"); // if user does not have a session redirect to login
  },
  forwardAuthenticated: function (req, res, next) {
    if (!req.isAuthenticated()) { // checks if user does not have a session
      return next(); // tells passport to move forward
    }
    res.redirect("/dashboard"); // if user is logged in redirect them to their dashboard
  },
};
