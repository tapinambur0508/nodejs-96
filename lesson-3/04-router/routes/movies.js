import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("GET Movies");
});

router.post("/", (req, res) => {
  res.send("POST Movies");
});

export default router;
