"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import HotjarInit with no SSR
const HotjarWrapper = () => {
  useEffect(() => {
    // Import Hotjar only on the client side
    const loadHotjar = async () => {
      try {
        const Hotjar = (await import("@hotjar/browser")).default;
        const siteId = 6399278;
        const hotjarVersion = 6;
        
        Hotjar.init(siteId, hotjarVersion);
        console.log("Hotjar initialized successfully");
      } catch (error) {
        console.error("Failed to initialize Hotjar:", error);
      }
    };
    
    loadHotjar();
  }, []);

  // We also add the inline script as a fallback to ensure tracking works
  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = `
      (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:6399278,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    `;
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default HotjarWrapper;
