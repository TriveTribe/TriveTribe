import { client } from "../client";
import { CreateEventModel } from "@/models/eventModel";

/**
 * Create events on pocketbase
 */
export const createEvent = async (createEventModel: CreateEventModel) => {
  try {
    const records = await client.events.create({
      name: createEventModel.name,
      description: createEventModel.description,
      dateTime: createTimestamp(createEventModel.dateTime),
      location: createEventModel.location,
      organizer: createEventModel.organizer_id,
      xpGiven: createEventModel.xpGiven,
    });
    return records;
  } catch (error) {
    throw new Error("Error creating event, please check fields and try again.");
  }
};

function createTimestamp(dateString: string) {
  const date = new Date(dateString);
  return date.getTime();
}
