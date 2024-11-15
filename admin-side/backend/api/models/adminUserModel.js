const mongoose = require("mongoose");

const adminData = mongoose.Schema({
  objectID: { type: mongoose.Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  isAuthenticate: { type: Boolean, required: true },
});

module.exports = mongoose.model("admin-side-users", adminData);
