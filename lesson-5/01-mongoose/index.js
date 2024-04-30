import mongoose from "mongoose";

const DB_URI = `mongodb+srv://student96:LErnjVDkV9S6qxD9@cluster0.ei0bx6m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

async function run() {
  try {
    await mongoose.connect(DB_URI);

    console.info("Database connection successfully");
  } finally {
    await mongoose.disconnect();
  }
}

run().catch((error) => console.error(error));
