import { client } from "../client";

export const fetchUsers = async () => {
  const records = await client.collection("users").getFullList({
    sort: "-created",
  });
  return records;
};
