// 'use client' directive is required for client components in the app directory
"use client";
import VertexAIChat from "@/components/VertexAIChat";

export default function AIChatPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col items-center justify-center py-12 px-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 border border-blue-100">
        <h1 className="text-3xl font-extrabold text-blue-700 mb-2 text-center">AI Portfolio Chat</h1>
        <p className="text-gray-600 mb-6 text-center">
          Ask anything about my projects, skills, or experience. This AI assistant is powered by Google Vertex AI and has access to live portfolio data.
        </p>
        <VertexAIChat />
        <div className="mt-8 text-xs text-gray-400 text-center">
          Powered by Vertex AI &bull; Responses may not always be accurate
        </div>
      </div>
    </main>
  );
}
