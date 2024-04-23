import express from "express";

import routes from "./routes/index.js";

const app = express();

// app.use("/api/v1", routes);
// app.use("/api/v2", routes);

app.use(routes);

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
