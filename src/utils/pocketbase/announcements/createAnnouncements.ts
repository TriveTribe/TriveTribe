import { CreateAnnouncementModel } from "@/models/announcementModel";
import { client } from "../client";

/**
 * Create announcements on pocketbase
 * @param createAnnouncementModel model for creating an announcement
 * @returns records of the created announcement
 */
export const createAnnouncement = async (
  createAnnouncementModel: CreateAnnouncementModel,
) => {
  try {
    const records = await client.announcements.create({
      header: createAnnouncementModel.header,
      description: createAnnouncementModel.description,
    });
    return records;
  } catch (error) {
    throw new Error(
      "Error creating announcement, please check the pocketbase logs.",
    );
  }
};
