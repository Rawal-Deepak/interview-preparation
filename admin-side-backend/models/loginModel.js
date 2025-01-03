const mongoose = require("mongoose");

const loginSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    collection: "admin-side-users",
  }
);

module.exports = mongoose.model("login-model", loginSchema);
