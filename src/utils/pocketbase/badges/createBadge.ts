import { client } from "../client";
import { CreateBadgeModel } from "@/models/badgeModel";

/**
 * Create events on pocketbase
 */
export const createBadge = async (createBadgeModel: CreateBadgeModel) => {
  try {
    const records = await client.events.create({
      name: createBadgeModel.name,
      description: createBadgeModel.description,
      image: createBadgeModel.image,
    });
    return records;
  } catch (error) {
    throw new Error("Error creating event, please check fields and try again.");
  }
};
