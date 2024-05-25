const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  name: { type: String, require: true },
  price: { type: Number, require: true },
  description: { type: String, require: true },
  imageurl: { type: String, require: true },
});

const Menu = mongoose.model("Menu", menuSchema);
module.exports = Menu;
