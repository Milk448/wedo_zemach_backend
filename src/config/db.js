import mongoose from "mongoose";

const connectDB = async () => {
  const conn = mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err));
  console.log(`MongoDB Connected`);
};

export default connectDB;
