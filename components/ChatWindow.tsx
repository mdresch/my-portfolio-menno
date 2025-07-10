"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  initializeChatData,
  addMessage,
  updateMessage,
  clearChatHistory,
  updateChatSettings,
  generateMessageId,
  formatMessageTime,
  playNotificationSound,
  type ChatMessage,
  type ChatSettings,
} from '../src/lib/chatStorage';
import { notify } from '../src/lib/notifications';

// Use the ChatMessage type from storage
type Message = ChatMessage;

export default function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [chatSettings, setChatSettings] = useState<ChatSettings>({
    soundEnabled: false,
    notificationsEnabled: true,
    lastClearTime: Date.now(),
  });
  const [showSettings, setShowSettings] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Chat storage functions are now imported at the top

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  // Initialize chat data from localStorage
  useEffect(() => {
    const chatData = initializeChatData();
    setMessages(chatData.messages);
    setChatSettings(chatData.settings);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  // Auto-resize textarea
  const autoResizeTextarea = useCallback(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
    }
  }, []);

  // Handle typing indicator
  const handleInputChange = useCallback((value: string) => {
    setInputValue(value);
    autoResizeTextarea();

    if (!isTyping && value.trim()) {
      setIsTyping(true);
    }

    // Clear existing timeout
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    // Set new timeout to stop typing indicator
    typingTimeoutRef.current = setTimeout(() => {
      setIsTyping(false);
    }, 1000);
  }, [isTyping, autoResizeTextarea]);
  const sendMessage = async (messageContent?: string) => {
    const content = messageContent || inputValue.trim();
    if (!content || isLoading) return;

    const messageId = generateMessageId();
    const userMessage: Message = {
      role: 'user',
      content,
      timestamp: Date.now(),
      id: messageId,
      status: 'sending'
    };

    // Add user message to state and storage
    setMessages(prev => [...prev, userMessage]);
    addMessage(userMessage);
    setInputValue('');
    setIsLoading(true);
    setIsTyping(false);

    // Update message status to sent
    const sentUserMessage = { ...userMessage, status: 'sent' as const };
    updateMessage(messageId, { status: 'sent' });
    setMessages(prev => prev.map(msg => msg.id === messageId ? sentUserMessage : msg));

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, sentUserMessage]
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      const assistantMessageId = generateMessageId();
      const assistantMessage: Message = {
        role: 'assistant',
        content: data.message,
        timestamp: Date.now(),
        id: assistantMessageId,
        status: 'sent'
      };

      setMessages(prev => [...prev, assistantMessage]);
      addMessage(assistantMessage);

      // Play notification sound if enabled
      if (chatSettings.soundEnabled) {
        playNotificationSound(chatSettings);
      }
    } catch (error) {
      console.error('Error sending message:', error);

      // Update user message status to error
      updateMessage(messageId, { status: 'error' });
      setMessages(prev => prev.map(msg =>
        msg.id === messageId ? { ...msg, status: 'error' as const } : msg
      ));

      const errorMessageId = generateMessageId();
      const errorMessage: Message = {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.',
        timestamp: Date.now(),
        id: errorMessageId,
        status: 'sent'
      };
      setMessages(prev => [...prev, errorMessage]);
      addMessage(errorMessage);
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

  const retryMessage = (messageId: string) => {
    const message = messages.find(msg => msg.id === messageId);
    if (message && message.role === 'user') {
      sendMessage(message.content);
    }
  };

  const copyMessage = async (content: string) => {
    try {
      await navigator.clipboard.writeText(content);
      notify.success('Message copied to clipboard!', 2000);
    } catch (error) {
      console.error('Failed to copy message:', error);
      notify.error('Failed to copy message');
    }
  };

  const handleClearChat = () => {
    if (window.confirm('Are you sure you want to clear all chat history?')) {
      clearChatHistory();
      setMessages([]);
      notify.success('Chat history cleared');
    }
  };

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  const updateSettings = (newSettings: Partial<ChatSettings>) => {
    const updated = { ...chatSettings, ...newSettings };
    setChatSettings(updated);
    updateChatSettings(updated);
  };

  return (
    <div className="chat-window">
      {/* Header */}
      <div className="chat-header">
        <div className="header-content">
          <div className="header-text">
            <h3 className="chat-title">AI Portfolio Assistant</h3>
            <p className="chat-subtitle">
              Ask me anything about this portfolio, projects, or skills!
            </p>
          </div>
          <div className="header-actions">
            <button
              onClick={toggleSettings}
              className="header-button"
              title="Settings"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"></path>
              </svg>
            </button>
            {messages.length > 0 && (
              <button
                onClick={handleClearChat}
                className="header-button"
                title="Clear chat"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="3,6 5,6 21,6"></polyline>
                  <path d="M19,6v14a2,2 0 0,1-2,2H7a2,2 0 0,1-2-2V6m3,0V4a2,2 0 0,1,2-2h4a2,2 0 0,1,2,2v2"></path>
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Settings Panel */}
        {showSettings && (
          <div className="settings-panel">
            <div className="setting-item">
              <label className="setting-label">
                <input
                  type="checkbox"
                  checked={chatSettings.soundEnabled}
                  onChange={(e) => updateSettings({ soundEnabled: e.target.checked })}
                />
                <span>Sound notifications</span>
              </label>
            </div>
            <div className="setting-item">
              <label className="setting-label">
                <input
                  type="checkbox"
                  checked={chatSettings.notificationsEnabled}
                  onChange={(e) => updateSettings({ notificationsEnabled: e.target.checked })}
                />
                <span>Push notifications</span>
              </label>
            </div>
          </div>
        )}
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
            key={message.id || index}
            className={`message-container ${message.role}`}
          >
            <div className={`message-bubble ${message.role} ${message.status === 'error' ? 'error' : ''}`}>
              <div className="message-content">
                {message.content}
              </div>
              <div className="message-meta">
                <span className="message-time">
                  {formatMessageTime(message.timestamp)}
                </span>
                {message.status && (
                  <span className={`message-status ${message.status}`}>
                    {message.status === 'sending' && '⏳'}
                    {message.status === 'sent' && '✓'}
                    {message.status === 'error' && '⚠️'}
                  </span>
                )}
                <div className="message-actions">
                  <button
                    onClick={() => copyMessage(message.content)}
                    className="action-button"
                    title="Copy message"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  </button>
                  {message.status === 'error' && message.role === 'user' && (
                    <button
                      onClick={() => retryMessage(message.id)}
                      className="action-button retry"
                      title="Retry message"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="23,4 23,10 17,10"></polyline>
                        <path d="M20.49,15a9,9 0 1,1-2.12-9.36L23,10"></path>
                      </svg>
                    </button>
                  )}
                </div>
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
            ref={textareaRef}
            value={inputValue}
            onChange={(e) => handleInputChange(e.target.value)}
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

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .header-text {
          flex: 1;
        }

        .header-actions {
          display: flex;
          gap: 8px;
          margin-left: 16px;
        }

        .header-button {
          background: rgba(255, 255, 255, 0.2);
          border: none;
          color: white;
          padding: 8px;
          border-radius: 6px;
          cursor: pointer;
          transition: background 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .header-button:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        .settings-panel {
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
        }

        .setting-item {
          margin-bottom: 12px;
        }

        .setting-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          cursor: pointer;
        }

        .setting-label input[type="checkbox"] {
          margin: 0;
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

        .message-bubble.error {
          border-color: #fca5a5;
          background: #fef2f2;
        }

        .message-bubble.user.error {
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
        }

        .message-content {
          white-space: pre-wrap;
          margin-bottom: 8px;
        }

        .message-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 11px;
          opacity: 0.7;
          margin-top: 4px;
        }

        .message-time {
          color: inherit;
        }

        .message-status {
          margin-left: 4px;
        }

        .message-status.sending {
          color: #f59e0b;
        }

        .message-status.sent {
          color: #10b981;
        }

        .message-status.error {
          color: #ef4444;
        }

        .message-actions {
          display: flex;
          gap: 4px;
          opacity: 0;
          transition: opacity 0.2s;
        }

        .message-bubble:hover .message-actions {
          opacity: 1;
        }

        .action-button {
          background: none;
          border: none;
          padding: 2px;
          cursor: pointer;
          border-radius: 3px;
          color: inherit;
          opacity: 0.6;
          transition: opacity 0.2s, background 0.2s;
        }

        .action-button:hover {
          opacity: 1;
          background: rgba(0, 0, 0, 0.1);
        }

        .action-button.retry {
          color: #f59e0b;
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
          transition: border-color 0.2s, height 0.1s ease;
          background: #fafafa;
          overflow-y: auto;
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

          .header-content {
            flex-direction: column;
            align-items: stretch;
          }

          .header-actions {
            margin-left: 0;
            margin-top: 8px;
            justify-content: flex-end;
          }

          .chat-messages {
            padding: 16px;
            gap: 12px;
          }

          .message-meta {
            font-size: 10px;
          }

          .chat-input-container {
            padding: 12px 16px;
          }

          .chat-input {
            font-size: 16px; /* Prevent zoom on iOS */
          }
        }
      `}</style>
    </div>
  );
}
