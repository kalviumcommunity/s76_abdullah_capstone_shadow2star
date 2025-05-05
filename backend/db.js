require("dotenv").config();
const mongoose = require("mongoose");

const dbURI = process.env.DB_URI;
// console.log(dbURI)
const connectToDatabase = async () => {
  try {
    await mongoose.connect(dbURI); // No options needed anymore
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error.message);
  }
};

module.exports = connectToDatabase;
