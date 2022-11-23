const express = require("express");
const userRoutes = express.Router();
const postsController = require("../controllers/postsController.js");

/*
  GET
*/

userRoutes.get("/", postsController.getFeedPage);

/* 
  POST
*/

userRoutes.post("/createPost", postsController.createPost);

/* 
  PUT
*/

userRoutes.put("/addLike/:id", postsController.addLike);

module.exports = userRoutes;
