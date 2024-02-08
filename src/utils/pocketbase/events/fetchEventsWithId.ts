import { client } from "../client";
import { EventModel } from "@/models/eventModel";

/**
 * Fetch all events that matches the given eventIds
 * @param pagination number of items to fetch per page
 * @param pageNumber page number to fetch
 * @param eventIds array of event ids to fetch
 * @returns array of events
 */
export const fetchEventsWithId = async (
  pagination: number,
  pageNumber: number,
  eventIds: string[],
) => {
  try {
    const records = await client.events.getList(pageNumber, pagination, {
      sort: "-created",
      filter: eventIds.map((id) => `id="${id}"`).join("||"),
    });

    if (records.items.length === 0)
      console.warn(
        "No events found from pocketbase, please check the pocketbase logs",
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
    throw new Error("Error fetching events, please check implementation");
  }
};
