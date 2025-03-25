import express from "express";
import { createBlog, getAllBlogs } from "../controllers/adminController.js";

const router = express.Router();

// Protected Routes (Require Authentication)
router.post("/blog", createBlog);
router.get("/blogs", getAllBlogs);

export default router;
