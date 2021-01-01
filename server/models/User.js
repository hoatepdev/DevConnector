const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  avatar: {
    type: String,
  },
  isVerified: {
    type: Boolean,
    default: false
  },
});

const User = mongoose.model("users", UserSchema);

module.exports = User;