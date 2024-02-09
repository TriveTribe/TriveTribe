import { client } from "../client";
import { CreateEventModel } from "@/models/eventModel";

/**
 * Create events on pocketbase
 * @param createEventModel model for creating an event
 * @returns records of the created event
 */
export const createEvent = async (formData: FormData) => {
  try {
    const records = await client.events.create(formData);
    return records;
  } catch (error) {
    throw new Error("Error creating event, please check pocketbase.");
  }
};
