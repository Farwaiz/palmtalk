const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
require("./User");
const User = mongoose.model("user");

app.use(bodyParser.json());
//const pass = "kBIJfGkEpX4vtIwB";
const mongoURI =
  "mongodb+srv://Ravihara:kBIJfGkEpX4vtIwB@cluster1.ivh2y5n.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("connected successfully");
});
mongoose.connection.on("error", (err) => {
  console.log("error occurred");
});

app.post("/send-data", (req, res) => {
  const user = new User({
    email: req.body.email,
    username: req.body.username,
    repassword: req.body.repassword,
  });
  user
    .save()
    .then((data) => {
      console.log(data);
      res.send("successfully data added");
    })
    .catch((err) => {
      console.log(err);
    });
});
//login stuff
app.post("/login", (req, res) => {
  let { email = "", password = "" } = req.body;
  email = email.trim();
  password = password.trim();

  if (email === "" || password === "") {
    res.json({
      status: "FAILED",
      message: "Empty credentials supplied",
    });
  } else {
    User.find({ email })
      .then((data) => {
        if (data.length) {
          if (data[0].repassword === password) {
            res.json({
              status: "SUCCESS",
              message: "Sign in successfully",
              data: data,
            });
          } else {
            res.json({
              status: "FAILED",
              message: "An error occurred while comparing passwords",
            });
          }
        } else {
          res.json({
            status: "FAILED",
            message: "Invalid credentials entered",
          });
        }
      })
      .catch((err) => {
        res.json({
          status: "FAILED",
          message: "An error occurred while checking for an existing user",
        });
      });
  }
});

app.get("/", (req, res) => {
  res.send("welcome to nodejs");
});

app.listen(3000, () => {
  console.log("listening on 3000");
});
//pw-kBIJfGkEpX4vtIwB
