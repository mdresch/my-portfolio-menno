"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

/** User shape from BFF session / login (no Firebase client SDK required). */
export type SessionUser = {
  uid: string;
  email: string | null;
  displayName: string | null;
  emailVerified?: boolean;
};

interface AuthContextType {
  user: SessionUser | null;
  loading: boolean;
  isAuthenticated: boolean;
  error: string | null;
  sessionError: string | null;
  login: (credentials: { email: string; password: string }) => Promise<void>;
  signUp: (data: { username: string; email: string; password: string }) => Promise<void>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  refreshSession: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

async function readSession(): Promise<{ user: SessionUser | null; sessionError: string | null }> {
  const res = await fetch("/api/auth/session", { method: "GET", credentials: "include" });
  const data = (await res.json().catch(() => ({}))) as {
    user?: SessionUser | null;
    error?: string;
  };
  if (res.status === 503 && data.error) {
    return { user: null, sessionError: data.error };
  }
  if (res.ok && data.user) {
    return { user: data.user, sessionError: null };
  }
  return { user: null, sessionError: null };
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<SessionUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sessionError, setSessionError] = useState<string | null>(null);

  const refreshSession = React.useCallback(async () => {
    const { user: u, sessionError: se } = await readSession();
    setUser(u);
    setSessionError(se);
  }, []);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const { user: u, sessionError: se } = await readSession();
        if (!cancelled) {
          setUser(u);
          setSessionError(se);
          setError(null);
        }
      } catch {
        if (!cancelled) {
          setUser(null);
          setSessionError(null);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const login = async ({ email, password }: { email: string; password: string }) => {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });
    const data = (await res.json().catch(() => ({}))) as { error?: string; user?: SessionUser };
    if (!res.ok) {
      if (process.env.NODE_ENV === "development") {
        console.error("[auth.login BFF]", res.status, data);
      }
      throw new Error(data.error || "Login failed.");
    }
    if (data.user) {
      setUser(data.user);
      setSessionError(null);
      setError(null);
    }
  };

  const signUp = async ({ username, email, password }: { username: string; email: string; password: string }) => {
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ username, email, password }),
    });
    const data = (await res.json().catch(() => ({}))) as { error?: string; user?: SessionUser };
    if (!res.ok) {
      if (process.env.NODE_ENV === "development") {
        console.error("[auth.signup BFF]", res.status, data);
      }
      throw new Error(data.error || "Sign up failed.");
    }
    if (data.user) {
      setUser(data.user);
      setSessionError(null);
      setError(null);
    }
  };

  const logout = async () => {
    await fetch("/api/auth/logout", { method: "POST", credentials: "include" });
    setUser(null);
  };

  const resetPassword = async (email: string) => {
    const res = await fetch("/api/auth/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email }),
    });
    const data = (await res.json().catch(() => ({}))) as { error?: string };
    if (!res.ok) {
      throw new Error(data.error || "Could not send reset email.");
    }
  };

  const value = {
    user,
    loading,
    isAuthenticated: !!user,
    error,
    sessionError,
    login,
    signUp,
    logout,
    resetPassword,
    refreshSession,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
