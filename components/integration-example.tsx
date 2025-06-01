// Example of how to integrate the chat widget into your main layout or any page

import FloatingChatWidget from '../components/FloatingChatWidget';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Your existing content */}
        {children}
        
        {/* Add the floating chat widget to any page */}
        <FloatingChatWidget />
      </body>
    </html>
  );
}

// Or for a specific page:
export function HomePage() {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <p>This is my homepage content...</p>
      
      {/* Add chat widget to specific pages */}
      <FloatingChatWidget />
    </div>
  );
}
