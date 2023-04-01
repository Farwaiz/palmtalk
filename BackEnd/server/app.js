const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
require("./User");

const User = mongoose.model("user");
// Set up session middleware
const session = require("express-session");
app.use(
  session({
    secret: "my-secret-key",
    resave: false,
    saveUninitialized: false,
  })
);

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

//register
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
      // Store email in session
      req.session.email = req.body.email;
      res.send("successfully data added");
    })
    .catch((err) => {
      console.log(err);
    });
});

//login
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
            // Store email in session
            req.session.email = email;
            res.json({
              status: "SUCCESS",
              message: "Sign in successfully",
              data: data,
            });
          } else {
            res.json({
              status: "FAILED",
              message: "Invalid Password",
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

//profile
app.get("/profile", (req, res) => {
  const email = req.session.email;

  if (!email) {
    return res.send("You must be logged in to view this page.");
  }

  User.findOne({ email })
    .then((user) => {
      if (user) {
        res.json({
          status: "SUCCESS",
          message: "Profile retrieved successfully",
          data: {
            username: user.username,
            email: user.email,
          },
        });
      } else {
        res.json({
          status: "FAILED",
          message: "User not found",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.json({
        status: "FAILED",
        message: "An error occurred while fetching user data",
      });
    });
});

// update password
app.post("/update-password", (req, res) => {
  const email = req.session.email;
  const { oldPassword, newPassword } = req.body;

  if (!email) {
    return res.send("You must be logged in to update your password.");
  }

  User.findOne({ email })
    .then((user) => {
      if (user) {
        if (user.password === oldPassword) {
          user.password = newPassword;
          user
            .save()
            .then(() => {
              res.json({
                status: "SUCCESS",
                message: "Password updated successfully",
              });
            })
            .catch((err) => {
              console.log(err);
              res.json({
                status: "FAILED",
                message: "An error occurred while updating password",
              });
            });
        } else {
          res.json({
            status: "FAILED",
            message: "Incorrect old password",
          });
        }
      } else {
        res.json({
          status: "FAILED",
          message: "User not found",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.json({
        status: "FAILED",
        message: "An error occurred while fetching user data",
      });
    });
});

app.get("/", (req, res) => {
  res.send("welcome to nodejs");
});

app.listen(3000, () => {
  console.log("listening on 3000");
});
//pw-kBIJfGkEpX4vtIwB
