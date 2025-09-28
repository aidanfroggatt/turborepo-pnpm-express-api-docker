// server.ts
import express, { Express } from "express";

export function createServer(): Express {
  const app = express();

  app.get("/", (_req, res) => {
    res.send("🚀 API is alive!");
  });

  return app;
}
