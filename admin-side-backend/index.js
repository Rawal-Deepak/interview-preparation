const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");

// initialize routes
const loginRoutes = require("./routes/loginRoutes");
const registerRoutes = require("./routes/registerRoutes");
const adminUserRoutes = require("./routes/adminUserRoutes");
const protectedRoutes = require("./routes/protectedRoutes");
const cookieParser = require("cookie-parser");

// dotenv configuration
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

connectDB();

// routes
app.use("/api", loginRoutes);
app.use("/api", registerRoutes);
app.use("/api", adminUserRoutes);
app.use("/api", protectedRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
