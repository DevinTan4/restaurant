const Order = require("../models/order");

exports.createOrder = async (req, res) => {
  try {
    const { itemName, quantity, totalPrice } = req.body;
    const order = new Order({
      user: req.user._id,
      itemName,
      quantity,
      totalPrice,
    });
    await order.save();
    res.json(order);
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
