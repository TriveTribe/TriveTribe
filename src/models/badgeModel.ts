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

/**
 * @param name name of the badge
 * @param description description of the badge
 * @param image image of the badge
 */
export interface BadgeModel {
  name: string;
  description: string;
  image?: string;
}
