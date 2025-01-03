import express from "express";
import { Request, Response } from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/health", (_req: Request, res: Response) => {
  res.status(200).json({
    status: "healthy",
    timestamp: new Date().toISOString(),
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
