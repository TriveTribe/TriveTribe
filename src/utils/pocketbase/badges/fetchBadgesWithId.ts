import { BadgeModel } from "@/models/badgeModel";
import { client } from "../client";

/**
 * Fetch all badges
 */
export const fetchBadgesWithId = async (badgeIds: string[]) => {
  try {
    const records = await client.badges.getFullList({
      sort: "-created",
      filter: badgeIds.map((id) => `id="${id}"`).join("||"),
    });

    if (records.length === 0)
      console.warn(
        "No badges found from pocketbase, please check if fetched correctly",
      );

    const badges: BadgeModel[] = records.map((record) => {
      return {
        name: record.name,
        description: record.description,
        image: record.image,
      };
    });

    return badges;
  } catch (error) {
    throw new Error("Error fetching badges");
  }
};
