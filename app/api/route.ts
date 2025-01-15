import { NextRequest, NextResponse } from "next/server";

// Make route endpoints that just returns the headers, query and body of the request
const handler = async (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams;
  const queryParams: Record<string, unknown> = {};
  searchParams.forEach((value, key) => {
    queryParams[key] = value;
  });

  const headers: Record<string, unknown> = {};
  req.headers.forEach((value, key) => {
    headers[key] = value;
  });
  const body = await req.text();
  const result = {
    headers: headers,
    query: queryParams,
    body: body,
  };
  return NextResponse.json(result);
};

export const GET = handler;
export const POST = handler;
export const PUT = handler;
export const DELETE = handler;
export const PATCH = handler;
