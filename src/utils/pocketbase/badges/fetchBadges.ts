import { BadgeModel } from "@/models/badgeModel";
import { client } from "../client";

/**
 * Fetch all badges
 */
export const fetchBadges = async (pagination: number, pageNumber: number) => {
  try {
    const records = await client.badges.getList(pageNumber, pagination, {
      sort: "-created",
    });

    if (records.items.length === 0) console.warn("No badges found from pocketbase, please check if fetched correctly");


    const badges:BadgeModel[] = records.items.map((record) => {
      return {
        id: record.id,
        name: record.name,
        description: record.description,
        images: record.images,
      };
    });

    return badges;
  } catch (error) {
    throw new Error("Error fetching events");
  }
};