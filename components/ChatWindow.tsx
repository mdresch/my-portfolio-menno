"use client";

import React, { useState, useEffect, useRef } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  const sendMessage = async (messageContent?: string) => {
    const content = messageContent || inputValue.trim();
    if (!content || isLoading) return;

    const userMessage: Message = { role: 'user', content };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage]
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      const assistantMessage: Message = { role: 'assistant', content: data.message };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = { 
        role: 'assistant', 
        content: 'Sorry, I encountered an error. Please try again.' 
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestedQuestion = (question: string) => {
    sendMessage(question);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="chat-window">
      {/* Header */}
      <div className="chat-header">
        <h3 className="chat-title">AI Portfolio Assistant</h3>
        <p className="chat-subtitle">
          Ask me anything about this portfolio, projects, or skills!
        </p>
      </div>

      {/* Messages */}
      <div className="chat-messages">
        {messages.length === 0 && (
          <div className="empty-state">
            <div className="empty-icon">💬</div>
            <p>Start a conversation by typing a message below!</p>            <div className="suggested-questions">
              <p className="suggestions-title">Try asking:</p>
              <ul>
                <li onClick={() => handleSuggestedQuestion("What projects are in this portfolio?")}>
                  "What projects are in this portfolio?"
                </li>
                <li onClick={() => handleSuggestedQuestion("What technologies do you work with?")}>
                  "What technologies do you work with?"
                </li>
                <li onClick={() => handleSuggestedQuestion("Tell me about your experience")}>
                  "Tell me about your experience"
                </li>
              </ul>
            </div>
          </div>
        )}
        
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message-container ${message.role}`}
          >
            <div className={`message-bubble ${message.role}`}>
              <div className="message-content">
                {message.content}
              </div>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="message-container assistant">
            <div className="message-bubble assistant loading">
              <div className="typing-indicator">
                <span>AI is thinking</span>
                <div className="dots">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="chat-input-container">
        <div className="input-wrapper">
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            disabled={isLoading}
            className="chat-input"
            rows={1}
          />          <button
            onClick={() => sendMessage()}
            disabled={!inputValue.trim() || isLoading}
            className={`send-button ${(!inputValue.trim() || isLoading) ? 'disabled' : ''}`}
          >
            {isLoading ? (
              <div className="loading-spinner"></div>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22,2 15,22 11,13 2,9"></polygon>
              </svg>
            )}
          </button>
        </div>
      </div>

      <style jsx>{`
        .chat-window {
          width: 100%;
          max-width: 800px;
          height: 600px;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          background: linear-gradient(to bottom, #ffffff, #f9fafb);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }

        .chat-header {
          padding: 20px;
          border-bottom: 1px solid #e5e7eb;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .chat-title {
          margin: 0;
          font-size: 18px;
          font-weight: 600;
        }

        .chat-subtitle {
          margin: 4px 0 0 0;
          font-size: 14px;
          opacity: 0.9;
        }

        .chat-messages {
          flex: 1;
          padding: 20px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
          scroll-behavior: smooth;
        }

        .chat-messages::-webkit-scrollbar {
          width: 6px;
        }

        .chat-messages::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 3px;
        }

        .chat-messages::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 3px;
        }

        .empty-state {
          text-align: center;
          color: #6b7280;
          margin-top: 60px;
        }

        .empty-icon {
          font-size: 48px;
          margin-bottom: 16px;
        }

        .suggested-questions {
          margin-top: 20px;
          text-align: left;
          max-width: 300px;
          margin-left: auto;
          margin-right: auto;
        }

        .suggestions-title {
          font-weight: 600;
          margin-bottom: 8px;
        }

        .suggested-questions ul {
          list-style: none;
          padding: 0;
        }

        .suggested-questions li {
          padding: 8px 12px;
          background: #f3f4f6;
          border-radius: 8px;
          margin-bottom: 4px;
          font-size: 14px;
          cursor: pointer;
          transition: background 0.2s;
        }

        .suggested-questions li:hover {
          background: #e5e7eb;
        }

        .message-container {
          display: flex;
        }

        .message-container.user {
          justify-content: flex-end;
        }

        .message-container.assistant {
          justify-content: flex-start;
        }

        .message-bubble {
          max-width: 70%;
          padding: 14px 18px;
          border-radius: 20px;
          word-wrap: break-word;
          line-height: 1.5;
          position: relative;
        }

        .message-bubble.user {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-bottom-right-radius: 6px;
        }

        .message-bubble.assistant {
          background: #f3f4f6;
          color: #374151;
          border-bottom-left-radius: 6px;
          border: 1px solid #e5e7eb;
        }

        .message-bubble.loading {
          background: #f9fafb;
        }

        .message-content {
          white-space: pre-wrap;
        }

        .typing-indicator {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #6b7280;
        }

        .dots {
          display: flex;
          gap: 3px;
        }

        .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #9ca3af;
          animation: pulse 1.5s ease-in-out infinite;
        }

        .dot:nth-child(2) {
          animation-delay: 0.1s;
        }

        .dot:nth-child(3) {
          animation-delay: 0.2s;
        }

        .chat-input-container {
          padding: 16px 20px;
          border-top: 1px solid #e5e7eb;
          background: white;
        }

        .input-wrapper {
          display: flex;
          gap: 12px;
          align-items: flex-end;
        }

        .chat-input {
          flex: 1;
          min-height: 44px;
          max-height: 120px;
          padding: 12px 16px;
          border: 2px solid #e5e7eb;
          border-radius: 22px;
          resize: none;
          outline: none;
          font-family: inherit;
          font-size: 14px;
          line-height: 1.5;
          transition: border-color 0.2s;
          background: #fafafa;
        }

        .chat-input:focus {
          border-color: #667eea;
          background: white;
        }

        .chat-input:disabled {
          background-color: #f9fafb;
          cursor: not-allowed;
        }

        .send-button {
          width: 44px;
          height: 44px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
          box-shadow: 0 2px 4px rgba(102, 126, 234, 0.3);
        }

        .send-button:hover:not(.disabled) {
          transform: translateY(-1px);
          box-shadow: 0 4px 8px rgba(102, 126, 234, 0.4);
        }

        .send-button.disabled {
          background: #d1d5db;
          cursor: not-allowed;
          box-shadow: none;
        }

        .loading-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid #ffffff40;
          border-top: 2px solid #ffffff;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes pulse {
          0%, 70%, 100% {
            opacity: 0.4;
          }
          35% {
            opacity: 1;
          }
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @media (max-width: 768px) {
          .chat-window {
            height: 500px;
            border-radius: 12px;
          }
          
          .message-bubble {
            max-width: 85%;
          }
          
          .chat-header {
            padding: 16px;
          }
          
          .chat-messages {
            padding: 16px;
          }
        }
      `}</style>
    </div>
  );
}
