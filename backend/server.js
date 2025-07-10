import dotenv from "dotenv";
import express from "express";
import connectDB from "../backend/db/connect.js";
import contactRoute from "../backend/routes/contact.js";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";
import { dirname } from "path";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.json());
app.use(cors());
app.use("/contact-me", contactRoute);

app.use(express.static(path.join(__dirname, "../dist")));

//need to look up on this get path
app.get("/{*any}", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist", "index.html"));
});

const connect = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(process.env.PORT, () => {
    });
  } catch (error) {
    console.log("❌ Error connecting:", error);
  }
};
connect();

