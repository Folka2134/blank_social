const express = require("express");
const homeRoutes = express.Router();
const homeController = require("../controllers/homeController.js");

/*
  GET
*/

homeRoutes.get("/", homeController.getHomePage);
homeRoutes.get("/login", homeController.getLoginPage);
homeRoutes.get("/signup", homeController.getsignupPage);

module.exports = homeRoutes;
