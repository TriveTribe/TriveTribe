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
export interface BadgeModel extends pocketbaseDefaultModel {
  name: string;
  description: string;
  images?: string;

}

/**
 * @param name name of the event
 * @param description description of the event
 * @param dateTime date and time of the event in string ISO format
 * @param location location of the event
 * @param organizer_id organizer of the event
 * @param xpGiven experience points given for the event
 */


/**
 * @param name name of the badge
 * @param description description of the badge
 * @param image image of the badge
 */
export interface CreateBadgeModel {
  name: string;
  description: string;
  image?: string;
}