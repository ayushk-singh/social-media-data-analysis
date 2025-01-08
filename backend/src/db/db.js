import { Client } from "cassandra-driver";
import dotenv from "dotenv";

dotenv.config();

export async function queryDatabase() {
  const { SECURE_BUNDLE_PATH, DB_USERNAME, DB_PASSWORD } = process.env;

  if (!SECURE_BUNDLE_PATH || !DB_USERNAME || !DB_PASSWORD) {
    throw new Error("Missing required environment variables.");
  }

  const client = new Client({
    cloud: {
      secureConnectBundle: SECURE_BUNDLE_PATH,
    },
    credentials: {
      username: DB_USERNAME,
      password: DB_PASSWORD,
    },
  });

  try {
    await client.connect();

    const queryResult = await client.execute(
      "SELECT type, likes, shares, comments FROM engagement.engagement;"
    );

    const totals = queryResult.rows.reduce(
      (acc, { type, likes, shares, comments }) => {
        if (!acc[type]) {
          acc[type] = { likes: 0, shares: 0, comments: 0 };
        }
        acc[type].likes += likes;
        acc[type].shares += shares;
        acc[type].comments += comments;

        return acc;
      },
      {}
    );

    const sortOrder = ["reels", "carousel", "static"];
    const resultData = [];

    for (const type in totals) {
      const { likes, shares, comments } = totals[type];
      resultData.push({
        type,
        total_likes: likes,
        total_shares: shares,
        total_comments: comments,
      });
    }

    resultData.sort(
      (a, b) => sortOrder.indexOf(a.type) - sortOrder.indexOf(b.type)
    );

    return resultData;
  } catch (error) {
    console.error("Error querying the database:", error.message);
    throw error;
  } finally {
    await client.shutdown();
  }
}
