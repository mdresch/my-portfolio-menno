// This file is part of the AI Chat application.
// It is responsible for rendering the chat interface, handling user input,
import React from 'react';
import { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import TextareaAutosize from 'react-textarea-autosize';


type Message = {
  user: string;
  ai: string;
  timestamp: number;
  error?: boolean;
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
        body: JSON.stringify({ message: userMsg }),
      });
      if (!res.ok) throw new Error('AI response failed');
      const data = await res.json();
      setMessages((msgs) =>
        msgs.map((msg, i) =>
          i === msgs.length - 1
            ? { ...msg, ai: data.response, timestamp: Date.now() }
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
              {/* User bubble - right aligned */}
              <div className="flex justify-end mb-2">
                <div className="flex flex-col items-end">
                  <div className="flex items-center">
                    <span className="text-xs text-gray-400 mr-2">{formatTime(msg.timestamp)}</span>
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold ml-2">
                      U
                    </div>
                  </div>
                  <div className="bg-blue-600 text-white rounded-lg px-4 py-2 mt-1 max-w-xs whitespace-pre-wrap break-words shadow-md">
                    {msg.user}
                  </div>
                </div>
              </div>
              {/* AI bubble - left aligned, light gray background */}
              {msg.ai && (
                <div className="flex justify-start mb-2">
                  <div className="flex flex-col items-start">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold mr-2">
                        A
                      </div>
                      <span className="text-xs text-gray-400 ml-2">{formatTime(msg.timestamp)}</span>
                    </div>
                    <div
                      className={`mt-1 rounded-lg px-4 py-2 max-w-xs whitespace-pre-wrap break-words shadow-md ${
                        msg.error
                          ? 'bg-red-100 text-red-700 border border-red-300'
                          : 'bg-gray-200 text-gray-900 border border-gray-200'
                      }`}
                    >
                      <ReactMarkdown>{msg.ai}</ReactMarkdown>
                    </div>
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
        {/* Prompt input area */}
        <form
          className="bg-white p-4 flex gap-2 border-t shadow-lg justify-center"
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 10,
          }}
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
              maxRows={12} // About half the screen on most devices
            />
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded flex items-center justify-center transition disabled:opacity-50"
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Send"
            >
              {/* Send icon (Heroicons outline paper-airplane) */}
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