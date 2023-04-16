const express = require("express");
const router = express.Router();
const { ensureAuthenticated, isAdmin } = require("../middleware/checkAuth"); // imports ensureAuthenticated function checking if user is logged in 


// Welcome route -> localhost:8000 redirects to login page
router.get("/", (req, res) => {
  // res.send("welcome");
  res.redirect("/auth/login")
});

// Dashboard -> localhost:8000/dashboard 
router.get("/dashboard", ensureAuthenticated, (req, res) => {
  res.render("dashboard", { // loads dashboard.ejs and sends user to dashboard
    user: req.user,
  });
});

module.exports = router;
