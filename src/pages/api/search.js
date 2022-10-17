import { client } from "libs/client";

export default async function handler(req, res) {
  const data = await client.get({
    endpoint: "blogs",
    queries: { q: req.body.q },
  });
  if (req.body.q) {
    try {
      res.status(200).json(data);
    } catch {
      return;
    }
  }
}
