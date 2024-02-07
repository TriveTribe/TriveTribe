import { client } from "../client";

/**
 * @deprecated This fetch request is deprecated, please do not use
 */
export const fetchPosts = async () => {
  const records = await client.collection("posts").getFullList({
    sort: "created",
  });
  return records;
};
