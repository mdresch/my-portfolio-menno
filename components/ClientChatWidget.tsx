'use client';

import dynamic from "next/dynamic";

// Dynamically import FloatingChatWidget to avoid SSR issues
const FloatingChatWidget = dynamic(() => import("./FloatingChatWidget"), { 
  ssr: false 
});

export default function ClientChatWidget() {
  return <FloatingChatWidget />;
}
