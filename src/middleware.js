// import { NextResponse } from "next/server";

// export const config = {
//   matcher: ["/works"],
// };

// export const middleware = (req) => {
//   const basicAuth = req.headers.get("authorization");
//   const url = req.nextUrl;
//   if (basicAuth) {
//     const authValue = basicAuth.split(" ")[1];
//     const [user, pwd] = authValue.split(":");

//     if (
//       user === process.env.BASIC_AUTH_USER &&
//       pwd === process.env.BASIC_AUTH_PASSWORD
//     ) {
//       return NextResponse.next();
//     }
//   }
//   url.pathname = "/api/auth";

//   return NextResponse.rewrite(url);
// };
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const middleware = (req) => {
  if (req.nextUrl.pathname.startsWith("/works")) {
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
