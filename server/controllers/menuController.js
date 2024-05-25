const Menu = require("../models/menu");

exports.getMenuItems = async (req, res) => {
  try {
    const menuItems = await Menu.find();
    res.json(menuItems);
  } catch (error) {
    res.json({ message: "Error fetching menu items", error });
  }
};
