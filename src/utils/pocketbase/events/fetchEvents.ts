import { client } from "../client";

/**
 * Fetch all events
 */
export const fetchEvents = async () => {
  try {
    const records = await client.events.getFullList({
      sort: "created",
    });

    if (records.length === 0) console.warn("No events found from pocketbase, please check if fetched correctly");

    return records;
  } catch (error) {
    throw new Error("Error fetching events");
  }
};
