import { CreateUserModel } from "@/models/userModel";
import { client } from "../client";

/**
 * Takes in a CreateUserModel to register the user
 * @return records of the result
 */
export const registerUser = async (createUserModel: CreateUserModel) => {
  try {
    const records = await client.users.create({
      email: createUserModel.email,
      username: createUserModel.username,
      password: createUserModel.password,
      passwordConfirm: createUserModel.password,
      role: createUserModel.role,
    });
    return records;
  } catch (error: any) {
    throw new Error(error);
  }
};
