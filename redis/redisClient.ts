import { createClient } from "redis";

export const client = createClient({
  password: process.env.REDIS_PASSWORD,
  socket: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT
      ? parseInt(process.env.REDIS_PORT, 10)
      : undefined,
    reconnectStrategy(retries) {
      if (retries >= 5) {
        console.log("Max retry attempts reached. Connection closed.");
        return false;
      }
      return 1000;
    },
  },
});

client.on("error", (err) => console.log("Redis Client Error", err));

(async () => {
  try {
    await client.connect();
    console.log("Connected to Redis");
  } catch (error) {
    console.error("Error connecting to Redis:", error);
  }
})();
