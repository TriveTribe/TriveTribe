import { client } from "../client";

/**
 * This is used to authenticate a admin with their email and password
 * @returns authData of the result
 */
export const authAdminWithPassword = async (
  email: string,
  password: string,
) => {  
  try {
    const authData = await client.admins.authWithPassword(email, password);

    if (!authData.token) {
      throw new Error("No admin found during authentication");
    }
    return authData;
  } catch (error) {
    throw new Error("Invalid email or password. Please try again.");
  }
};
