'use client';

import { useState } from 'react';
import { GitHubUser } from '@/types/github';
import { Octokit } from '@octokit/rest';

interface LoginFormProps {
  onLoginSuccess: (userData: GitHubUser) => void;
}

export default function LoginForm({ onLoginSuccess }: LoginFormProps) {
  const [token, setToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Authenticate with GitHub using personal access token
      const octokit = new Octokit({ auth: token });
      
      // Verify token by fetching user data
      const { data: userData } = await octokit.users.getAuthenticated();
      
      // Store token in session storage (more secure than localStorage)
      sessionStorage.setItem('github_token', token);
      
      // Notify parent component of successful login
      onLoginSuccess({
        ...userData,
        token,
      });
      
    } catch (err) {
      console.error('Login error:', err);
      setError('Authentication failed. Please check your token and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Sign in with GitHub</h2>
      
      {error && (
        <div className="mb-4 p-4 bg-red-50 text-red-700 rounded-md">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="token" className="block mb-2 text-sm font-medium">
            GitHub Personal Access Token
          </label>
          <input
            type="password"
            id="token"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="ghp_..."
            required
          />
          <div className="mt-2 text-sm text-gray-500">
            <p>Create a <strong>classic</strong> token with the following permissions:</p>
            <ul className="list-disc pl-5 mt-1">
              <li><code>repo</code> (all checkboxes - full control)</li>
              <li><code>workflow</code> (for repository automation)</li> 
              <li><code>user</code> (for user information)</li>
            </ul>
            <p className="mt-1">
              Create token at{' '}
              <a 
                href="https://github.com/settings/tokens" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
              </a>
            </p>
          </div>
        </div>
        
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors disabled:bg-blue-400"
        >
          {isLoading ? 'Signing in...' : 'Sign In'}
        </button>
      </form>
    </div>
  );
}
