const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  time: { type: String, required: true },
  people: { type: Number, required: true },
  note: { type: String },
  table: { type: mongoose.Schema.Types.ObjectId, ref: "Table" },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Account",
    required: true,
  },
});

const Reservation = mongoose.model("Reservation", reservationSchema);
module.exports = Reservation;
