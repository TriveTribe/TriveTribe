import { client } from "../client";

/**
 * Create events on pocketbase
 */
export const createEvent = async (
  name: string,
  description: string,
  dateTime: string,
  location: string,
  organizer_id: string,
  xpGiven: number
) => {
  try {
    const records = await client.events.create({
      name: name,
      description: description,
      dateTime: dateTime,
      location: location,
      organizer_id: organizer_id,
      xpGiven: xpGiven,
    })
    return records;

  } catch (error) {
    throw new Error("Error creating event, please check fields and try again.");
  }
};
