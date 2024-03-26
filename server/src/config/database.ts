import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoURI = process.env.MONGO_DB;

async function connect() {
  try {
    await mongoose.connect(mongoURI!, {
      
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

export { connect };
