import mongoose from "mongoose";
import { MONGO_URI } from "./config";

export default async () => {
  try {
    await mongoose
      .connect(MONGO_URI, {})
      .then((response) => console.log(`Connected to DB Successfully`));
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
