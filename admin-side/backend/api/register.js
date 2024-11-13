const mongoose = require("mongoose");
const express = require("express");
const connectDB = require("./db");
const bodyParser = require("body-parser");
const cors = require("cors");
const Cryptr = require("cryptr");

const app = express();
const port = 5000;
const cryptr = new Cryptr("mySecretKey", {
  encoding: "base64",
  saltLength: 10,
  pbkdf2Iterations: 1000,
});
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

connectDB();

const registerData = new mongoose.Schema({
  username: { type: String, required: true, unique: true, trim: true },
  email: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true },
  created_at: { type: Date, default: Date.now() },
  last_login: { type: Date },
  isAuthenticate: { type: Boolean, default: false },
});
const FormData = mongoose.model("admin-side-users", registerData);

app.post("/api/register-admin-data", async (req, res) => {
  try {
    const formData = new FormData({
      username: req.body.username,
      email: req.body.email,
      password: cryptr.encrypt(req.body.password),
      isAuthenticate: false,
    });
    await formData.save();
    res.send("Data Save Succefully!");
  } catch (err) {
    res.status(500).send("Failed to save data \n" + err);
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
