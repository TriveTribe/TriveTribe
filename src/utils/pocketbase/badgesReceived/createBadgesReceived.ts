import { client } from "../client";
import { CreateBadgesReceivedModel } from "@/models/badgesReceivedModel";

/**
 * Create badges on pocketbase
 * @param createBadgeModel model for creating a badge
 */
export const createBadgesReceived = async (
  createBadgeReceivedModel: CreateBadgesReceivedModel,
) => {
  try {
    const records = await client.badgesReceived.create({
      badge: createBadgeReceivedModel.badge,
      dateTime: new Date().toISOString(),
    });
    return records;
  } catch (error) {
    throw new Error(
      "Error creating badgesReceived, please check fields and try again.",
    );
  }
};
