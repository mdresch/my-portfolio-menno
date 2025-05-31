// filepath: c:\Users\menno\CascadeProjects\personal-website\src\components\SEO\DefaultSEO.tsx
import React from "react";
import Script from "next/script";

type DefaultSEOProps = {
  /** Enable verification for Google Search Console */
  enableGoogleVerification?: boolean;
  /** Enable verification for Bing Webmaster Tools */
  enableBingVerification?: boolean;
};

/**
 * DefaultSEO component for adding site-wide SEO elements
 * Includes Google Analytics, Google Search Console verification, and Bing Webmaster verification
 */
export default function DefaultSEO({
  enableGoogleVerification = false,
  enableBingVerification = false,
}: DefaultSEOProps) {
  return (
    <>
      {/* Google Analytics script - replace with your tracking ID */}
      <Script 
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXX"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXX');
        `}
      </Script>

      {/* Google Search Console Verification - Uncomment and replace verification code */}
      {enableGoogleVerification && (
        <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
      )}

      {/* Bing Webmaster Tools Verification - Uncomment and replace verification code */}
      {enableBingVerification && (
        <meta name="msvalidate.01" content="YOUR_VERIFICATION_CODE" />
      )}
    </>
  );
}