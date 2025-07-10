import mongoose from "mongoose";

//connectDB
const connectDB = (url) => {
  return mongoose.connect(url, {
  });
};

export default connectDB;
