const mongoose = require("mongoose");

//Message Schema for my Contact me
const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.model("message", messageSchema);
