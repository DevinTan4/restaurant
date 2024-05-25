const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const AccountModel = require("../models/account");

const register = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newAccount = await AccountModel.create({
      username: req.body.username,
      email: req.body.email,
      phone: req.body.phone,
      password: hashedPassword,
    });
    res.json(newAccount);
  } catch (error) {
    res.json({
      message: "Error creating account: ",
      error: error.message,
    });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const account = await AccountModel.findOne({ username: username });
    if (!account) {
      return res.json("No record existed!");
    }

    const isMatch = await bcrypt.compare(password, account.password);
    if (!isMatch) {
      return res.json("Incorrect password");
    }

    const token = jwt.sign(
      { id: account._id, username: account.username },
      "your_jwt_secret",
      { expiresIn: "1h" }
    );

    res.json({ message: "Success", token });
  } catch (error) {
    res.json("Internal server error");
  }
};

module.exports = {
  register,
  login,
};
