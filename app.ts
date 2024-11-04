import express from "express";
import cookieParser from "cookie-parser";
const app = express();

app.use(express.json());
app.use(cookieParser()); // Parse cookies

import shrinkRouter from "./routes/shrink.routes";
import redirectRouter from "./routes/redirect.routes";
import statsRouter from "./routes/stats.routes";

//routes declaration
app.use("/api/shrink", shrinkRouter);
app.use("/api/stats", statsRouter);
app.use("/", redirectRouter);

export { app };
