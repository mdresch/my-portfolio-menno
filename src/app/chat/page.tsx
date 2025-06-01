"use client";

import dynamic from "next/dynamic";

// Dynamic import of ChatWindow with TypeScript support
const ChatWindow = dynamic(() => import("../../../components/ChatWindow"), { 
  ssr: false,
  loading: () => <div className="loading-chat">Loading chat...</div>
});

export default function ChatPage() {
  return (
    <div className="chat-page">
      <div className="chat-container">
        <div className="page-header">
          <h1 className="page-title">AI Portfolio Assistant</h1>
          <p className="page-description">
            Get instant answers about my projects, skills, and experience
          </p>
        </div>
        <ChatWindow />
      </div>

      <style jsx>{`
        .chat-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .chat-container {
          width: 100%;
          max-width: 900px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }

        .page-header {
          text-align: center;
          color: white;
          margin-bottom: 8px;
        }

        .page-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin: 0 0 12px 0;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .page-description {
          font-size: 1.1rem;
          margin: 0;
          opacity: 0.9;
          font-weight: 300;
        }

        .loading-chat {
          width: 100%;
          max-width: 800px;
          height: 600px;
          border-radius: 16px;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6b7280;
          font-size: 18px;
        }

        @media (max-width: 768px) {
          .chat-page {
            padding: 16px;
          }
          
          .page-title {
            font-size: 2rem;
          }
          
          .page-description {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
}