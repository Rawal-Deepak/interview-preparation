const registerModel = require("../models/registerModel");
const Cryptr = require("cryptr");
const { generateToken } = require("../services/auth");

const cryptr = new Cryptr("mySecretKey", {
  encoding: "base64",
  saltLength: 10,
  pbkdf2Iterations: 1000,
});
const registerController = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if all fields are provided
    if (!username || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const existingUser = await registerModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: "Email is already in use" });
    }

    const newUser = await registerModel.create({
      username: username,
      email: email,
      password: cryptr.encrypt(password),
    });
    const token = generateToken({
      id: newUser._id,
      username: newUser.username,
    });
    res
      .cookie("uid", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      })
      .status(201)
      .json({ message: "Admin registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { registerController };
