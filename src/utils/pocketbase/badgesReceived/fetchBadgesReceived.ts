import { BadgesReceivedModel } from "@/models/badgesReceivedModel";
import { client } from "../client";

/**
 * Fetch all badgesReceived from pocketbase
 */
export const fetchBadgesReceived = async () => {
  try {
    const records = await client.badgesReceived.getFullList({
      sort: "-created",
    });

    if (records.length === 0)
      console.warn(
        "No badgesReceived found from pocketbase, please check pocketbase logs",
      );

    const badgesReceived: BadgesReceivedModel[] = records.map((record) => {
      return {
        badge: record.badge,
        dateTime: record.dateTime,
      };
    });

    return badgesReceived;
  } catch (error) {
    throw new Error(
      "Error fetching badgesReceived, please check implementation",
    );
  }
};
