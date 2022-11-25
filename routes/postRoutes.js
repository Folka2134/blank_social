const express = require("express");
const userRoutes = express.Router();

const upload = require("../middleware/multer");
const postsController = require("../controllers/postsController.js");

/*
  GET
*/

userRoutes.get("/", postsController.getFeedPage);

/* 
  POST
*/

userRoutes.post(
  "/createPost",
  upload.single("file"),
  postsController.createPost
);

/* 
  PUT
*/

userRoutes.post("/addLike/:id", postsController.addLike);
userRoutes.post("/deletePost/:id", postsController.deletePost);

module.exports = userRoutes;
