import { client } from "../client";

/**
 * Registers the user with the given email, username and password
 * @return records of the result
 */
export const registerUser = async (
  email: string,
  username: string,
  password: string,
  role: string
) => {
  try {
    const records = await client.users.create({
      email: email,
      username: username,
      password: password,
      passwordConfirm: password,
      role: role,
    });
    console.log("user created");
    return records;
  } catch (error:any) {
    throw new Error(error);
  }
};
