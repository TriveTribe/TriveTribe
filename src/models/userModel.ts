import { pocketbaseDefaultModel } from "./pocketbaseModel";

/**
 * @param name name of the user
 * @param username username of the user
 * @param email email of the user
 * @param password password of the user
 * @param role role of the user
 * @param avatar? avatar of the user
 * @param xp? experience points of the user
 * @param level? level of the user
 * @param events? events of the user
 * @param badges? badges of the user
 */
export interface UserModel extends pocketbaseDefaultModel {
  name: string;
  username: string;
  email: string;
  password: string;
  role: string;
  avatar?: string;
  xp?: number;
  level?: number;
  events?: string[];
  badges?: string[];
}

/**
 * @param email email of the user
 * @param username username of the user
 * @param password password of the user
 * @param role role of the user
 */
export interface CreateUserModel {
  email: string;
  username: string;
  password: string;
  role: string;
}
