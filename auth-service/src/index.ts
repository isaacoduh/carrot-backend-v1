import express from "express";
import { PORT } from "./config";
const startServer = async () => {
  const app = express();
  app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
  });
};

startServer();
