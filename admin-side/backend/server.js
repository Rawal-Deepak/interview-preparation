const express = require("express");
const connectDB = require("./config/db");
const app = express();
const port = 5000;

connectDB();

app.use(express.json());

app.get("/", (req, res) => res.send("API running..."));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
