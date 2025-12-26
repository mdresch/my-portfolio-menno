"use client";

import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const ChatWindow = dynamic(() => import('./ChatWindow'), { 
  ssr: false 
});

export default function FloatingChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <div className={`chat-toggle ${isOpen ? 'open' : ''}`} onClick={toggleChat}>
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        )}
      </div>

      {/* Chat Widget */}
      {isOpen && (
        <div className="floating-chat-widget">
          <div className="widget-header">
            <h3>AI Assistant</h3>
            <button onClick={toggleChat} className="close-button" title="Close chat">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div className="widget-content">
            <ChatWindow />
          </div>
        </div>
      )}

      <style jsx>{`
        .chat-toggle {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
          transition: all 0.3s ease;
          z-index: 1000;
          color: white;
        }

        .chat-toggle:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);
        }

        .chat-toggle.open {
          background: #ef4444;
        }

        .floating-chat-widget {
          position: fixed;
          bottom: 100px;
          right: 24px;
          width: 400px;
          height: 500px;
          background: white;
          border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          z-index: 999;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          animation: slideUp 0.3s ease-out;
        }

        .widget-header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .widget-header h3 {
          margin: 0;
          font-size: 16px;
          font-weight: 600;
        }

        .close-button {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          padding: 4px;
          border-radius: 4px;
          transition: background 0.2s;
        }

        .close-button:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .widget-content {
          flex: 1;
          overflow: hidden;
        }

        .widget-content :global(.chat-window) {
          height: 100%;
          border: none;
          border-radius: 0;
          box-shadow: none;
        }

        .widget-content :global(.chat-header) {
          display: none;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .floating-chat-widget {
            width: calc(100vw - 32px);
            height: 70vh;
            max-height: 500px;
            right: 16px;
            left: 16px;
            bottom: 80px;
          }

          .chat-toggle {
            bottom: 16px;
            right: 16px;
            width: 56px;
            height: 56px;
          }
        }

        @media (max-width: 480px) {
          .floating-chat-widget {
            width: calc(100vw - 16px);
            height: 75vh;
            right: 8px;
            left: 8px;
            bottom: 70px;
            border-radius: 12px;
          }

          .chat-toggle {
            bottom: 12px;
            right: 12px;
            width: 52px;
            height: 52px;
          }
        }
      `}</style>
    </>
  );
}
