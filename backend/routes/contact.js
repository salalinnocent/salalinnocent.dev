const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    //checking if no fields are filled
    if ((!name, !email, !message)) {
      res.status(400).json({ message: "All fields are required" });
    }
    await Message.create({ name, email, message });
    res.status(200).json({ success: true, message: "message saved" });
  } catch (error) {
    res.status(500).json({ success: false, message: "server error" });
  }
});
module.exports = router;
