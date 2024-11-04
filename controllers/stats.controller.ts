import { client } from "../redis/redisClient";

const statistics = async (req: any, res: any) => {
  const urlId = req.params.shrinkurl;

  const clickCount = await client.get(`clicks:${urlId}`);
  if (clickCount) {
    res.json({ clickCount });
  } else {
    res.status(404).json({ error: "URL not found" });
  }
};

export { statistics };
