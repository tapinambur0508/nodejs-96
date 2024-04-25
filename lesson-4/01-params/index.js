import express from "express";

const app = express();

app.get("/movies/:id", (req, res) => {
  const { id } = req.params;

  res.send(`Movie ${id}`);
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
