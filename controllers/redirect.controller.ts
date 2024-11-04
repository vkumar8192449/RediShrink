import { client } from "../redis/redisClient";

const redirect = async (req: any, res: any) => {
  const urlId = req.params.redirect;

  // Retrieve the original URL from Redis
  const originalUrl = await client.get(`${urlId}`);
  if (originalUrl) {
    // Increment click count
    await client.incr(`clicks:${urlId}`);
    res.redirect(originalUrl);
  } else {
    res.status(404).json({ error: "URL not found" });
  }
};

export { redirect };
