const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const authenticateJWT = require("../middleware/auth");

router.post("/orders", authenticateJWT, orderController.createOrder);
router.get("/orders", authenticateJWT, orderController.getOrder);
router.put(
  "/orders/update-quantity",
  authenticateJWT,
  orderController.updateOrderQuantity
);
router.delete("/orders", authenticateJWT, orderController.removeOrder);

module.exports = router;
