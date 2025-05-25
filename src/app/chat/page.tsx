'use client';

import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import TextareaAutosize from 'react-textarea-autosize';
import styles from './page.module.css';

const SYSTEM_PROMPT = "You are an assistant for Menno's portfolio website. Always relate your answers to Menno, his skills, projects, and the content found on his portfolio pages. If possible, referece relevant sections or facts about Menno.";

// Simple avatar SVGs (replace with your own images if desired)
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
const MetadataDisplay = ({ metadata }: { metadata?: Message['metadata'] }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  if (!metadata) return null;
  
  return (
    <div className="mt-2">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-xs text-gray-500 hover:text-gray-700 flex items-center"
      >
        <svg 
          className={`w-3 h-3 mr-1 transition-transform ${isExpanded ? 'rotate-90' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        AI Details
      </button>
      
      {isExpanded && (
        <div className="mt-1 p-2 bg-gray-50 rounded text-xs space-y-1">
          {metadata.model && <div><span className="font-medium">Model:</span> {metadata.model}</div>}
          {metadata.wordCount && <div><span className="font-medium">Words:</span> {metadata.wordCount}</div>}
          {metadata.tokensUsed && <div><span className="font-medium">Tokens:</span> {metadata.tokensUsed}</div>}
          {metadata.generationConfig && (
            <div>
              <span className="font-medium">Config:</span> 
              <span className="ml-1">
                T:{metadata.generationConfig.temperature}, 
                P:{metadata.generationConfig.topP}, 
                K:{metadata.generationConfig.topK}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

type Message = {
  user: string;
  ai: string;
  timestamp: number;
  error?: boolean;
  metadata?: {
    timestamp?: string;
    model?: string;
    tokensUsed?: number;
    wordCount?: number;
    responseTime?: number;
    generationConfig?: {
      temperature: number;
      topP: number;
      topK: number;
    };
  };
};

export default function ChatPage() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setError('');
    const userMsg = input;
    setInput('');
    const timestamp = Date.now();
    setMessages((msgs) => [
      ...msgs,
      { user: userMsg, ai: '', timestamp }
    ]);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message: userMsg,
          systemPrompt: SYSTEM_PROMPT,
        }),
      });
      if (!res.ok) throw new Error('AI response failed');
      const data = await res.json();      setMessages((msgs) =>
        msgs.map((msg, i) =>
          i === msgs.length - 1
            ? { ...msg, ai: data.response, timestamp: Date.now(), metadata: data.metadata }
            : msg
        )
      );
    } catch {
      setMessages((msgs) =>
        msgs.map((msg, i) =>
          i === msgs.length - 1
            ? { ...msg, ai: 'Error: Could not get AI response.', error: true, timestamp: Date.now() }
            : msg
        )
      );
      setError('Something went wrong. Please try again.');
    }
    setLoading(false);
  };

  const formatTime = (ts: number) =>
    new Date(ts).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow p-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-700">AI Chat</h1>
      </header>

      {/* Chat Window */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6 bg-gray-50">
          {messages.length === 0 && (
            <div className="text-center text-gray-400 mt-10">No messages yet. Start the conversation!</div>
          )}
          {messages.map((msg, i) => (
            <div key={i}>
              {/* User bubble - right aligned, avatar right */}
              <div className="flex justify-end mb-2">
                <div className="flex flex-col items-end">
                  <div className="flex items-center justify-end">
                    <span className="text-xs text-gray-400 mr-2">{formatTime(msg.timestamp)}</span>
                    <CopyButton text={msg.user} />
                    <div className="ml-2">{/* Avatar right */}<UserAvatar /></div>
                  </div>
                  <div className="bg-blue-600 text-white rounded-lg px-4 py-2 mt-1 max-w-xs whitespace-pre-wrap break-words shadow-md">
                    {msg.user}
                  </div>
                </div>
              </div>
              {/* AI bubble - left aligned, avatar left */}
              {msg.ai && (
                <div className="flex justify-start mb-2">
                  <div className="flex flex-col items-start">
                    <div className="flex items-center">
                      <div className="mr-2">{/* Avatar left */}<AIAvatar /></div>
                      <CopyButton text={msg.ai} />
                      <span className="text-xs text-gray-400 ml-2">{formatTime(msg.timestamp)}</span>
                    </div>                    <div
                      className={`mt-1 rounded-lg px-4 py-2 max-w-md whitespace-pre-wrap break-words shadow-md ${
                        msg.error
                          ? 'bg-red-100 text-red-700 border border-red-300'
                          : 'bg-gray-200 text-gray-900 border border-gray-200'
                      }`}
                    >
                      <ReactMarkdown>{msg.ai}</ReactMarkdown>
                    </div>
                    <MetadataDisplay metadata={msg.metadata} />
                  </div>
                </div>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        {/* Error message */}
        {error && (
          <div className="bg-red-100 text-red-700 text-center py-2 border-t border-red-200">
            {error}
          </div>
        )}
        <form
          className="bg-white p-4 flex gap-2 border-t shadow-lg justify-center chat-input-form-fixed"
          onSubmit={e => {
            e.preventDefault();
            if (!loading) sendMessage();
          }}
        >
          <div className="w-full max-w-2xl flex gap-2 mx-auto">
            <TextareaAutosize
              className="border rounded flex-1 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter' && !e.shiftKey && !loading) {
                  e.preventDefault();
                  sendMessage();
                }
              }}
              placeholder="Type your message..."
              disabled={loading}
              autoFocus
              minRows={1}
              maxRows={12}
            />
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded flex items-center justify-center transition disabled:opacity-50"
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Send"
            >
              {/* Send icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12l14-7-7 14-2-5-5-2z" />
              </svg>
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}