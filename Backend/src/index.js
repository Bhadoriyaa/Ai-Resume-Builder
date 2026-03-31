 import app from "./app.js";
import mongoose from "mongoose";
import { config } from "dotenv";
import dotenv from "dotenv";
dotenv.config();

config();

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
  })
  .catch((err) => console.error("❌ MongoDB Connection Failed:", err));
