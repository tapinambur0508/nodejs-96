import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("GET Users");
});

router.post("/", (req, res) => {
  res.send("POST Users");
});

export default router;
