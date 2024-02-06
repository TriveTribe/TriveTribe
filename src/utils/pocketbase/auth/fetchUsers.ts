import { client } from "../client";

/**
 * Fetch all users
 */
export const fetchUsers = async () => {
  try {
    const records = await client.users.getFullList({
      sort: "-created",
    });

    if (records.length === 0)
      console.warn(
        "No users found from pocketbase, please check if fetched correctly"
      );

    return records;
  } catch (error) {
    throw new Error("Error fetching users");
  }
};
