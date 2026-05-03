import { NextRequest, NextResponse } from "next/server";
import { getBffSessionUser, isJourneyChatAdmin } from "../../../../lib/bff-session-server";
import { isJourneyFirestoreConfigured, journeyChatAppendMessage } from "../../../../lib/journey-chat-firestore";
import {
  clampJourneyChatText,
  isJourneyChatConversationId,
  mapJourneyChatFirestoreError,
} from "../../../../lib/journey-chat-utils";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const user = await getBffSessionUser();
  if (!user) {
    return NextResponse.json({ error: "Sign in required" }, { status: 401 });
  }
  if (!isJourneyChatAdmin(user.email)) {
    return NextResponse.json({ error: "Not authorized to send replies" }, { status: 403 });
  }
  if (!isJourneyFirestoreConfigured()) {
    return NextResponse.json({ error: "Firestore is not configured" }, { status: 503 });
  }

  try {
    const body = (await request.json()) as Record<string, unknown>;
    const conversationId = typeof body.conversationId === "string" ? body.conversationId.trim() : "";
    const text = clampJourneyChatText(typeof body.text === "string" ? body.text : "");

    if (!isJourneyChatConversationId(conversationId)) {
      return NextResponse.json({ error: "Invalid conversationId" }, { status: 400 });
    }
    if (!text) {
      return NextResponse.json({ error: "Reply text is required" }, { status: 400 });
    }

    const message = await journeyChatAppendMessage({
      conversationId,
      sender: "menno",
      text,
    });
    return NextResponse.json({ message });
  } catch (e) {
    console.error("journey-chat reply:", e);
    const { status, error } = mapJourneyChatFirestoreError(e, "Failed to send reply");
    return NextResponse.json({ error }, { status });
  }
}
