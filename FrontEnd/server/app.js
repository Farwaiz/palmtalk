const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("./User");

const User = mongoose.model("user");

//password =5hqiaFjBsOSpjhyc
const mongoUri =
  "mongodb+srv://Ravihara:5hqiaFjBsOSpjhyc@cluster0.iaxel6r.mongodb.net/?retryWrites=true&w=majority";

mongoose.set("strictQuery", false);
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("conneced huttto", () => {
  console.log("connected to mongo db pako");
});

mongoose.connection.on("error", (err) => {
  console.log("couldnot connected", err);
});

app.get("/", (req, res) => {
  res.send("welcome to node js");
});

app.listen(3000, () => {
  console.log("server runniing");
});
