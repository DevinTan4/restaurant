const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  account: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Account",
    required: true,
  },
  itemName: { type: String, required: true },
  quantity: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  imageurl: { type: String, required: true },
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
