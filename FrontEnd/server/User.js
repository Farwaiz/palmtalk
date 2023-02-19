const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: String,
  username: String,
  password: String,
  repassword: String,
});

mongoose.model("user", UserSchema);
