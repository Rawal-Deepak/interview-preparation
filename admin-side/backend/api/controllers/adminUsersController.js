const adminUserModel = require("../models/adminUserModel");

const getAdminUser = async (req, res) => {
  try {
    const adminUser = await adminUserModel.find();
    res.json(adminUser);
  } catch (err) {
    res
      .status(500)
      .json({ message: "ERROR :: Fetching Admin Users Data: ", error: err });
  }
};

const authenticateAdminUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await adminUserModel.findByIdAndUpdate(
      id,
      { isAuthenticate: true },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ error: "ERROR :: Admin User not found" });
    }
    res.json({ message: "Admin user authenticated", updatedUser });
  } catch (err) {
    res.status(500).json({ message: "ERROR :: Failed to authenticate user" });
  }
};
