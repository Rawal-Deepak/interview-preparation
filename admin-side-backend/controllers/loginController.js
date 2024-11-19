const Cryptr = require("cryptr");
const loginModel = require("../models/loginModel");
const { generateToken } = require("../services/auth");

const cryptr = new Cryptr("mySecretKey", {
  encoding: "base64",
  saltLength: 10,
  pbkdf2Iterations: 1000,
});

const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await loginModel.findOne({ email });
    if (!user) {
      res
        .status(404)
        .json({ success: false, message: "ERROR :: User not found" });
    }
    let decrypted_password = cryptr.decrypt(user.password);
    let user_authenticated = user.isAuthenticate;
    console.log(user.username);
    if (password === decrypted_password && user_authenticated) {
      console.log(user);
      const token = generateToken({ id: user._id, username: user.username });
      res
        .cookie("uid", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
        })
        .status(200)
        .json({ success: true, message: "Login Successfull" });
    } else {
      res
        .status(401)
        .json({ success: false, message: "ERROR :: Invalid Credentials" });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "ERROR :: Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = { loginAdmin };
