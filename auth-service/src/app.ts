import express, { Application } from "express";
import path from "path";
import { authRoutes } from "./routes/auth.route";

export default async (app: Application) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(express.json());

  app.use("/auth", authRoutes);

  return app;
};
