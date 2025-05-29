"use client";

import React, { useState } from "react";

export default function GenkitDemoPage() {
  const [theme, setTheme] = useState("seafood");
  const [suggestion, setSuggestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getSuggestion = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuggestion("");
    try {
      const res = await fetch("/api/genkit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ theme }),
      });

      let data;
      try {
        data = await res.json();
      } catch {
        throw new Error("Server returned invalid JSON");
      }

      if (!res.ok) {
        throw new Error(data?.error || "Server error");
      }

      setSuggestion(data.suggestion);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Failed to get suggestion");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold mb-4">Genkit Menu Suggestion Demo</h1>
      <form onSubmit={getSuggestion} className="flex gap-2 mb-4">
        <input
          type="text"
          className="border rounded p-2"
          value={theme}
          onChange={e => setTheme(e.target.value)}
          placeholder="Enter restaurant theme"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          disabled={loading}
        >
          {loading ? "Loading..." : "Suggest Menu Item"}
        </button>
      </form>
      {suggestion && (
        <div className="bg-white border rounded p-4 shadow max-w-md w-full">
          <h2 className="font-semibold mb-2">Suggestion:</h2>
          <p>{suggestion}</p>
        </div>
      )}
      {error && (
        <div className="text-red-600 mt-2">{error}</div>
      )}
    </div>
  );
}