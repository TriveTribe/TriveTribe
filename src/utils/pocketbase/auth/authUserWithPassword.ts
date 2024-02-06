import { client } from "../client";

/**
 * This is used to authenticate a user with their email/username and password
 * @returns authData of the result
 */
export const authUserWithPassword = async (
  emailOrUsername: string,
  password: string
) => {  
  try {
    const authData = await client.users.authWithPassword(emailOrUsername, password);

    if (!authData.token) {
      throw new Error("No user found during authentication");
    }
    return authData;
  } catch (error) {
    throw new Error("Invalid email/username or password. Please try again.");
  }
};
