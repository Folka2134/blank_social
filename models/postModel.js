const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  image: {
    require: true,
    type: String,
  },
  caption: {
    require: true,
    type: String,
  },
  likes: {
    require: true,
    type: Number,
  },
  createdBy: {
    require: true,
    type: String,
  },
  createdAt: {
    require: true,
    type: Date,
  },
  deleted: {
    require: true,
    type: Boolean,
  },
});

module.exports = mongoose.model("Posts", postSchema);
