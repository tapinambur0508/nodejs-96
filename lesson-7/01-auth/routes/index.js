import express from "express";

import authRoutes from "./auth.js";
import bookRoutes from "./books.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/books", bookRoutes);

export default router;
