const Cryptr = require("cryptr");
const UserModel = require("../models/loginModel");

const cryptr = new Cryptr("mySecretKey", {
  encoding: "base64",
  saltLength: 10,
  pbkdf2Iterations: 1000,
});

const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "ERROR :: User not found" });
    }
    let decrypted_password = cryptr.decrypt(user.password);
    if (password !== decrypted_password) {
      return res.status(401).json({ message: "ERROR :: Invalid Credentials" });
    }
    const userData = { ...user._doc, decrypted: decrypted_password };
    res.json(userData);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "ERROR :: server error", error: err });
  }
};
