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

userRoutes.put("/addLike", postsController.addLike);

module.exports = userRoutes;
