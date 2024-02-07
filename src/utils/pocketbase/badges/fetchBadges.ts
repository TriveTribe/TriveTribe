import { client } from "../client";

/**
 * Fetch all badges
 */
export const fetchBadges = async () => {
  try {
    const records = await client.badges.getFullList({
      sort: "-created",
    });

    if (records.length === 0)
      console.warn(
        "No badges found from pocketbase, please check if fetched correctly"
      );

    return records;
  } catch (error) {
    throw new Error("Error fetching badges");
  }
};
