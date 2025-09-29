import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const response = await fetch("https://api.github.com/users/mdresch/events/public");
  let data;
  try {
    if (!response.ok) {
      // Try to parse error message if available
      const errorText = await response.text();
      return NextResponse.json({ error: `GitHub API error: ${response.status}`, details: errorText }, { status: response.status });
    }
    data = await response.json();
  } catch (err) {
    // If response is not valid JSON
    return NextResponse.json({ error: "Failed to parse GitHub API response", details: String(err) }, { status: 500 });
  }
  return NextResponse.json(data, { status: response.status });
}