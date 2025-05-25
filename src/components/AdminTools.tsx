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
  const [mediumLoading, setMediumLoading] = useState(false);
  const [mediumResult, setMediumResult] = useState<string | null>(null);
  const [mediumError, setMediumError] = useState<string | null>(null);

  const handleLogin = () => {
    // This is a simple check - for production, use a more secure method
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setIsAdmin(true);
      setError('');
    } else {
      setError('Incorrect password');
    }
  };

  const handleMediumCrossPost = async () => {
    setMediumLoading(true);
    setMediumResult(null);
    setMediumError(null);
    try {
      const res = await fetch('/api/medium-crosspost', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ post }),
      });
      const data = await res.json();
      if (data.success && data.url) {
        setMediumResult(`Successfully cross-posted to Medium! View it here: ${data.url}`);
      } else {
        setMediumError(data.error || 'Unknown error');
      }
    } catch (err) {
      setMediumError('Network or server error');
    } finally {
      setMediumLoading(false);
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
      <div className="mt-4">
        <button
          onClick={handleMediumCrossPost}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
          disabled={mediumLoading}
        >
          {mediumLoading ? 'Cross-posting to Medium...' : 'Cross-post to Medium'}
        </button>
        {mediumResult && <p className="text-green-700 mt-2">{mediumResult}</p>}
        {mediumError && <p className="text-red-600 mt-2">{mediumError}</p>}
      </div>
      {/* Add other admin tools here */}
    </div>
  );
}