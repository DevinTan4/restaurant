const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const accountRoutes = require("./routes/accountRoutes");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/restaurant", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/account", accountRoutes);

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
