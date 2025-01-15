import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const headers = request.headers;
  headers.set("host", "no.preview.elkjop.com");
  headers.set("x-forwarded-host", "no.preview.elkjop.com");
  headers.set("tomas", "yolo");
  const urlParams = request.nextUrl.searchParams;
  const url =
    "https://request-inspector-nine.vercel.app/api/inspect" +
    (urlParams.size > 0 ? "?" : "") +
    urlParams.toString();
  return NextResponse.rewrite(url, {
    headers,
  });
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/inspect/:path*",
};
