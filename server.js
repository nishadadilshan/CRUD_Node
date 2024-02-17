const express = require("express");
const app = express();

//route
app.get("/", (req, res) => {
  res.send("Hello NODE API");
});

app.get("/blog", (req, res) => {
  res.send("Hello Blog");
});

app.listen(3000, () => {
  console.log("Node api app is running on port 3000");
});
