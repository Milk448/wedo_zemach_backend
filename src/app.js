import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import blogRoutes from "./routes/blogRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import membershipRoutes from "./routes/membershipRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import { errorHandler } from "./middlewares/errorHandler.js";

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON requests

// Routes
app.use("/api/admin", adminRoutes);

// Error Handling Middleware
app.use(errorHandler);

export default app;
