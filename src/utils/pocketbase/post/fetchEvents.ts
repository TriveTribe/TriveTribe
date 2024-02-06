import { client } from "../client";

export const fetchEvents = async () => {
  const records = await client.collection("events").getFullList({
    sort: "created",
  });
  return records;
};
