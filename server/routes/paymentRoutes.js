const express = require("express");
const paymentController = require("../controllers/paymentController");
const router = express.Router();

router.post("/payments", paymentController.createPayment);
// router.post(
//   "/checkout-and-assign-table",
//   paymentController.checkoutAndAssignTable
// );

module.exports = router;
