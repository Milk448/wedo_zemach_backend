import Blog from "../models/Blog.js";
import Event from "../models/Event.js";

// Create Blog Post
export const createBlog = async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const newPost = await Blog.create({ title, content, author });
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ message: "Failed to create blog", error: error.message });
  }
};

// Get All Blogs
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch blogs", error: error.message });
  }
};

// Create Event
export const createEvent = async (req, res) => {
  const { title, description, date, location, imageUrl } = req.body;

  try {
    const newEvent = new Event({ title, description, date, location, imageUrl });
    await newEvent.save();
    res.status(201).json({ message: "Event created successfully", event: newEvent });
  } catch (error) {
    res.status(500).json({ message: "Failed to create event", error: error.message });
  }
};

// Get All Events
export const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch events", error: error.message });
  }
};

// Get Single Event by ID
export const getEventById = async (req, res) => {
  const { id } = req.params;

  try {
    const event = await Event.findById(id);
    if (!event) return res.status(404).json({ message: "Event not found" });
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch event", error: error.message });
  }
};

// Update Event
export const updateEvent = async (req, res) => {
  const { id } = req.params;
  const { title, description, date, location, imageUrl } = req.body;

  try {
    const updatedEvent = await Event.findByIdAndUpdate(id, { title, description, date, location, imageUrl }, { new: true });
    if (!updatedEvent) return res.status(404).json({ message: "Event not found" });
    res.status(200).json({ message: "Event updated successfully", event: updatedEvent });
  } catch (error) {
    res.status(500).json({ message: "Failed to update event", error: error.message });
  }
};

// Delete Event
export const deleteEvent = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedEvent = await Event.findByIdAndDelete(id);
    if (!deletedEvent) return res.status(404).json({ message: "Event not found" });
    res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete event", error: error.message });
  }
};
