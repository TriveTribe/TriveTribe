import { pocketbaseDefaultModel } from "./pocketbaseModel";

/**
 * @param name name of the event
 * @param description description of the event
 * @param dateTime date and time of the event
 * @param location location of the event
 * @param organizer organizer of the event
 * @param xpGiven experience points given for the event
 * @param sentiment? sentiment of the event
 * @param images? images of the event
 * @param users? users of the event
 */
export interface EventModel extends pocketbaseDefaultModel {
  name: string;
  description: string;
  startDateTime: Date;
  endDateTime: Date;
  location: string;
  organizer: string;
  xpGiven: number;
  sentiment?: string;
  images?: string[];
  users?: string[];
}

/**
 * @param name name of the event
 * @param description description of the event
 * @param dateTime date and time of the event in string ISO format
 * @param location location of the event
 * @param organizer_id organizer of the event
 * @param xpGiven experience points given for the event
 */
export interface CreateEventModel {
  name: string;
  description: string;
  location: string;
  organizer_id: string;
  xpGiven: number;
  startDateTime: string;
  endDateTime: string;
}
