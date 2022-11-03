const express = require("express");

const app = express();
const PORT = 5001;

app.get("/", (req, res) => {
  console.log("working");
});

app.listen(PORT, () => {
  console.log(`server running on PORT:${PORT}`);
});
