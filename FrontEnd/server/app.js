const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//password =5hqiaFjBsOSpjhyc
const mongoUri =
  "mongodb+srv://Ravihara:5hqiaFjBsOSpjhyc@cluster0.iaxel6r.mongodb.net/?retryWrites=true&w=majority";

app.get("/", (req, res) => {
  res.send("welcome to node js");
});

app.listen(3000, () => {
  console.log("server running");
});
