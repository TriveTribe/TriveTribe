import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "./utils/pocketbase/auth/isAuthenticated";

export async function middleware(request: NextRequest) {
  const isLoggedIn = await isAuthenticated(request.cookies);
  if (
    request.nextUrl.pathname &&
    (request.nextUrl.pathname.startsWith("/login") ||
      request.nextUrl.pathname.startsWith("/register"))
  ) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return;
  }

  if (!isLoggedIn) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}
