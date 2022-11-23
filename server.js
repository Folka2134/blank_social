const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const flash = require("express-flash");
const ejs = require("ejs");
const connectDB = require("./config/database");
const homeRoutes = require("./routes/homeRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

require("dotenv").config({ path: "./config/.env" });

connectDB();
// Passport Setup
require("./config/passport")(passport);

// Middleware
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(flash());
app.use(passport.initialize());
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());
require("./config/passport")(passport);

// Routes
app.use("/", homeRoutes);
app.use("/posts", userRoutes);

app.listen(PORT, () => {
  console.log(`server running on PORT:${PORT}`);
});
