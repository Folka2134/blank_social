const express = require("express");
const homeRoutes = express.Router();
const homeController = require("../controllers/homeController.js");
const authController = require("../controllers/auth.js");
const postsController = require("../controllers/postsController.js");
const { ensureAuth } = require("../middleware/auth");

/*
  GET
*/

homeRoutes.get("/", homeController.getHomePage);
homeRoutes.get("/login", authController.getLoginPage);
homeRoutes.get("/signup", authController.getSignupPage);
homeRoutes.get("/logout", authController.logout);
homeRoutes.get("/feed", ensureAuth, postsController.getFeedPage);

/*
  POST
*/

homeRoutes.post("/login", authController.postLogin);
homeRoutes.post("/signup", authController.postSignup);

module.exports = homeRoutes;
