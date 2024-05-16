require("dotenv").config();

const mongoose = require("mongoose");
const { app } = require("./app");

// mongoose.set("debug", true);
mongoose.set("strictQuery", false);

const { DB_URI } = process.env;

async function main() {
  try {
    await mongoose.connect(DB_URI);
    console.log("connected to db");

    app.listen(8080, () => {
      console.log("server is listening on port 8080");
    });
  } catch (error) {
    console.error("main failed:", error.message);
  }
}
main();
