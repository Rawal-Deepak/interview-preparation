const Cryptr = require("cryptr");

const cryptr = new Cryptr("mySecretKey", {
  encoding: "base64",
  saltLength: 10,
  pbkdf2Iterations: 1000,
});

const registerAdmin = async (req, res) => {
  try {
    const formData = new FormData({
      username: req.body.username,
      email: req.body.email,
      password: cryptr.encrypt(req.body.password),
      isAuthenticate: false,
    });
    await formData.save();
    res.status(201).json({ message: "Data Save Succefully!" });
  } catch (err) {
    res.status(500).json({ message: "Failed to register admin", error: err });
  }
};
