"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "../../../components/modern/ClientMotionWrapper";
import {
  getOrCreateJourneyChatConversationId,
  readJourneySnapshot,
} from "../../../lib/friends-contact-journey";
import type { JourneyChatMessage } from "../../../lib/journey-chat-types";

const POLL_MS = 2500;

export default function JourneyChatPanel() {
  const [conversationId, setConversationId] = useState("");
  const [messages, setMessages] = useState<JourneyChatMessage[]>([]);
  const [draft, setDraft] = useState("");
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [storageError, setStorageError] = useState<string | null>(null);
  /** Stops polling after 503 (missing creds, Firestore API disabled, etc.) to avoid noisy repeat requests. */
  const [pausePolling, setPausePolling] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setPausePolling(false);
  }, [conversationId]);

  useEffect(() => {
    const id = getOrCreateJourneyChatConversationId();
    if (!id) {
      setStorageError("Could not start a chat session in this browser.");
      setLoading(false);
      return;
    }
    setConversationId(id);
  }, []);

  const fetchMessages = useCallback(async () => {
    if (!conversationId) return;
    try {
      const res = await fetch(`/api/journey-chat/messages?conversationId=${encodeURIComponent(conversationId)}`);
      const data = (await res.json()) as { messages?: JourneyChatMessage[]; error?: string };
      if (!res.ok) {
        setError(data.error || "Could not load messages");
        if (res.status === 503) setPausePolling(true);
        return;
      }
      setError(null);
      setMessages(Array.isArray(data.messages) ? data.messages : []);
    } catch {
      setError("Network error while loading messages.");
    } finally {
      setLoading(false);
    }
  }, [conversationId]);

  useEffect(() => {
    if (!conversationId) return;
    void fetchMessages();
  }, [conversationId, fetchMessages]);

  useEffect(() => {
    if (!conversationId || pausePolling) return;
    const t = setInterval(() => void fetchMessages(), POLL_MS);
    return () => clearInterval(t);
  }, [conversationId, fetchMessages, pausePolling]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages.length]);

  async function handleSend(e: React.FormEvent) {
    e.preventDefault();
    if (!conversationId || !draft.trim()) return;
    setSending(true);
    setError(null);
    const snap = readJourneySnapshot();
    const visitorLabel = [snap?.name, snap?.alienName].filter(Boolean).join(" · ").slice(0, 200) || undefined;
    try {
      const res = await fetch("/api/journey-chat/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          conversationId,
          text: draft.trim(),
          visitorLabel,
        }),
      });
      const data = (await res.json()) as { message?: JourneyChatMessage; error?: string };
      if (!res.ok) {
        setError(data.error || "Send failed");
        return;
      }
      setDraft("");
      if (data.message) setMessages((prev) => [...prev, data.message]);
      else fetchMessages();
    } catch {
      setError("Network error while sending.");
    } finally {
      setSending(false);
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative mb-14 overflow-hidden rounded-3xl border border-cyan-400/25 bg-gradient-to-br from-slate-900/90 to-indigo-950/90 p-6 shadow-2xl backdrop-blur-xl md:p-8"
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="relative z-10">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-white md:text-2xl">Message Menno</h2>
          <p className="mt-1 max-w-2xl text-sm text-cyan-100/80">
            This thread checks for new messages every few seconds. Replies from Menno appear here once he answers
            from the admin journey inbox.
          </p>
        </div>

        {storageError ? (
          <p className="text-amber-200">{storageError}</p>
        ) : (
          <>
            <div
              className="mb-4 max-h-72 space-y-3 overflow-y-auto rounded-2xl border border-white/10 bg-black/30 p-4 md:max-h-80"
              aria-live="polite"
            >
              {loading ? (
                <p className="text-sm text-white/60">Connecting to chat…</p>
              ) : messages.length === 0 ? (
                <p className="text-sm text-white/60">
                  No messages yet. Say hello — your thread is private to this browser unless someone shares the
                  conversation id.
                </p>
              ) : (
                messages.map((m) => (
                  <div
                    key={m.id}
                    className={`flex ${m.sender === "menno" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm ${
                        m.sender === "menno"
                          ? "bg-violet-600/40 text-violet-50 ring-1 ring-violet-400/30"
                          : "bg-cyan-900/50 text-cyan-50 ring-1 ring-cyan-500/25"
                      }`}
                    >
                      <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide opacity-80">
                        {m.sender === "menno" ? "Menno" : "You"}
                        <span className="ml-2 font-normal normal-case opacity-60">
                          {new Date(m.createdAt).toLocaleString()}
                        </span>
                      </p>
                      <p className="whitespace-pre-wrap leading-relaxed">{m.text}</p>
                    </div>
                  </div>
                ))
              )}
              <div ref={bottomRef} />
            </div>

            {error ? (
              <p className="mb-3 text-sm text-amber-300" role="alert">
                {error}
              </p>
            ) : null}

            <form onSubmit={handleSend} className="flex flex-col gap-3 md:flex-row md:items-end">
              <label className="sr-only" htmlFor="journey-chat-input">
                Message
              </label>
              <textarea
                id="journey-chat-input"
                rows={2}
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                maxLength={4000}
                placeholder="Write a message to Menno…"
                className="min-h-[88px] flex-1 resize-y rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-cyan-400/50 focus:outline-none focus:ring-1 focus:ring-cyan-400/40"
              />
              <button
                type="submit"
                disabled={sending || !draft.trim() || !conversationId}
                className="rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {sending ? "Sending…" : "Send"}
              </button>
            </form>
          </>
        )}
      </div>
    </motion.section>
  );
}
