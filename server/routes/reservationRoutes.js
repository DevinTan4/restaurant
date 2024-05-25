const express = require("express");
const router = express.Router();
const reservationController = require("../controllers/reservationController");
const authenticateJWT = require("../middleware/auth");

router.post(
  "/reservations",
  authenticateJWT,
  reservationController.createReservation
);
router.get("/tables", authenticateJWT, reservationController.getTables);

module.exports = router;
