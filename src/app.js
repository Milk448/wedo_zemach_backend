import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import adminRoutes from "./routes/adminRoutes.js";
import adminAuthRoutes from "./routes/adminAuthRoutes.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import authMiddleware from "./middlewares/adminAuthMiddleware.js";


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
app.use("/api/admin-auth", adminAuthRoutes);
app.use("/api/admin", authMiddleware, adminRoutes);

// Error Handling Middleware
app.use(errorHandler);

export default app;
