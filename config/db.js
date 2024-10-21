const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://khushbuzalavadiya8:khushbuzalavadiya8@cluster0.1behi.mongodb.net/Admin-coutry`
    );
    console.log("MongoDB connected..");
  } catch (err) {
    console.error(err.message);
    return false;
  }
};

module.exports = connectDB;
