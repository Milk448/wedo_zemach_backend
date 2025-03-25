import Blog from "../models/Blog.js";

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
