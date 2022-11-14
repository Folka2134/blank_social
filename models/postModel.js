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
  userId: {
    require: true,
    type: String,
  },
});

module.exports = mongoose.model("Posts", postSchema);
