import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const middleware = (req) => {
  if (req.nextUrl.pathname.startsWith("/works/:path*")) {
    const authorizationHeader = req.headers.get("authorization");

    if (authorizationHeader) {
      const basicAuth = authorizationHeader.split(" ")[1];
      const [user, password] = atob(basicAuth).split(":");

      if (
        user === process.env.BASIC_AUTH_USER &&
        password === process.env.BASIC_AUTH_PASSWORD
      ) {
        return NextResponse.next();
      }
    }

    const url = req.nextUrl;
    url.pathname = "/api/auth";

    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
};
