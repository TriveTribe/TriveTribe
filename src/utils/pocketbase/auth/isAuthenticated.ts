import { client } from "../client";

export async function isAuthenticated(cookieStore: any) {
  const cookie = cookieStore.get("pb_auth");
  if (!cookie) {
    return false;
  }

  client.authStore.loadFromCookie(cookie?.value || "");
  return client.authStore.isValid || false;
}
