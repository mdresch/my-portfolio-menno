'use client';

import { useState, useEffect } from 'react';
import LoginForm from '@/components/admin/LoginForm';
import Dashboard from '@/components/admin/Dashboard';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing authentication on component mount
  useEffect(() => {
    const storedAuth = localStorage.getItem('adminAuth');
    const storedUser = localStorage.getItem('adminUser');
    
    if (storedAuth && storedUser) {
      try {
        setUser(JSON.parse(storedUser));
        setIsAuthenticated(true);
      } catch (error) {
        // Handle parsing error - clear invalid data
        localStorage.removeItem('adminAuth');
        localStorage.removeItem('adminUser');
      }
    }
    
    setIsLoading(false);
  }, []);

  // Handle login success
  const handleLoginSuccess = (userData) => {
    // Store authentication state
    localStorage.setItem('adminAuth', 'true');
    localStorage.setItem('adminUser', JSON.stringify(userData));
    
    setIsAuthenticated(true);
    setUser(userData);
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    localStorage.removeItem('adminUser');
    setIsAuthenticated(false);
    setUser(null);
  };

  if (isLoading) {
    return (
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center min-h-[60vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Blog Admin</h1>
        {isAuthenticated && (
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
          >
            Logout
          </button>
        )}
      </div>
      
      {isAuthenticated ? (
        <Dashboard user={user} />
      ) : (
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      )}
    </main>
  );
}
