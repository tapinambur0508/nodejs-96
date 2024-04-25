import * as fs from "node:fs/promises";
import path from "node:path";

import express from "express";

const app = express();

app.get("/movies", async (req, res, next) => {
  try {
    const data = await fs.readFile(path.resolve("books.txt"), {
      encoding: "utf-8",
    });

    res.send(data);
  } catch (error) {
    next(error);
  }
});

app.get("/books", async (req, res, next) => {
  try {
    const data = await fs.readFile(path.resolve("books.txt"), {
      encoding: "utf-8",
    });

    res.send(data);
  } catch (error) {
    next(error);
  }
});

// Handle 404 Error
app.use((req, res, next) => {
  res.status(404).send("Not Found:-(");
});

function handleServerError(error, req, res, next) {
  console.error(error);
  res.status(500).send("Internal Server Error:-(");
}

// Handler Application Error
app.use(handleServerError);

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
