import express from "express";

const PORT = 8080;

const app = express();

app.get("/", (request, response) => {
  response.send("Hello, Express!");
});

app.post("/movies", (req, res) => {
  res.send("POST Movies:)");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
