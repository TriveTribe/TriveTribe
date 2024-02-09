import { pocketbaseDefaultModel } from "./pocketbaseModel";

/**
 * Model for a badge received
 * @param badge badge id
 * @param id id of the badge received
 * @param created created date
 * @param updated updated date
 */
export interface BadgesReceivedModel extends pocketbaseDefaultModel {
  badge: string;
  dateTime: string;
}

/**
 * Model for creating a badge received
 * @param badge badge id
 */
export interface CreateBadgesReceivedModel {
  badge: string;
}
