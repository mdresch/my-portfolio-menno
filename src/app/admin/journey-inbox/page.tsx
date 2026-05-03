"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import type { JourneyChatMessage, JourneyInboxRow } from "../../../lib/journey-chat-types";

export default function JourneyInboxPage() {
  const [conversations, setConversations] = useState<JourneyInboxRow[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [messages, setMessages] = useState<JourneyChatMessage[]>([]);
  const [reply, setReply] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loadingList, setLoadingList] = useState(true);
  const [loadingThread, setLoadingThread] = useState(false);
  const [sending, setSending] = useState(false);

  const loadInbox = useCallback(async () => {
    setLoadingList(true);
    setError(null);
    try {
      const res = await fetch("/api/journey-chat/inbox");
      const data = (await res.json()) as { conversations?: JourneyInboxRow[]; error?: string };
      if (!res.ok) {
        setError(data.error || "Could not load inbox");
        setConversations([]);
        return;
      }
      setConversations(Array.isArray(data.conversations) ? data.conversations : []);
    } catch {
      setError("Network error loading inbox.");
    } finally {
      setLoadingList(false);
    }
  }, []);

  const loadThread = useCallback(async (conversationId: string) => {
    setLoadingThread(true);
    setError(null);
    try {
      const res = await fetch(`/api/journey-chat/messages?conversationId=${encodeURIComponent(conversationId)}`);
      const data = (await res.json()) as { messages?: JourneyChatMessage[]; error?: string };
      if (!res.ok) {
        setError(data.error || "Could not load thread");
        return;
      }
      const list = Array.isArray(data.messages) ? [...data.messages] : [];
      // Newest first at top of the thread panel (API returns chronological for the visitor UI).
      list.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
      setMessages(list);
    } catch {
      setError("Network error loading messages.");
    } finally {
      setLoadingThread(false);
    }
  }, []);

  useEffect(() => {
    loadInbox();
  }, [loadInbox]);

  useEffect(() => {
    if (!selectedId) return;
    loadThread(selectedId);
    const t = setInterval(() => loadThread(selectedId), 3000);
    return () => clearInterval(t);
  }, [selectedId, loadThread]);

  async function sendReply(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedId || !reply.trim()) return;
    setSending(true);
    setError(null);
    try {
      const res = await fetch("/api/journey-chat/reply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ conversationId: selectedId, text: reply.trim() }),
      });
      const data = (await res.json()) as { message?: JourneyChatMessage; error?: string };
      if (!res.ok) {
        setError(data.error || "Reply failed");
        return;
      }
      setReply("");
      if (data.message) setMessages((prev) => [data.message, ...prev]);
      else loadThread(selectedId);
      loadInbox();
    } catch {
      setError("Network error sending reply.");
    } finally {
      setSending(false);
    }
  }

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">Journey chat inbox</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Replies use Firestore. Your Firebase login email must be in{" "}
            <code className="rounded bg-neutral-200 px-1 dark:bg-neutral-700">JOURNEY_CHAT_ADMIN_EMAILS</code>.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => {
              loadInbox();
              if (selectedId) loadThread(selectedId);
            }}
            className="rounded-lg border border-neutral-300 px-3 py-1.5 text-sm dark:border-neutral-600 dark:text-neutral-200"
          >
            Refresh
          </button>
          <Link href="/friends-contact/journey" className="rounded-lg bg-blue-600 px-3 py-1.5 text-sm text-white">
            View visitor journey page
          </Link>
        </div>
      </div>

      {error ? (
        <div className="mb-4 rounded-lg border border-amber-300 bg-amber-50 p-3 text-sm text-amber-900 dark:border-amber-700 dark:bg-amber-950/40 dark:text-amber-100">
          {error}
        </div>
      ) : null}

      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <h3 className="mb-2 text-sm font-medium text-neutral-700 dark:text-neutral-300">Conversations</h3>
          <div className="max-h-[480px] space-y-2 overflow-y-auto rounded-lg border border-neutral-200 p-2 dark:border-neutral-600">
            {loadingList ? (
              <p className="p-2 text-sm text-neutral-500">Loading…</p>
            ) : conversations.length === 0 ? (
              <p className="p-2 text-sm text-neutral-500">No messages yet.</p>
            ) : (
              conversations.map((c) => (
                <button
                  key={c.conversationId}
                  type="button"
                  onClick={() => setSelectedId(c.conversationId)}
                  className={`w-full rounded-lg border p-3 text-left text-sm transition ${
                    selectedId === c.conversationId
                      ? "border-blue-500 bg-blue-50 dark:bg-blue-950/40"
                      : "border-transparent hover:bg-neutral-50 dark:hover:bg-neutral-800/80"
                  }`}
                >
                  <p className="font-mono text-xs text-neutral-500">{c.conversationId.slice(0, 8)}…</p>
                  {c.visitorLabel ? (
                    <p className="font-medium text-neutral-900 dark:text-white">{c.visitorLabel}</p>
                  ) : null}
                  <p className="line-clamp-2 text-neutral-600 dark:text-neutral-400">{c.lastText}</p>
                  <p className="mt-1 text-xs text-neutral-400">
                    {c.lastSender} · {new Date(c.lastMessageAt).toLocaleString()}
                  </p>
                </button>
              ))
            )}
          </div>
        </div>

        <div>
          <h3 className="mb-2 text-sm font-medium text-neutral-700 dark:text-neutral-300">Thread & reply</h3>
          {!selectedId ? (
            <p className="text-sm text-neutral-500">Select a conversation.</p>
          ) : (
            <>
              <div className="mb-3 max-h-64 space-y-2 overflow-y-auto rounded-lg border border-neutral-200 p-3 dark:border-neutral-600">
                {loadingThread ? (
                  <p className="text-sm text-neutral-500">Loading thread…</p>
                ) : (
                  messages.map((m) => (
                    <div
                      key={m.id}
                      className={`flex ${m.sender === "menno" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[90%] rounded-lg px-3 py-2 text-sm ${
                          m.sender === "menno"
                            ? "bg-blue-100 text-blue-900 dark:bg-blue-900/50 dark:text-blue-100"
                            : "bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100"
                        }`}
                      >
                        <p className="text-[10px] font-semibold uppercase opacity-70">
                          {m.sender} · {new Date(m.createdAt).toLocaleString()}
                        </p>
                        <p className="whitespace-pre-wrap">{m.text}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>
              <form onSubmit={sendReply} className="space-y-2">
                <textarea
                  value={reply}
                  onChange={(e) => setReply(e.target.value)}
                  rows={3}
                  maxLength={4000}
                  placeholder="Reply as Menno…"
                  className="w-full rounded-lg border border-neutral-300 p-2 text-sm dark:border-neutral-600 dark:bg-neutral-900 dark:text-white"
                />
                <button
                  type="submit"
                  disabled={sending || !reply.trim()}
                  className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white disabled:opacity-50"
                >
                  {sending ? "Sending…" : "Send reply"}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
