import { client } from "../client";
import { CreateBadgeModel } from "@/models/badgeModel";

/**
 * Create badges on pocketbase
 * @param createBadgeModel model for creating a badge
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
    throw new Error("Error creating badge, please check fields and try again.");
  }
};
