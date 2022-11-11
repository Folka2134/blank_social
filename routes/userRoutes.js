const express = require("express");
const userRoutes = express.Router();
const userController = require("../controllers/userController.js");

/*
  GET
*/

userRoutes.get("/", userController.getFeedPage);
userRoutes.get("/createPost", userController.getCreatePost);

/* 
  POST
*/

module.exports = userRoutes;
