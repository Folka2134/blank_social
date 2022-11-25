const cloudinary = require("cloudinary");

require("dotenv").config({ path: "./config/.env" });

cloudinary.config({
  cloud_name: "df53wjyeh",
  api_key: "351691714113366",
  api_secret: "0X3Pcqv_Fuau94MZnimS4DdW8Mk",
});

module.exports = cloudinary;

// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.API_KEY,
//   api_secret: process.env.API_SECRET,
// });
