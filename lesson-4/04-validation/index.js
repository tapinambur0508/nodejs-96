import crypto from "node:crypto";

import morgan from "morgan";
import express from "express";

import movieSchema from "./schema/movie.js";

const app = express();

app.use(morgan("combine"));

const jsonParser = express.json();

app.post("/movies", validateBody(movieSchema), MovieController.createMovie);

app.post("/movies", jsonParser, (req, res) => {
  const movie = {
    title: req.body.title,
    producer: req.body.producer,
    year: req.body.year,
  };

  const { error, value } = movieSchema.validate(movie, { convert: false });

  if (typeof error !== "undefined") {
    return res.status(400).send("Validation Error");
  }

  res.status(201).send({ id: crypto.randomUUID(), ...value });
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
