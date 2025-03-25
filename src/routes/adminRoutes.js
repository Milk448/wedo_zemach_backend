import express from "express";
import {
  createBlog,
  getAllBlogs,
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent,
} from "../controllers/adminController.js";

const router = express.Router();

// Blog Routes
router.post("/create-blog", createBlog);
router.get("/get-all-blogs", getAllBlogs);
// Event Routes
router.post("/create-event", createEvent);
router.get("/get-all-events", getAllEvents);
router.get("/get-event/:id", getEventById);
router.put("/update-event/:id", updateEvent);
router.delete("/delete-event/:id", deleteEvent);

export default router;
