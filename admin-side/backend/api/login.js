const express = require("express");
const connectDB = require("./db");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = express.Router();
const { loginController } = require("./controllers/loginController");

const app = express();
const port = 5001;
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

connectDB();

router.post("/login-admin-user", loginController);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
