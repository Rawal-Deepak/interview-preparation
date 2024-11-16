const Cryptr = require("cryptr");
const loginModel = require("../models/loginModel");

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
      return res
        .status(404)
        .json({ success: false, message: "ERROR :: User not found" });
    }
    let decrypted_password = cryptr.decrypt(user.password);
    if (password === decrypted_password) {
      return res
        .status(200)
        .json({ success: true, message: "Login Successfull" });
    } else {
      return res
        .status(401)
        .json({ success: false, message: "ERROR :: Invalid Credentials" });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "ERROR :: Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = { loginAdmin };
