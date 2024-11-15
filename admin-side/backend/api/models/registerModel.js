const mongoose = require("mongoose");

const registerData = new mongoose.Schema({
  username: { type: String, required: true, unique: true, trim: true },
  email: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true },
  created_at: { type: Date, default: Date.now() },
  last_login: { type: Date },
  isAuthenticate: { type: Boolean, default: false },
});

module.exports = mongoose.model("admin-side-users", registerData);
