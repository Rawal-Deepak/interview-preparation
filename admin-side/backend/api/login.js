const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./db");
const cors = require("cors");
const Cryptr = require("cryptr");
const app = express();
const PORT = 5001;

app.use(express.json());
app.use(cors());

connectDB();

const cryptr = new Cryptr("mySecretKey", {
  encoding: "base64",
  saltLength: 10,
  pbkdf2Iterations: 1000,
});
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const UserModel = mongoose.model("admin-side-users", UserSchema);

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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
