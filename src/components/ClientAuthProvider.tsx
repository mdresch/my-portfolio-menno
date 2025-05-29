"use client";

import { AuthProvider } from "@/lib/auth";
import { isFirebaseInitialized } from "@/lib/firebase";
import { useEffect, useState } from "react";

export default function ClientAuthProvider({ children }: { children: React.ReactNode }) {
  const [firebaseReady, setFirebaseReady] = useState(false);

  useEffect(() => {
    // Check if Firebase is properly initialized
    const checkFirebase = () => {
      if (isFirebaseInitialized()) {
        setFirebaseReady(true);
      } else {
        console.warn("Firebase not properly initialized");
        setFirebaseReady(true); // Still render children but auth won't work
      }
    };

    // Small delay to ensure Firebase has time to initialize
    const timer = setTimeout(checkFirebase, 100);
    
    return () => clearTimeout(timer);
  }, []);

  if (!firebaseReady) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  return <AuthProvider>{children}</AuthProvider>;
}