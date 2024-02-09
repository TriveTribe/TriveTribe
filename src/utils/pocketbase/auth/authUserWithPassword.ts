import { client } from "../client";
import {LoginModel} from "@/models/loginModel";

/**
 * This is used to authenticate a user with their email/username and password
 * @returns authData of the result
 */
export const authUserWithPassword = async (
    loginModel: LoginModel) => {
  try {
    const authData = await client.users.authWithPassword(
        loginModel.username, loginModel.password
    );

    if (!authData.token) {
      throw new Error("No user found during authentication");
    }
    return authData;
  } catch (error) {
    throw new Error("Invalid email/username or password. Please try again.");
  }
};
