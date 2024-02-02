import { client } from "../client";

export const fetchPosts = async () => {
  const records = await client.collection("posts").getFullList({
    sort: "created",
  });
  return records;
};
