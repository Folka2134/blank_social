const express = require("express");
const homeRoutes = express.Router();
const homeController = require("../controllers/homeController.js");
const authController = require("../controllers/auth.js");

/*
  GET
*/

homeRoutes.get("/", homeController.getHomePage);
homeRoutes.get("/login", authController.getLoginPage);
homeRoutes.get("/signup", authController.getSignupPage);

module.exports = homeRoutes;
