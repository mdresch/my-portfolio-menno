import { FieldValue, Timestamp } from "firebase-admin/firestore";
import { getFirebaseAdminFirestore } from "./firebase-admin";
import type { JourneyChatMessage, JourneyChatSender, JourneyInboxRow } from "./journey-chat-types";

const COLLECTION = "portfolio_journey_chat_messages";

export type { JourneyChatMessage, JourneyChatSender, JourneyInboxRow } from "./journey-chat-types";

function tsToIso(v: unknown): string {
  if (v instanceof Timestamp) return v.toDate().toISOString();
  if (v && typeof v === "object" && "toDate" in v && typeof (v as Timestamp).toDate === "function") {
    return (v as Timestamp).toDate().toISOString();
  }
  return new Date().toISOString();
}

function docToMessage(id: string, data: Record<string, unknown>): JourneyChatMessage {
  return {
    id,
    conversationId: String(data.conversationId ?? ""),
    sender: data.sender === "menno" ? "menno" : "visitor",
    text: String(data.text ?? ""),
    createdAt: tsToIso(data.createdAt),
    visitorLabel: data.visitorLabel != null ? String(data.visitorLabel) : null,
  };
}

export function isJourneyFirestoreConfigured(): boolean {
  return Boolean(getFirebaseAdminFirestore());
}

export async function journeyChatAppendMessage(input: {
  conversationId: string;
  sender: JourneyChatSender;
  text: string;
  visitorLabel?: string | null;
}): Promise<JourneyChatMessage> {
  const db = getFirebaseAdminFirestore();
  if (!db) throw new Error("Firestore is not configured");

  const doc = {
    conversationId: input.conversationId,
    sender: input.sender,
    text: input.text,
    createdAt: FieldValue.serverTimestamp(),
    ...(input.sender === "visitor" && input.visitorLabel
      ? { visitorLabel: input.visitorLabel.slice(0, 200) }
      : {}),
  };

  const ref = await db.collection(COLLECTION).add(doc);
  return {
    id: ref.id,
    conversationId: input.conversationId,
    sender: input.sender,
    text: input.text,
    createdAt: new Date().toISOString(),
    visitorLabel: input.sender === "visitor" && input.visitorLabel ? input.visitorLabel.slice(0, 200) : null,
  };
}

export async function journeyChatListMessages(conversationId: string): Promise<JourneyChatMessage[]> {
  const db = getFirebaseAdminFirestore();
  if (!db) throw new Error("Firestore is not configured");

  const q = await db.collection(COLLECTION).where("conversationId", "==", conversationId).limit(200).get();

  const rows = q.docs.map((d) => docToMessage(d.id, d.data() as Record<string, unknown>));
  rows.sort((a, b) => a.createdAt.localeCompare(b.createdAt));
  return rows;
}

export async function journeyChatListInboxRows(): Promise<JourneyInboxRow[]> {
  const db = getFirebaseAdminFirestore();
  if (!db) throw new Error("Firestore is not configured");

  const q = await db.collection(COLLECTION).orderBy("createdAt", "desc").limit(400).get();

  const byConv = new Map<string, JourneyChatMessage>();
  for (const d of q.docs) {
    const m = docToMessage(d.id, d.data() as Record<string, unknown>);
    if (!byConv.has(m.conversationId)) byConv.set(m.conversationId, m);
  }

  return Array.from(byConv.values())
    .map((m) => ({
      conversationId: m.conversationId,
      lastMessageAt: m.createdAt,
      lastText: m.text.slice(0, 200),
      lastSender: m.sender,
      visitorLabel: m.visitorLabel ?? null,
    }))
    .sort((a, b) => (a.lastMessageAt < b.lastMessageAt ? 1 : -1));
}
