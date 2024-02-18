const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/productModels");

app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("Hello NODE API");
});

app.get("/blog", (req, res) => {
  res.send("Hello Blog");
});

//get all the products
app.get("/getProducts", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//get product by product id
app.get("/getProductByID/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//add product
app.post("/addProduct", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.meesage });
  }
});

app.put("/updateProduct/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateProduct = await Product.findByIdAndUpdate(id, req.body);

    //cannot find product in database
    if (!updateProduct) {
      return res
        .status(404)
        .json({ message: `Cannot find any product with this id ${id}` });
    }
    const newProduct = await Product.findById(id);
    res.status(200).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//create database connection
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
