"use client";

import { useState, useEffect } from "react";
import { generateAIResponse, generateAIResponseDirect, availableModels } from "@/lib/firebase";
import FirebaseAIShowcase from "@/components/FirebaseAIShowcase";

const AILogicPage = () => {
  const [activeTab, setActiveTab] = useState<"showcase" | "custom">("showcase");
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedModel, setSelectedModel] = useState("gemini-2.0-flash");
  const [useDirectAPI, setUseDirectAPI] = useState(true);

  const handleGenerateResponse = async () => {
    if (!prompt.trim()) return;

    setIsLoading(true);
    try {
      let result;
      if (useDirectAPI) {
        result = await generateAIResponseDirect(prompt, selectedModel);
      } else {
        result = await generateAIResponse(prompt, selectedModel);
      }
      setResponse(result);
    } catch (error) {
      console.error("Error generating response:", error);
      setResponse("Error generating response. Please check your Firebase configuration and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              Firebase AI Logic Center
            </h1>
            <p className="text-slate-300 text-lg">
              Powered by Google&apos;s Vertex AI and Gemini Models
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-1">
              <button
                onClick={() => setActiveTab("showcase")}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  activeTab === "showcase"
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                AI Showcase
              </button>
              <button
                onClick={() => setActiveTab("custom")}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  activeTab === "custom"
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Custom Chat
              </button>
            </div>
          </div>

          {/* Content based on active tab */}
          {activeTab === "showcase" ? (
            <FirebaseAIShowcase />
          ) : (
            <div className="space-y-6">
              {/* Model Selection for Custom Chat */}
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                <label className="block text-white font-semibold mb-2">
                  Select AI Model:
                </label>
                
                {/* API Method Toggle */}
                <div className="mb-4">
                  <label className="block text-white font-medium mb-2">API Method:</label>
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="apiMethod"
                        checked={useDirectAPI}
                        onChange={() => setUseDirectAPI(true)}
                        className="text-purple-500 focus:ring-purple-500"
                      />
                      <span className="text-white">Direct Firebase AI</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="apiMethod"
                        checked={!useDirectAPI}
                        onChange={() => setUseDirectAPI(false)}
                        className="text-purple-500 focus:ring-purple-500"
                      />
                      <span className="text-white">API Route</span>
                    </label>
                  </div>
                  <p className="text-slate-400 text-xs mt-1">
                    {useDirectAPI ? 
                      "Client-side Firebase AI SDK" : 
                      "Server-side API processing with monitoring"
                    }
                  </p>
                </div>

                <select
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  aria-label="Select AI Model"
                  className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {availableModels.map((modelName) => (
                    <option key={modelName} value={modelName} className="text-black">
                      {modelName.replace("-", " ").replace("exp", "Experimental")}
                    </option>
                  ))}
                </select>
              </div>

              {/* Input Section */}
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                <label className="block text-white font-semibold mb-2">
                  Enter your prompt:
                </label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Ask me anything..."
                  className="w-full h-32 p-4 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                />
                <button
                  onClick={handleGenerateResponse}
                  disabled={isLoading || !prompt.trim()}
                  className="mt-4 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  {isLoading ? "Generating..." : "Generate Response"}
                </button>
              </div>

              {/* Response Section */}
              {response && (
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                  <h3 className="text-white font-semibold mb-3">AI Response:</h3>
                  <div className="bg-black/30 rounded-lg p-4 text-white/90 whitespace-pre-wrap font-mono text-sm max-h-96 overflow-y-auto">
                    {response}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Firebase AI Info */}
          <div className="mt-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-6">
            <h3 className="text-white font-semibold mb-3">About Firebase AI Integration</h3>
            <div className="text-slate-300 space-y-2">
              <p>• 🚀 <strong>Direct Firebase AI SDK:</strong> Client-side integration with Vertex AI for ultra-fast responses</p>
              <p>• 🔄 <strong>Dual API Support:</strong> Choose between direct SDK calls or server-side API routes</p>
              <p>• 🎯 <strong>Multiple Gemini Models:</strong> Access latest Gemini 2.0 Flash and 1.5 Pro models</p>
              <p>• ⚡ <strong>Optimized Performance:</strong> Model caching and efficient Firebase configuration</p>
              <p>• 🔧 <strong>Easy Configuration:</strong> Environment-based setup with Firebase config</p>
              <p>• 📊 <strong>Real-time Monitoring:</strong> Built-in error handling and response tracking</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AILogicPage;