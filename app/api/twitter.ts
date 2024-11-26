import { NextApiRequest, NextApiResponse } from "next";

const TWITTER_BEARER_TOKEN = process.env.TWITTER_BEARER_TOKEN || "YOUR_BEARER_TOKEN_HERE";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { username } = req.query;

  if (!username || typeof username !== "string") {
    return res.status(400).json({ error: "Username is required" });
  }

  try {
    const response = await fetch(
      `https://api.twitter.com/2/tweets/search/recent?query=from:${username}&tweet.fields=created_at,attachments&expansions=attachments.media_keys&media.fields=url`,
      {
        headers: {
          Authorization: `Bearer ${TWITTER_BEARER_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      const error = await response.json();
      return res.status(response.status).json({ error });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch {
    res.status(500).json({ error: "Unable to fetch tweets" });
  }
}
