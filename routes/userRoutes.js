const express = require("express");
const userRoutes = express.Router();
const userController = require("../controllers/userController.js");

/*
  GET
*/

userRoutes.get("/", userController.getFeedPage);

module.exports = userRoutes;
