const express = require("express");
const cors = require("cors");
const connectDB = require("./db");

const app = express();
const PORT = 5002;

app.use(express.json());
app.use(cors());

connectDB();

app.get("/api/get-admin-users", async (req, res) => {});

app.put("/api/authenticate-user/:id", async (req, res) => {});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
