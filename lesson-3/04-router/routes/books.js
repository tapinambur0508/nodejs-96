import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("GET Books");
});

router.post("/", (req, res) => {
  res.send("POST Books");
});

export default router;
