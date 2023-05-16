const mongoose = require("mongoose");
require("dotenv").config();
const URI = "mongodb+srv://soundharyaramesh24:Mnbvcxz123@cluster0.rctw7qe.mongodb.net/Moneytransfer?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
module.exports = connectDB;
