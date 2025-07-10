import express from "express";
import Message from "../models/Message.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    await Message.create({ name, email, message });
    res.status(200).json({ success: true, message: "Message saved" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;

