import "dotenv/config";
import mongoose from "mongoose";

const connect = async () => {
  try {
    if (!process.env.MONGO) {
      throw new Error("MONGO environment variable is not defined.");
    }

    console.log("Mongo URI:", process.env.MONGO); // Debugging log
    await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully.");
  } catch (error) {
    console.error("Database connection error:", error);
    throw new Error("Connection failed!");
  }
};

export default connect;