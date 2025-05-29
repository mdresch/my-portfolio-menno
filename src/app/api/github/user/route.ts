import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const response = await fetch("https://api.github.com/users/mdresch");
  const data = await response.json();
  return NextResponse.json(data, { status: response.status });
}