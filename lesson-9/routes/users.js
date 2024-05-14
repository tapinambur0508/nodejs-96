import express from "express";

import UserController from "../controllers/user.js";

import uploadMiddleware from "../middleware/upload.js";

const router = express.Router();

router.get("/avatar", UserController.getAvatar);
router.patch(
  "/avatar",
  uploadMiddleware.single("avatar"),
  UserController.uploadAvatar,
);

export default router;
