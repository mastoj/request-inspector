import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const headers = request.headers;
  headers.set("host", "no.preview.elkjop.com");

  return NextResponse.rewrite(
    "https://request-inspector-nine.vercel.app/api/inspect",
    {
      headers,
    }
  );
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/inspect/:path*",
};
