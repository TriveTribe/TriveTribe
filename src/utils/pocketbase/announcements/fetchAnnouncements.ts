import { AnnouncementModel } from "@/models/announcementModel";
import { client } from "../client";

/**
 * Fetch first n Announcements
 * @param pagination number of items to fetch per page
 * @param page page number to fetch
 * @returns array of announcements
 */
export const fetchAnnouncements = async (
  pagination: number,
  page: number = 1,
) => {
  try {
    const records = await client.announcements.getList(page, pagination, {
      sort: "-created",
    });

    if (records.items.length === 0)
      console.warn(
        "No announcements found from pocketbase, please check if the pocketbase logs",
      );

    const announcements: AnnouncementModel[] = records.items.map(
      (announcement) => {
        return {
          header: announcement.header,
          description: announcement.description,
        };
      },
    );

    return announcements;
  } catch (error) {
    throw new Error("Error fetching announcements");
  }
};
