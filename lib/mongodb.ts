import mongoose from "mongoose";

const MONGO_URL = process.env.MONGO_URL!; 

if (!MONGO_URL) throw new Error(" Missing MONGO_URL in .env file");

export const connectDB = async () => {
  try {
    if (mongoose.connection.readyState >= 1) return;
    await mongoose.connect(MONGO_URL);
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
};
