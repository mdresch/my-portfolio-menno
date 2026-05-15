"use client";

import React from "react";
import { AuthProvider } from "@/lib/auth";

/** Wraps the app with BFF-backed session auth (no client Firebase gate). */
export default function ClientAuthProvider({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}
