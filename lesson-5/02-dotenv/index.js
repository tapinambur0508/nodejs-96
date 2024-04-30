import "dotenv/config";
import mongoose from "mongoose";

const DB_URI = process.env.DB_URI;

async function run() {
  try {
    await mongoose.connect(DB_URI);

    console.info("Database connection successfully");
  } finally {
    await mongoose.disconnect();
  }
}

run().catch((error) => console.error(error));
