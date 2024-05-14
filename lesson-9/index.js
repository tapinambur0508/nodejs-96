import path from "node:path";

import express from "express";

import routes from "./routes/index.js";

import "./db.js";

const app = express();

app.use("/avatars", express.static(path.resolve("public/avatars")));

app.use("/api", routes);

// Handle 404 Error
app.use((req, res, next) => {
  console.log(req.url);
  console.log(req.method);
  res.status(404).send("Not Found");
});

// Handle 500 Error
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send("Internal Server Error");
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
