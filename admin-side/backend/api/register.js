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
app.use(
  cors({
    origin: ["https://easyhustler-admin-side-backend.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(bodyParser.json());

connectDB();

const registerData = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  isAuthenticate: { type: Boolean, default: false },
});
const FormData = mongoose.model("admin-side-users", registerData);

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
const UserModel = mongoose.model("admin-side-users", UserSchema);

app.get("/", async (req, res) => {
  res.json("Hello");
});

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

app.post("/api/login-admin-user", async (req, res) => {
  const { email } = req.body;

  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    let decrypted_password = cryptr.decrypt(user.password);
    const userData = { ...user._doc, decrypted: decrypted_password };
    res.json(userData);
  } catch (err) {
    return res.status(500).json({ message: "server error", error: err });
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
