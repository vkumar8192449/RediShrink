import "dotenv/config";
import { client } from "./redis/redisClient";
import express from "express";
import cookieParser from "cookie-parser";
const app = express();

(async function connectToRedis() {
  if (!client.isOpen) {
    try {
      await client.connect();
      console.log("Connected to Redis");
    } catch (error) {
      console.error("Error connecting to Redis:", error);
    }
  }
})();

app.use(express.json());
app.use(cookieParser()); // Parse cookies
