"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { 
  User,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
  onAuthStateChanged
} from "firebase/auth";
import { isFirebaseInitialized } from "./firebase";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  isAuthenticated: boolean;
  error: string | null;
  login: (credentials: { email: string; password: string }) => Promise<void>;
  signUp: (data: { username: string; email: string; password: string }) => Promise<void>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        // Check if Firebase is initialized
        if (!isFirebaseInitialized()) {
          setError("Firebase is not properly configured");
          setLoading(false);
          return;
        }

        const { auth } = await import("./firebase");
        
        if (!auth) {
          setError("Firebase auth not available");
          setLoading(false);
          return;
        }

        const unsubscribe = onAuthStateChanged(
          auth, 
          (user) => {
            setUser(user);
            setLoading(false);
            setError(null);
          }, 
          (error) => {
            console.error("Auth state change error:", error);
            setError("Authentication error occurred");
            setLoading(false);
          }
        );

        return unsubscribe;
      } catch (error) {
        console.error("Failed to initialize Firebase auth:", error);
        setError("Failed to initialize authentication");
        setLoading(false);
      }
    };

    let unsubscribe: (() => void) | undefined;
    
    initializeAuth().then((unsub) => {
      unsubscribe = unsub;
    });

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  const login = async ({ email, password }: { email: string; password: string }) => {
    try {
      if (!isFirebaseInitialized()) {
        throw new Error("Firebase is not properly configured");
      }

      const { auth } = await import("./firebase");
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: unknown) {
      if (typeof error === "object" && error !== null && "code" in error) {
        throw new Error(getFirebaseErrorMessage((error as { code: string }).code));
      }
      throw new Error("An error occurred. Please try again.");
    }
  };

  const signUp = async ({ username, email, password }: { username: string; email: string; password: string }) => {
    try {
      if (!isFirebaseInitialized()) {
        throw new Error("Firebase is not properly configured");
      }

      const { auth } = await import("./firebase");
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, {
        displayName: username
      });
    } catch (error: unknown) {
      if (typeof error === "object" && error !== null && "code" in error) {
        throw new Error(getFirebaseErrorMessage((error as { code: string }).code));
      }
      throw new Error("An error occurred. Please try again.");
    }
  };

  const logout = async () => {
    try {
      if (!isFirebaseInitialized()) {
        throw new Error("Firebase is not properly configured");
      }

      const { auth } = await import("./firebase");
      await signOut(auth);
    } catch {
      throw new Error("Failed to log out");
    }
  };

  const resetPassword = async (email: string) => {
    try {
      if (!isFirebaseInitialized()) {
        throw new Error("Firebase is not properly configured");
      }

      const { auth } = await import("./firebase");
      await sendPasswordResetEmail(auth, email);
    } catch (error: unknown) {
      if (typeof error === "object" && error !== null && "code" in error) {
        throw new Error(getFirebaseErrorMessage((error as { code: string }).code));
      }
      throw new Error("An error occurred. Please try again.");
    }
  };

  const value = {
    user,
    loading,
    isAuthenticated: !!user,
    error,
    login,
    signUp,
    logout,
    resetPassword
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

// Helper function to convert Firebase error codes to user-friendly messages
function getFirebaseErrorMessage(errorCode: string): string {
  switch (errorCode) {
  case "auth/user-not-found":
    return "No account found with this email address.";
  case "auth/wrong-password":
    return "Incorrect password.";
  case "auth/email-already-in-use":
    return "An account with this email already exists.";
  case "auth/weak-password":
    return "Password should be at least 6 characters.";
  case "auth/invalid-email":
    return "Invalid email address.";
  case "auth/too-many-requests":
    return "Too many failed attempts. Please try again later.";
  case "auth/user-disabled":
    return "This account has been disabled.";
  case "auth/invalid-credential":
    return "Invalid email or password.";
  default:
    return "An error occurred. Please try again.";
  }
}
