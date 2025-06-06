import React from "react";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import ConditionalFooter from "../components/ConditionalFooter";
import "./globals.css";
import "../styles/markdown-fix.css";
import "../styles/resume-print.css"; // Add print styles
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "next-themes";
import { Theme as RadixTheme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { NavigationMenuDemo } from "../components/NavigationMenuDemo";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ClientAnalytics from "../components/ClientAnalytics";
import Providers from "./providers";
import ClientAuthProvider from "@/components/ClientAuthProvider";
import ClientChatWidget from "../../components/ClientChatWidget";

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
      "application/rss+xml": [
        {
          url: "feed.xml",
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
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="min-h-screen transition-colors" suppressHydrationWarning>
      <head>
        {/* Hotjar Tracking Code for My Portfolio Menno */}
        <script>
          {`(function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:6399278,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
        </script>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-9DE640X7RM"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9DE640X7RM');
            `,
          }}
        />
      </head>
      <body className={`${geist.className} bg-white dark:bg-neutral-950 min-h-screen flex flex-col transition-colors`}>
        <Providers>
          <ThemeProvider attribute="class" defaultTheme="light">
            <RadixTheme>
              <ClientAuthProvider>
                <div className="flex items-center justify-center">
                  <NavigationMenuDemo />
                </div>                <main className="flex-1">
                  {children}
                  <Analytics />
                  <SpeedInsights />
                  <ClientAnalytics />
                </main>
                <ConditionalFooter />
                <ClientChatWidget />
              </ClientAuthProvider>
            </RadixTheme>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
