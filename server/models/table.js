const mongoose = require("mongoose");

const tableSchema = new mongoose.Schema({
  name: { type: String, require: true },
  status: {
    type: String,
    enum: ["occupied", "vacant", "reserved"],
    default: "vacant",
  },
  reservation: { type: mongoose.Schema.Types.ObjectId, ref: "Reservation" },
});

const Table = mongoose.model("Table", tableSchema);
module.exports = Table;
