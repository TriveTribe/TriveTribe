import { UpdateUserModel } from "@/models/userModel";
import { client } from "../client";

/**
 * Takes in a UpdateUserModel to update the current user
 * @param userId id of the user
 * @param updateUserModel model for updating a user
 * @return records of the result
 */
export const updateUser = async (
  userId: string,
  updateUserModel: UpdateUserModel,
) => {
  try {
    const records = await client.users.update(userId, updateUserModel);
    return records;
  } catch (error: any) {
    throw new Error(
      "Error updating user, please check implementation or pocketbase logs",
    );
  }
};
