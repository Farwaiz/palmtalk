const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: String,
  username: String,
  password: String,
});

mongoose.model("user", UserSchema);
