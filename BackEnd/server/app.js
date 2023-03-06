const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
require("./User");
const User = mongoose.model("user");

app.use(bodyParser.json());
//const pass = "kBIJfGkEpX4vtIwB";
const mongURI =
  "mongodb+srv://Ravihara:kBIJfGkEpX4vtIwB@cluster1.ivh2y5n.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("connected successfully");
});
mongoose.connection.on("error", (err) => {
  console.log("error occured");
});

app.post("/send-data", (req, res) => {
  const user = new User({
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    repassword: req.body.repassword,
  });
  user
    .save()
    .then((data) => {
      console.log(data);
      res.send("success data added");
    })
    .catch((err) => {
      console.log(err);
    });
});
//login stuff

app.get("/", (req, res) => {
  res.send("welcome to nodejs");
});

app.listen(3000, () => {
  console.log("listening on 3000");
});
//pw-kBIJfGkEpX4vtIwB
