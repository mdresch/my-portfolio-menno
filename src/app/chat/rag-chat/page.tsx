"use client";

import React, { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import TextareaAutosize from "react-textarea-autosize";

interface Message {
  role: "user" | "assistant";
  content: string;
  metadata?: {
    sources?: string[];
    sourceTitles?: string[];
    similarities?: number[];
    isMock?: boolean;
  };
}

// Simple avatar SVGs
const UserAvatar = () => (
  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 4-7 8-7s8 3 8 7" />
    </svg>
  </div>
);

const AIAvatar = () => (
  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <rect x="4" y="4" width="16" height="16" rx="8" />
      <path d="M8 12h8M12 8v8" />
    </svg>
  </div>
);

// Copy to clipboard button
const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);
  return (
    <button
      className="ml-2 text-gray-400 hover:text-blue-600 transition"
      title="Copy to clipboard"
      onClick={async (e) => {
        e.preventDefault();
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
      }}
      type="button"
    >
      {copied ? (
        // Checkmark icon
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        // Clipboard icon
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <rect x="9" y="2" width="6" height="4" rx="1" />
          <rect x="5" y="6" width="14" height="16" rx="2" />
        </svg>
      )}
    </button>
  );
};

// Metadata display component
const MetadataDisplay = ({ metadata }: { metadata?: Message["metadata"] }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  if (!metadata || !metadata.sources || metadata.sources.length === 0) return null;
  
  return (
    <div className="mt-2">
      {metadata.isMock && (
        <div className="text-xs italic text-amber-600 dark:text-amber-400 mb-1">
          Running in simulation mode. Responses are generated locally, not by Gemini.
        </div>
      )}
      
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-xs text-gray-500 hover:text-gray-700 flex items-center"
      >
        <svg 
          className={`w-3 h-3 mr-1 transition-transform ${isExpanded ? "rotate-90" : ""}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        Sources ({metadata.sources.length})
      </button>
      
      {isExpanded && (
        <div className="mt-1 ml-4 text-xs text-gray-600 border-l-2 border-gray-200 pl-2">
          <p className="font-semibold mb-1">Referenced Content:</p>
          <ul className="space-y-1">
            {metadata.sources.map((source, idx) => (
              <li key={idx} className="flex justify-between">
                <span>
                  {metadata.sourceTitles?.[idx] || source}
                </span>
                {metadata.similarities?.[idx] !== undefined && (
                  <span className="text-gray-500 ml-2">
                    {(metadata.similarities[idx] * 100).toFixed(1)}% match
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default function RAGChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    if (!inputValue.trim() || isLoading) return;
    
    const userMessage: Message = {
      role: "user",
      content: inputValue
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);
    
    try {
      const response = await fetch("/api/rag-chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: userMessage.content,
          history: messages.slice(-6) // Send recent conversation history for context
        })
      });
      
      const data = await response.json();
      
      if (data.error) {
        setMessages(prev => [...prev, { 
          role: "assistant", 
          content: `Error: ${data.error}` 
        }]);
      } else {
        setMessages(prev => [...prev, { 
          role: "assistant", 
          content: data.response,
          metadata: data.metadata
        }]);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: "Sorry, there was an error processing your request." 
      }]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col h-[calc(100vh-64px)]">
      {/* Header */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-4">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">Portfolio RAG Chatbot</h1>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Ask questions about Menno's projects, blog posts, and skills
        </p>
      </div>
      
      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-800">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full text-center">
            <div className="max-w-md">
              <h2 className="text-xl font-bold text-gray-700 dark:text-gray-200 mb-2">
                Welcome to Menno's Portfolio RAG Chatbot!
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                This chatbot is powered by Google's Gemini model and uses Retrieval Augmented Generation (RAG) to provide
                information specifically about Menno's projects, blog posts, and expertise.
              </p>
              <div className="mt-4 space-y-2">
                <p className="text-gray-700 dark:text-gray-200 font-medium">Try asking:</p>
                <button
                  onClick={() => setInputValue("Tell me about Menno's most recent project")}
                  className="w-full text-left p-2 bg-white dark:bg-gray-700 rounded border hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  Tell me about Menno's most recent project
                </button>
                <button
                  onClick={() => setInputValue("What technologies does Menno work with?")}
                  className="w-full text-left p-2 bg-white dark:bg-gray-700 rounded border hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  What technologies does Menno work with?
                </button>
                <button
                  onClick={() => setInputValue("Summarize Menno's blog posts about web development")}
                  className="w-full text-left p-2 bg-white dark:bg-gray-700 rounded border hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  Summarize Menno's blog posts about web development
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`flex gap-3 max-w-[80%] ${
                    message.role === "user" ? "flex-row-reverse" : ""
                  }`}
                >
                  {message.role === "user" ? <UserAvatar /> : <AIAvatar />}
                  <div>
                    <div
                      className={`p-3 rounded-lg ${
                        message.role === "user"
                          ? "bg-blue-100 dark:bg-blue-900 text-gray-800 dark:text-gray-200"
                          : "bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div className="prose dark:prose-invert max-w-none">
                          <ReactMarkdown>
                            {message.content}
                          </ReactMarkdown>
                        </div>
                        {message.content && <CopyButton text={message.content} />}
                      </div>
                    </div>
                    {message.metadata && <MetadataDisplay metadata={message.metadata} />}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>
      
      {/* Input Form */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
        <form onSubmit={handleSubmit} className="flex items-end gap-2">
          <div className="flex-1 bg-white dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600 focus-within:border-blue-500 dark:focus-within:border-blue-400 overflow-hidden transition">
            <TextareaAutosize
              className="w-full px-3 py-2 focus:outline-none dark:bg-gray-700 dark:text-white resize-none"
              placeholder="Ask a question about Menno's portfolio..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              maxRows={5}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(e);
                }
              }}
            />
          </div>
          <button
            type="submit"
            disabled={isLoading || !inputValue.trim()}
            className={`p-2 rounded-lg ${
              isLoading || !inputValue.trim()
                ? "bg-gray-300 dark:bg-gray-700 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700"
            } text-white transition`}
            title="Send message"
          >
            {isLoading ? (
              // Loading spinner
              <svg className="w-6 h-6 animate-spin" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              // Send icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            )}
          </button>
        </form>
        <p className="mt-2 text-xs text-center text-gray-500 dark:text-gray-400">
          Powered by Google Gemini + RAG technology
        </p>
      </div>
    </div>
  );
}
