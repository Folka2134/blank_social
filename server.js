const express = require("express");
const homeRoutes = require("./routes/homeRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use("/", homeRoutes);

app.listen(PORT, () => {
  console.log(`server running on PORT:${PORT}`);
});
