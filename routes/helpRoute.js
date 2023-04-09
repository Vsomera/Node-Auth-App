const express = require("express");
const router = express.Router();

// http://localhost:8000/help
router.get("/", (req, res) => {
  res.send("welcome to the help page");
});

// http://localhost:8000/help/policy
router.get("/policy", (req, res) => {
    res.send("welcome to the policy page");
});

// http://localhost:8000/help/contact-us
router.get("/contact-us", (req, res) => {
    res.send("welcome to the contact page");
});



module.exports = router; // imports helpRoute into server.js
