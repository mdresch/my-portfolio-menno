import { useState, useEffect, createContext, useContext } from 'react';
import { User, AuthToken, LoginRequest } from '../types/api';

// Define the auth context interface
interface AuthContextType {
  user: User | null;
  login: (credentials: LoginRequest) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
  isAuthenticated: boolean;
}

// API configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5154/api';

// Create the context with a default empty implementation
const AuthContext = createContext<AuthContextType>({
  user: null,
  login: async () => {},
  logout: () => {},
  isLoading: true,
  isAuthenticated: false,
});

// Local storage keys
const TOKEN_KEY = 'portfolio_auth_token';
const USER_KEY = 'portfolio_user';

// Authentication provider component
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load user from local storage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem(USER_KEY);
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error('Error parsing user from localStorage', error);
        localStorage.removeItem(USER_KEY);
      }
    }
    setIsLoading(false);
  }, []);

  // Check if token is expired
  const isTokenExpired = (token: AuthToken): boolean => {
    try {
      const expiration = new Date(token.expiration);
      return expiration <= new Date();
    } catch {
      return true;
    }
  };

  // Login function
  const login = async (credentials: LoginRequest): Promise<void> => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || 'Login failed');
      }

      const authData = await response.json();
      const { token, user } = authData;

      // Store token and user in localStorage
      localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
      localStorage.setItem(USER_KEY, JSON.stringify(user));
      
      setUser(user);
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    setUser(null);
  };

  // Get auth token from local storage
  const getAuthToken = (): AuthToken | null => {
    const storedToken = localStorage.getItem(TOKEN_KEY);
    if (!storedToken) return null;

    try {
      const token = JSON.parse(storedToken) as AuthToken;
      if (isTokenExpired(token)) {
        localStorage.removeItem(TOKEN_KEY);
        return null;
      }
      return token;
    } catch {
      localStorage.removeItem(TOKEN_KEY);
      return null;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isLoading,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Hook to use auth context
export function useAuth() {
  return useContext(AuthContext);
}

// Hook to get the auth token for API calls
export function useAuthToken() {
  const storedToken = localStorage.getItem(TOKEN_KEY);
  if (!storedToken) return null;

  try {
    const token = JSON.parse(storedToken) as AuthToken;
    const expiration = new Date(token.expiration);
    if (expiration <= new Date()) {
      localStorage.removeItem(TOKEN_KEY);
      return null;
    }
    return token.token;
  } catch {
    localStorage.removeItem(TOKEN_KEY);
    return null;
  }
}
