import express from "express";
import cookieParser from "cookie-parser";
const app = express();

app.use(express.json());
app.use(cookieParser()); // Parse cookies

export { app };
