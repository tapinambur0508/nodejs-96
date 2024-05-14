import express from "express";

import authMiddleware from "../middleware/auth.js";

import authRoutes from "./auth.js";
import bookRoutes from "./books.js";
import userRoutes from "./users.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/books", authMiddleware, bookRoutes);
router.use("/users", authMiddleware, userRoutes);

export default router;
