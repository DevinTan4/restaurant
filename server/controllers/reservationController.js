const Table = require("../models/table");
const Reservation = require("../models/reservation");

exports.createReservation = async (req, res) => {
  try {
    const { date, time, people, note } = req.body;
    const userId = req.user.id;

    // Cari meja yang tersedia
    const table = await Table.findOne({ status: "vacant" });

    if (!table) {
      return res.json({ message: "No vacant tables available" });
    }

    // Buat reservasi
    const reservation = new Reservation({
      date,
      time,
      people,
      note,
      table: table._id,
      user: userId,
    });
    await reservation.save();

    table.status = "reserved";
    table.reservation = reservation._id;
    await table.save();

    res.json(reservation);
  } catch (error) {
    res.json({ message: error.message });
  }
};

exports.getTables = async (req, res) => {
  try {
    const tables = await Table.find().populate({
      path: "reservation",
      populate: {
        path: "user",
        select: "username",
      },
    });
    res.json(tables);
  } catch (error) {
    res.json({ message: error.message });
  }
};
