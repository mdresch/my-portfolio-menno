import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";
import '../styles/markdown-fix.css';
import '../styles/resume-print.css'; // Add print styles

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Menno Drescher - Portfolio",
  description: "Personal portfolio showcasing my projects and skills as a software developer.",
  alternates: {
    types: {
      'application/rss+xml': [
        {
          url: 'feed.xml',
          title: 'Menno Drescher\'s Blog RSS Feed'
        },
      ],
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} bg-gray-50 min-h-screen flex flex-col`}>
        <Navigation />
        <main className="flex-1">
          {/* We don't wrap the entire app with ErrorBoundary in layout.tsx because we need
              to use client components only at the component level, not at the root layout level */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
