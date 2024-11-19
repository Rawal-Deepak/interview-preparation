const { verifyToken } = require("../services/auth");

function authenticateToken(req, res, next) {
  const token = req.cookies.uid;
  if (!token) {
    return res.status(401).json({
      error: "Not Authenticated!",
    });
  }

  const decoded = verifyToken(token);
  if (!decoded) {
    return res.status(403).json({ error: "Invalid Token!" });
  }

  req.user = decoded;
  next();
}

module.exports = { authenticateToken };
