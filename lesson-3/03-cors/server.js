import * as fs from "node:fs/promises";
import path from "node:path";

import cors from "cors";
import express from "express";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })
);

app.get("/movies", async (req, res) => {
  const data = await fs.readFile(path.resolve("movies.txt"), {
    encoding: "utf-8",
  });

  res.send(data);
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
