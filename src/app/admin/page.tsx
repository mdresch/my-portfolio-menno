'use client';

import { useState } from 'react';
import LoginForm from '@/components/admin/LoginForm';
import Dashboard from '@/components/admin/Dashboard';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // Handle login success
  const handleLoginSuccess = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Blog Admin</h1>
      
      {isAuthenticated ? (
        <Dashboard user={user} />
      ) : (
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      )}
    </main>
  );
}
