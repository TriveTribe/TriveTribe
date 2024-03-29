import { client } from "../client";
import { EventModel } from "@/models/eventModel";

/**
 * Fetch all events with the given pagination and page number
 * @param pagination number of items to fetch per page
 * @param pageNumber page number to fetch
 * @returns array of events
 */
export const fetchEvents = async (
  pagination: number = 50,
  pageNumber: number = 1,
) => {
  try {
    const eventIds = client.authStore.model?.events ?? [];

    const records = await client.events.getList(pageNumber, pagination, {
      sort: "-created",
      filter: eventIds.map((id: any) => `id="${id}"`).join("||"),
    });

    if (records.items.length === 0)
      console.warn(
        "No events found from pocketbase, please check if fetched correctly",
      );

    const events: EventModel[] = records.items.map((record) => {
      return {
        id: record.id,
        name: record.name,
        description: record.description,
        startDateTime: new Date(record.startDateTime),
        endDateTime: new Date(record.endDateTime),
        location: record.location,
        organizer: record.organizer,
        xpGiven: record.xpGiven,
        images: record.images,
        users: record.users,
      };
    });

    return events;
  } catch (error) {
    throw new Error("Error fetching events");
  }
};
