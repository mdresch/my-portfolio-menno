"use client";
import React, { useState } from "react";

export default function VertexAIChat() {
  const [messages, setMessages] = useState([
    { role: "system", content: "Hi! Ask me anything about this portfolio." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    setLoading(true);
    setError(null);
    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    try {
      const res = await fetch("/api/ai-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input })
      });
      const data = await res.json();
      if (res.ok) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.response }
        ]);
      } else {
        setError(data.error || "AI error");
      }
    } catch (err) {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-lg mx-auto p-4 border rounded shadow bg-white">
      <h2 className="text-xl font-bold mb-2">AI Portfolio Chat</h2>
      <div className="h-64 overflow-y-auto border p-2 mb-2 bg-gray-50 rounded">
        {messages.map((msg, i) => (
          <div key={i} className={msg.role === "user" ? "text-right" : "text-left"}>
            <span className={msg.role === "user" ? "text-blue-600" : "text-green-700"}>
              <b>{msg.role === "user" ? "You" : "AI"}:</b> {msg.content}
            </span>
          </div>
        ))}
        {loading && <div className="text-gray-400">AI is typing...</div>}
      </div>
      <form onSubmit={sendMessage} className="flex gap-2">
        <input
          className="flex-1 border rounded px-2 py-1"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type your question..."
          disabled={loading}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-1 rounded disabled:opacity-50"
          disabled={loading || !input.trim()}
        >
          Send
        </button>
      </form>
      {error && <div className="text-red-600 mt-2">{error}</div>}
    </div>
  );
}
