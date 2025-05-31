"use client";

import { PropsWithChildren } from "react";
import { AuthProvider } from "../lib/auth";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
}
