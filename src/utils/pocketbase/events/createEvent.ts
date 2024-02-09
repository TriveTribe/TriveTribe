import { client } from "../client";
import { CreateEventModel } from "@/models/eventModel";

/**
 * Create events on pocketbase
 * @param createEventModel model for creating an event
 * @returns records of the created event
 */
export const createEvent = async (createEventModel: CreateEventModel) => {
  try {
    const records = await client.events.create({
      name: createEventModel.name,
      description: createEventModel.description,
      startDateTime: createEventModel.startDateTime,
      endDateTime: createEventModel.endDateTime,
      location: createEventModel.location,
      organizer: createEventModel.organizer_id,
      xpGiven: createEventModel.xpGiven,
    });
    return records;
  } catch (error) {
    throw new Error("Error creating event, please check pocketbase.");
  }
};
