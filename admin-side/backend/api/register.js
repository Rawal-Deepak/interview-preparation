const express = require("express");
const connectDB = require("./db");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 5000;
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

connectDB();

app.post("/api/register-admin-data", async (req, res) => {});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
