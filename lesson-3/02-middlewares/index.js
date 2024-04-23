import * as fs from "node:fs/promises";
import path from "node:path";

import express from "express";

const app = express();

function checkAuth(req, res, next) {
  console.log("Middleware A");

  const apiKey = req.query["api-key"];

  if (apiKey !== "12345") {
    return res.status(401).send("Please provide API Key");
  }

  console.log("Complete");

  next();
}

app.use((req, res, next) => {
  console.log("Middleware B");

  next();
});

// app.use(checkAuth);

app.get("/movies", checkAuth, async (req, res) => {
  const data = await fs.readFile(path.resolve("movies.txt"), {
    encoding: "utf-8",
  });

  res.send(data);
});

app.post("/movies", checkAuth, (req, res) => {
  res.send("POST Movies");
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
