const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  console.log("working");
});

app.listen(PORT, () => {
  console.log(`server running on PORT:${PORT}`);
});
