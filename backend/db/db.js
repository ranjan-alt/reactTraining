require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  const connection = await mongoose.connect(process.env.MONGO_URI);
  console.log("mongodb connected successfully");

  try {
  } catch (err) {
    res.status(400).json({ success: false, messageerr });
  }
};

module.exports = connectDB;
