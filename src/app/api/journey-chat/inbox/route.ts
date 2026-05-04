import { NextResponse } from "next/server";
import { getBffSessionUser, isJourneyChatAdmin } from "../../../../lib/bff-session-server";
import { isJourneyFirestoreConfigured, journeyChatListInboxRows } from "../../../../lib/journey-chat-firestore";
import { mapJourneyChatFirestoreError } from "../../../../lib/journey-chat-utils";

export const dynamic = "force-dynamic";

export async function GET() {
  const user = await getBffSessionUser();
  if (!user) {
    return NextResponse.json({ error: "Sign in required" }, { status: 401 });
  }
  if (!isJourneyChatAdmin(user.email)) {
    return NextResponse.json(
      {
        error:
          "Your account is not listed in JOURNEY_CHAT_ADMIN_EMAILS. Add your Firebase login email to that env var.",
      },
      { status: 403 }
    );
  }
  if (!isJourneyFirestoreConfigured()) {
    return NextResponse.json(
      { error: "Firestore is not configured (Firebase Admin credentials)." },
      { status: 503 }
    );
  }
  try {
    const conversations = await journeyChatListInboxRows();
    return NextResponse.json({ conversations });
  } catch (e) {
    console.error("journey-chat inbox:", e);
    const { status, error } = mapJourneyChatFirestoreError(e, "Failed to load inbox");
    return NextResponse.json({ error }, { status });
  }
}
