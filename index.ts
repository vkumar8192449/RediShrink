import "dotenv/config";
import { app } from "./app";
import { client } from "./redis/redisClient";

(async function connectToRedis() {
  if (!client.isOpen) {
    try {
      await client.connect();
      console.log("Connected to Redis");
      app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
      });
    } catch (error) {
      console.error("Error connecting to Redis:", error);
    }
  }
})();
