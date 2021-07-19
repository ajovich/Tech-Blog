const router = require("express").Router();
const { Comment, Post, User } = require("../models");
const { sequelize } = require("../models");
const withAuth = require("../auth");

// need other routes


// Login route
router.get("/login", (req, res) => {
    if (req.session.logged_in) {
      res.redirect("/dashboard");
      return;
    }
    res.render("login");
  });
  
// Signup route
router.get("/signup", (req, res) => {
    if (req.session.logged_in) {
      res.render("dashboard", { logged_in: req.session.logged_in });
    } else {
      res.render("signup", { logged_in: req.session.logged_in });
    }
  });
  
  module.exports = router;