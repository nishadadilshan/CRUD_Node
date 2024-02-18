const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/productModels");

app.use(express.json());

//route
app.get("/", (req, res) => {
  res.send("Hello NODE API");
});

app.get("/blog", (req, res) => {
  res.send("Hello Blog");
});

app.post("/product", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.meesage });
  }
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
