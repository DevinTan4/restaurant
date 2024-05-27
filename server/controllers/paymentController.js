const Payment = require("../models/payment");
const Account = require("../models/account");
const Order = require("../models/order");
// const Table = require("../models/table");
// const Reservation = require("../models/reservation");

const createPayment = async (req, res) => {
  const { orderId, paymentDate, amount, accountId } = req.body;

  try {
    const order = await Order.findById(orderId);
    const account = await Account.findById(accountId);

    if (!order) {
      return res.json({ message: "Order not found" });
    }

    if (!account) {
      return res.json({ message: "Account not found" });
    }

    const newPayment = new Payment({
      order: orderId,
      paymentDate: paymentDate || Date.now(),
      amount: amount,
      account: accountId,
    });

    const savedPayment = await newPayment.save();
    res.json(savedPayment);
  } catch (error) {
    res.json({ message: error.message });
  }
};

// const checkoutAndAssignTable = async (orderId) => {
//   try {
//     const vacantTable = await Table.findOne({ status: "vacant" });

//     if (!vacantTable) {
//       console.log("No vacant tables available");
//       return;
//     }

//     vacantTable.status = "occupied";

//     const reservation = new Reservation({
//       date: new Date(),
//       time: "checkout",
//       people: 1,
//       note: "Checkout",
//       table: vacantTable._id,
//       user: orderId,
//     });

//     await reservation.save();

//     await vacantTable.save();

//     console.log("Table assigned and status updated successfully");
//   } catch (error) {
//     console.error("Error assigning table and updating status:", error);
//   }
// };

module.exports = {
  createPayment,
  // checkoutAndAssignTable,
};
