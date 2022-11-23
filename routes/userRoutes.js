const express = require("express");
const userRoutes = express.Router();
const userController = require("../controllers/userController.js");

/*
  GET
*/

userRoutes.get("/", userController.getFeedPage);

/* 
  POST
*/

userRoutes.post("/createPost", userController.createPost);

/* 
  PUT
*/

userRoutes.put("/addLike", userController.addLike);

module.exports = userRoutes;
