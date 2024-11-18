import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cookieParser()); // Parse cookies

app.use(
  cors({
    origin: process.env.ORIGIN?.split(","),
    credentials: true,
  })
);

import shrinkRouter from "./routes/shrink.routes";
import redirectRouter from "./routes/redirect.routes";
import statsRouter from "./routes/stats.routes";

//routes declaration
app.use("/api/shrink", shrinkRouter);
app.use("/api/stats", statsRouter);

app.get("/health-check", (req, res) => {
  res.status(200).json({ message: "ALL OK" });
});

app.use("/", redirectRouter);

export { app };
