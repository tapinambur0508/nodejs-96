import express from "express";

import AuthController from "../controllers/auth.js";

import authMiddleware from "../middleware/auth.js";

const router = express.Router();
const jsonParser = express.json();

router.post("/register", jsonParser, AuthController.register);
router.post("/login", jsonParser, AuthController.login);
router.get("/logout", authMiddleware, AuthController.logout);

export default router;
