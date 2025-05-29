"use client";

import { useEffect } from "react";
import Hotjar from "@hotjar/browser";

export default function HotjarInit() {
  useEffect(() => {
    const siteId = 6399278;
    const hotjarVersion = 6;
    
    try {
      Hotjar.init(siteId, hotjarVersion);
      console.log("Hotjar initialized successfully");
    } catch (error) {
      console.error("Failed to initialize Hotjar:", error);
    }
  }, []);

  return null; // This component doesn't render anything
}
