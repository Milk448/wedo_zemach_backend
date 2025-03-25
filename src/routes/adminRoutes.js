import express from "express";
import { loginAdmin, createAdmin } from "../controllers/adminController.js";

const router = express.Router();

router.post("/login", loginAdmin);
router.post("/register", createAdmin); // For initial admin setup

export default router;
