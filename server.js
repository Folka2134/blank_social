const express = require("express");
const mongoose = require("mongoose");
const homeRoutes = require("./routes/homeRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// MONGODB Setup
require("dotenv").config();
const mongoString = process.env.MONGODB_URL;
mongoose.connect(mongoString);

const database = mongoose.connection;
database.on("error", (error) => {
  console.log(error);
});
database.once("connected", () => {
  console.log("Database Connected");
});

// Middleware
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use("/", homeRoutes);
app.use("/feed", userRoutes);

app.listen(PORT, () => {
  console.log(`server running on PORT:${PORT}`);
});
