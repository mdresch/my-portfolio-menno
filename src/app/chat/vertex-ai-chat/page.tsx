"use client";
import React, { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "ai";
  content: string;
}

export default function VertexAIChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg: Message = { role: "user", content: input };
    setMessages((msgs) => [...msgs, userMsg]);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/ai-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input })
      });
      const data = await res.json();
      if (data.response) {
        setMessages((msgs) => [...msgs, { role: "ai", content: data.response }]);
      } else {
        setMessages((msgs) => [...msgs, { role: "ai", content: data.error || "No response from AI." }]);
      }
    } catch (err) {
      setMessages((msgs) => [...msgs, { role: "ai", content: "Error contacting AI service." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 py-8 px-2">
      <div className="w-full max-w-xl bg-white rounded shadow p-6 flex flex-col h-[70vh]">
        <h1 className="text-2xl font-bold mb-4 text-center">Vertex AI Portfolio Chat</h1>
        <div className="flex-1 overflow-y-auto mb-4 border rounded p-3 bg-gray-100">
          {messages.length === 0 && (
            <div className="text-gray-400 text-center">Ask anything about Menno's portfolio!</div>
          )}
          {messages.map((msg, i) => (
            <div key={i} className={`mb-2 flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`px-3 py-2 rounded-lg max-w-[80%] ${msg.role === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-900"}`}>
                {msg.content}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <form onSubmit={sendMessage} className="flex gap-2">
          <input
            className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Type your question..."
            disabled={loading}
            autoFocus
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
            disabled={loading || !input.trim()}
          >
            {loading ? "..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
}
