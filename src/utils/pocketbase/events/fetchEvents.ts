import { client } from "../client";
import { EventModel } from "@/models/eventModel";

/**
 * Fetch all events
 */
export const fetchEvents = async (pagination: number, pageNumber: number) => {
  try {
    const records = await client.events.getList(pageNumber, pagination, {
      sort: "-created",
    });

    if (records.items.length === 0) console.warn("No events found from pocketbase, please check if fetched correctly");

    const events:EventModel[] = records.items.map((record) => {
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
