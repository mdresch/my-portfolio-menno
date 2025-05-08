import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";
import '../styles/markdown-fix.css';
import '../styles/resume-print.css'; // Add print styles
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from 'next-themes';
import { Theme as RadixTheme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import { NavigationMenuDemo } from "@/components/NavigationMenuDemo";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Menno Drescher - Portfolio",
  description: "Personal portfolio showcasing my projects and skills as a software developer.",
  keywords: ["developer", "portfolio", "software engineer", "web development", "Menno Drescher"],
  authors: [{ name: "Menno Drescher" }],
  creator: "Menno Drescher",
  metadataBase: new URL("https://my-portfolio-menno.vercel.app/"), // Update with your actual domain
  alternates: {
    canonical: "/",
    types: {
      'application/rss+xml': [
        {
          url: 'feed.xml',
          title: "Menno Drescher's Blog RSS Feed"
        },
      ],
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://my-portfolio-menno.vercel.app/", // Update with your actual domain
    title: "Menno Drescher - Portfolio",
    description: "Personal portfolio showcasing my projects and skills as a software developer.",
    siteName: "Menno Drescher",
  },
  twitter: {
    card: "summary_large_image",
    title: "Menno Drescher - Portfolio",
    description: "Personal portfolio showcasing my projects and skills as a software developer.",
    creator: "@mennodre", // Update with your actual Twitter handle
    site: "@mennodre", // Update with your actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-screen transition-colors" suppressHydrationWarning>
      <body className={`${geist.className} bg-white dark:bg-neutral-950 min-h-screen flex flex-col transition-colors`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <RadixTheme>
            <div className="flex items-center justify-center">
              <NavigationMenuDemo />
            </div>
            <main className="flex-1">
              {/* We don't wrap the entire app with ErrorBoundary in layout.tsx because we need
                  to use client components only at the component level, not at the root layout level */}
              {children}
              <Analytics />
            </main>
            <Footer />
          </RadixTheme>
        </ThemeProvider>
      </body>
    </html>
  );
}
