import { client } from "../client";

export async function isAuthenticated(cookies: any) {
  const cookie = cookies.get("pb_auth");
  if (!cookie) {
    return false;
  }

  client.authStore.loadFromCookie(cookie?.value || "");
  return client.authStore.isValid || false;
}
