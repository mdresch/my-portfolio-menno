import { NextRequest, NextResponse } from "next/server";
import {
  isJourneyFirestoreConfigured,
  journeyChatAppendMessage,
  journeyChatListMessages,
} from "../../../../lib/journey-chat-firestore";
import {
  clampJourneyChatText,
  isJourneyChatConversationId,
  mapJourneyChatFirestoreError,
} from "../../../../lib/journey-chat-utils";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const conversationId = request.nextUrl.searchParams.get("conversationId")?.trim() ?? "";
  if (!isJourneyChatConversationId(conversationId)) {
    return NextResponse.json({ error: "Invalid or missing conversationId" }, { status: 400 });
  }
  if (!isJourneyFirestoreConfigured()) {
    return NextResponse.json(
      { error: "Chat storage is not configured (Firebase Admin / Firestore)." },
      { status: 503 }
    );
  }
  try {
    const messages = await journeyChatListMessages(conversationId);
    return NextResponse.json({ messages });
  } catch (e) {
    console.error("journey-chat GET:", e);
    const { status, error } = mapJourneyChatFirestoreError(e, "Failed to load messages");
    return NextResponse.json({ error }, { status });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const conversationId = typeof body.conversationId === "string" ? body.conversationId.trim() : "";
    const text = clampJourneyChatText(typeof body.text === "string" ? body.text : "");
    const visitorLabel =
      typeof body.visitorLabel === "string" ? body.visitorLabel.trim().slice(0, 200) : undefined;

    if (!isJourneyChatConversationId(conversationId)) {
      return NextResponse.json({ error: "Invalid conversationId" }, { status: 400 });
    }
    if (!text) {
      return NextResponse.json({ error: "Message text is required" }, { status: 400 });
    }

    if (!isJourneyFirestoreConfigured()) {
      return NextResponse.json(
        { error: "Chat storage is not configured (Firebase Admin / Firestore)." },
        { status: 503 }
      );
    }

    const message = await journeyChatAppendMessage({
      conversationId,
      sender: "visitor",
      text,
      visitorLabel: visitorLabel || null,
    });
    return NextResponse.json({ message });
  } catch (e) {
    console.error("journey-chat POST:", e);
    const { status, error } = mapJourneyChatFirestoreError(e, "Failed to send message");
    return NextResponse.json({ error }, { status });
  }
}
