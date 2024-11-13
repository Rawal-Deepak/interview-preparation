const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const connectDB = require("./db");

const app = express();
const PORT = 5002;

app.use(express.json());
app.use(cors());

connectDB();

const adminData = mongoose.Schema({
  objectID: { type: mongoose.Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  isAuthenticate: { type: Boolean, required: true },
});

const adminUserModel = mongoose.model("admin-side-users", adminData);

app.get("/api/get-admin-users", async (req, res) => {
  try {
    const adminUser = await adminUserModel.find();
    res.json(adminUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.put("/api/authenticate-user/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedUser = await adminUserModel.findByIdAndUpdate(
      id,
      { isAuthenticate: true },
      { new: true }
    );
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
