const express = require("express");
const app = express();
const mongoose = require("mongoose");

//route
app.get("/", (req, res) => {
  res.send("Hello NODE API");
});

app.get("/blog", (req, res) => {
  res.send("Hello Blog");
});

mongoose
  .connect(
    "mongodb+srv://nishadadilshan:Dilshan123@cluster0.wqt3hza.mongodb.net/Node-API?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to the mongo DB");
    app.listen(3000, () => {
      console.log("Node api app is running on port 3000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
