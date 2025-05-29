"use client";

import { useState } from "react";

const FirebaseAITest = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateResponse = async () => {
    if (!prompt.trim()) return;

    setIsLoading(true);
    try {
      const result = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
          model: "gemini-2.0-flash-exp",
        }),
      });

      if (!result.ok) {
        const errorData = await result.json();
        throw new Error(errorData.error || "Failed to generate response");
      }

      const data = await result.json();
      setResponse(data.response);
    } catch (error) {
      console.error("Error generating response:", error);
      setResponse("Error generating response: " + (error instanceof Error ? error.message : "Unknown error"));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 from-blue-50 via-indigo-50 to-purple-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold dark:text-white text-slate-800 mb-4">
            Firebase AI Test
          </h1>
          <p className="dark:text-slate-300 text-slate-600 text-lg">
            Testing Google Vertex AI integration
          </p>
        </div>

        <div className="space-y-6">
          <div className="dark:bg-white/10 bg-white/90 backdrop-blur-md rounded-lg p-6 dark:border-white/20 border-slate-200 shadow-lg">
            <label className="block dark:text-white text-slate-700 font-semibold mb-2">
              Enter your prompt:
            </label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Ask me anything..."
              className="w-full h-32 p-4 rounded-lg dark:bg-white/20 bg-white dark:text-white text-slate-700 dark:placeholder-white/70 placeholder-slate-400 dark:border-white/30 border-slate-300 focus:outline-none focus:ring-2 dark:focus:ring-purple-500 focus:ring-blue-500 resize-none"
            />
            <button
              onClick={handleGenerateResponse}
              disabled={isLoading || !prompt.trim()}
              className="mt-4 px-6 py-3 bg-gradient-to-r dark:from-purple-600 dark:to-blue-600 from-blue-600 to-indigo-600 text-white font-semibold rounded-lg dark:hover:from-purple-700 dark:hover:to-blue-700 hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg"
            >
              {isLoading ? "Generating..." : "Generate Response"}
            </button>
          </div>

          {response && (
            <div className="dark:bg-white/10 bg-white/90 backdrop-blur-md rounded-lg p-6 dark:border-white/20 border-slate-200 shadow-lg">
              <h3 className="dark:text-white text-slate-700 font-semibold mb-3">AI Response:</h3>
              <div className="dark:bg-black/30 bg-slate-50 rounded-lg p-4 dark:text-white/90 text-slate-700 whitespace-pre-wrap text-sm max-h-96 overflow-y-auto dark:border-transparent border-slate-200 border">
                {response}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FirebaseAITest;
