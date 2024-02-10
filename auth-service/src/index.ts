import express from "express";
import App from "./app";
import dbConnect from "./database";

import { PORT } from "./config";

const startServer = async () => {
  const app = express();
  await dbConnect();
  await App(app);
  await app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
  });
};

startServer();
