const express = require("express");
const router = express.Router();
const accountController = require("../controllers/accountController");
const authenticateJWT = require("../middleware/auth");

router.post("/register", accountController.register);
router.post("/login", accountController.login);

router.get("/protected", authenticateJWT, (req, res) => {
  res.json("This is a protected route");
});

module.exports = router;
