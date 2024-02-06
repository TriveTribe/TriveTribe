import { client } from "../client";

/**
 * Registers the user with the given email, username and password
 * @param avatar number from 0 - 10 for default avatar
 * @return records of the result
 */
export const registerAdmin = async (
  email: string,
  username: string,
  password: string,
  avatar?: number
) => {
  try {
    const records = await client.admins.create({
      email: email,
      password: password,
      passwordConfirm: password,
      avatar: avatar ?? 0,
    });
    console.log("admin created");
    return records;
  } catch (error: any) {
    throw new Error("Failed to create admin, please check on pocketbase");
  }
};
