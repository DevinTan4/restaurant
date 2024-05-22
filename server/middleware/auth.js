const jwt = require("jsonwebtoken");

const authenticateJWT = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json("Access denied");
  }

  try {
    const verified = jwt.verify(token, "your_jwt_secret"); // replace with your secret
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json("Invalid token");
  }
};

module.exports = authenticateJWT;
