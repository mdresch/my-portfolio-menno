"use client";

import { useEffect } from "react";

/** Hotjar refuses non-HTTPS origins (e.g. http://localhost). Skip silently in dev. */
function isHotjarAllowedOrigin() {
  if (typeof window === "undefined") return false;
  return window.location.protocol === "https:";
}

const HotjarWrapper = () => {
  useEffect(() => {
    if (!isHotjarAllowedOrigin()) return;

    let cancelled = false;
    (async () => {
      try {
        const Hotjar = (await import("@hotjar/browser")).default;
        const siteId = 6399278;
        const hotjarVersion = 6;
        if (!cancelled) {
          Hotjar.init(siteId, hotjarVersion);
        }
      } catch {
        /* Hotjar SDK or network failure — non-fatal */
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
};

export default HotjarWrapper;
