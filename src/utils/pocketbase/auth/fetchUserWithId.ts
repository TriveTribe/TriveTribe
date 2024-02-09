import { UserModel } from "@/models/userModel";
import { client } from "../client";

export const fetchUserWithId = async (id: string) => {
  try {
    const records = await client.users.getFullList({
      sort: "-created",
      filter: `id="${id}"`,
    });

    if (records.length === 0)
      console.warn(
        "No users found from pocketbase, please check if fetched correctly",
      );

    const users: UserModel[] = records.map((record) => {
      return {
        id: record.id,
        name: record.name,
        username: record.username,
        email: record.email,
        password: record.password,
        role: record.role,
        avatar: record.avatar,
        xp: record.xp,
        level: record.level,
        events: record.events,
        badgesReceived: record.badgesReceived,
      };
    });

    const user: UserModel = users[0];

    return user;
  } catch (error) {
    throw new Error("Error fetching users");
  }
};
