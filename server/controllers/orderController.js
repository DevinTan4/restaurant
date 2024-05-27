const Order = require("../models/order");

exports.createOrder = async (req, res) => {
  try {
    const { itemName, quantity, totalPrice, imageurl } = req.body;
    const accountId = req.user.id;

    const order = new Order({
      account: accountId,
      itemName,
      quantity,
      totalPrice,
      imageurl,
    });

    await order.save();

    res.json({ message: "Order created successfully", order });
  } catch (error) {
    res.json({ message: "Error creating order", error });
  }
};

exports.getOrder = async (req, res) => {
  try {
    const accountId = req.user.id;
    const orders = await Order.find({ account: accountId });
    res.json(orders);
  } catch (error) {
    res.json({ message: "Error fetching orders", error });
  }
};

exports.updateOrderQuantity = async (req, res) => {
  try {
    const { orderId, operation } = req.body;

    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    if (operation === "increment") {
      order.quantity += 1;
    } else if (operation === "decrement") {
      if (order.quantity <= 1) {
        return res
          .status(400)
          .json({ message: "Order quantity cannot be less than 1" });
      }
      order.quantity -= 1;
    } else {
      return res.status(400).json({ message: "Invalid operation" });
    }

    await order.save();

    res.json({ message: "Order quantity updated successfully", order });
  } catch (error) {
    res.status(500).json({ message: "Error updating order quantity", error });
  }
};

exports.removeOrder = async (req, res) => {
  try {
    const { orderId } = req.body;

    // Cek apakah pesanan dengan orderId yang diberikan ada
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Hapus pesanan dari database
    await Order.findByIdAndDelete(orderId);

    res.json({ message: "Order removed successfully", order });
  } catch (error) {
    res.status(500).json({ message: "Error removing order", error });
  }
};
