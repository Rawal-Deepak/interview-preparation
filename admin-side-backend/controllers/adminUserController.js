const adminUserModel = require("../models/adminUserModel");

const getAdminUser = async (req, res) => {
  try {
    const adminUsers = await adminUserModel.find();
    res.status(200).json({
      success: true,
      message: "Admin Users fetched successfully!",
      data: adminUsers,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "ERROR :: Fetching Admin Users Data",
      error: err.message,
    });
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
      return res.status(404).json({
        success: false,
        message: "ERROR :: Admin User not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Admin user authenticated",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "ERROR :: Failed to authenticate user",
      error: err.message,
    });
  }
};

module.exports = { getAdminUser, authenticateAdminUserById };
