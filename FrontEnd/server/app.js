const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("./User");

app.use(bodyParser.json());

const User = mongoose.model("user");
//pw=9LyQQKlU5RVjPdXc
//password =5hqiaFjBsOSpjhyc
const mongoUri =
  "mongodb+srv://RaviharaDS:9LyQQKlU5RVjPdXc@cluster0.ogzdvtk.mongodb.net/?retryWrites=true&w=majority";

mongoose.set("strictQuery", false);
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected yeah", () => {
  console.log("connected to mongo db ");
});

mongoose.connection.on("error", (err) => {
  console.log("couldnot connected", err);
});

app.get("/", (req, res) => {
  res.send("welcome to node js");
});

app.post("/send-data", (req, res) => {
  const user = new User({
    email: req.body.email,
    username: req.body.namem,
    password: req.body.password,
    repassword: req.body.repassword,
  });
  user.save().then((data) => {
    console.log(data);
  });

  res.send("posted");
});

app.listen(3000, () => {
  console.log("server running");
});
