import shortid from "shortid";
import { client } from "../redis/redisClient";

const shrinkURL = async (req: any, res: any) => {
  const { originalUrl } = req.body;
  const urlId = shortid.generate();
  const shrinkUrl = `${process.env.BACKEND_URL}${process.env.PORT}/${urlId}`;
  await client.set(urlId, originalUrl);
  await client.set(`clicks:${urlId}`, 0); // Initialize click count

  res.json({ shrinkUrl });
};

export { shrinkURL };
