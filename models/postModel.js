const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
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
  timestamps: true,
});
