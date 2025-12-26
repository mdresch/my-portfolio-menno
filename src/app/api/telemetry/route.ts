import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // Only enable telemetry if Google Cloud Project ID is configured
    if (!process.env.GOOGLE_CLOUD_PROJECT_ID && !process.env.GCLOUD_PROJECT) {
      return NextResponse.json(
        { success: false, error: "Google Cloud Project ID not configured" },
        { status: 400 }
      );
    }

    // Enable telemetry on server-side only
    const { enableFirebaseTelemetry } = await import("@genkit-ai/firebase");
    enableFirebaseTelemetry();
    
    return NextResponse.json({ success: true, message: "Telemetry enabled" });
  } catch (error) {
    console.error("Failed to enable telemetry:", error);
    return NextResponse.json(
      { success: false, error: "Failed to enable telemetry" },
      { status: 500 }
    );
  }
}