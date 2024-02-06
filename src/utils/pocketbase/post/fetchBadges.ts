import { client } from "../client";

export const fetchBadges = async () => {
  const records = await client.collection("badges").getFullList({
    sort: "created",
  });
  return records;
};
