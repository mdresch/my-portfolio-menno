"use client";

import dynamic from "next/dynamic";

// Remove everything inside ChatPage and replace with ChatWindow
const ChatWindow = dynamic(() => import("../../../components/ChatWindow"), { ssr: false });

export default function ChatPage() {
  return (
    // @ts-ignore
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "20px" }}>
      {/* @ts-ignore */}
      <h1>My AI Chat</h1>
      {/* @ts-ignore */}
      <ChatWindow />
    </div> // @ts-ignore
  );
}