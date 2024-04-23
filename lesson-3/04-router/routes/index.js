import express from "express";

import userRoutes from "./users.js";
import bookRoutes from "./books.js";
import movieRoutes from "./movies.js";

const router = express.Router();

router.use("/users", userRoutes);
router.use("/books", bookRoutes);
router.use("/movies", movieRoutes);

export default router;
