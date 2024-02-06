import PocketBase from "pocketbase";

export const client = new PocketBase(`${process.env.POCKETHOST_URL}`);
