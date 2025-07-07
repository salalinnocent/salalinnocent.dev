const dotenv = require("dotenv");
const express = require("express");
const connectDB = require("../backend/db/connect");
const contactRoute = require("../backend/routes/contact");
const cors = require("cors");

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use("/contact-me", contactRoute);
const PORT = 5000;
const connect = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log("BACKEND APP IS LISTENING ON PORT 5000");
    });
  } catch (error) {
    console.log(error, "Error connecting the server");
  }
};
connect();
