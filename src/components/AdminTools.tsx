'use client';

import { useState } from 'react';
import HashnodeCrossPost from './HashnodeCrossPost';
import { BlogPost } from '@/lib/markdown';

interface AdminToolsProps {
  post: BlogPost;
}

export default function AdminTools({ post }: AdminToolsProps) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // This is a simple check - for production, use a more secure method
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setIsAdmin(true);
      setError('');
    } else {
      setError('Incorrect password');
    }
  };

  if (!isAdmin) {
    return (
      <div className="mt-8 border rounded-lg p-4 bg-white">
        <h3 className="text-xl font-semibold mb-3">Admin Tools</h3>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Admin Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter admin password"
          />
          {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
        </div>
        <button
          onClick={handleLogin}
          className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <div className="mt-8 border rounded-lg p-4 bg-white">
      <h3 className="text-xl font-semibold mb-3">Admin Tools</h3>
      <HashnodeCrossPost post={post} />
      {/* Add other admin tools here */}
    </div>
  );
}