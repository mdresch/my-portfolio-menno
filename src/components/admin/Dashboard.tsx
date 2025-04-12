'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getSortedPostsData } from '@/lib/markdown';

interface DashboardProps {
  user: {
    name: string;
    email: string;
    role: string;
  };
}

export default function Dashboard({ user }: DashboardProps) {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); // Add this line - error state
  const [activeTab, setActiveTab] = useState('posts');
  
  // API Keys state
  const [hashnodeToken, setHashnodeToken] = useState('');
  const [devtoKey, setDevtoKey] = useState('');
  const [githubToken, setGithubToken] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState({ type: '', message: '' });
  const [useGitHubFetch, setUseGitHubFetch] = useState(false);

  // GitHub repository information
  const [repoInfo, setRepoInfo] = useState({
    owner: 'mdresch',
    repo: 'my-portfolio-menno',
    defaultBranch: 'master' // Default fallback value
  });

  // Load saved API keys and fetch posts on component mount
  useEffect(() => {
    // Load saved API keys
    const savedHashnodeToken = localStorage.getItem('hashnodeToken');
    const savedDevtoKey = localStorage.getItem('devtoKey');
    const savedGithubToken = localStorage.getItem('githubToken');
    const savedUseGitHubFetch = localStorage.getItem('useGitHubFetch') === 'true';
    
    if (savedHashnodeToken) {
      setHashnodeToken(savedHashnodeToken);
    }
    
    if (savedDevtoKey) {
      setDevtoKey(savedDevtoKey);
    }

    if (savedGithubToken) {
      setGithubToken(savedGithubToken);
    }

    setUseGitHubFetch(savedUseGitHubFetch);
    
    // Fetch posts with error handling
    async function fetchPosts() {
      try {
        setIsLoading(true);
        setError(null);
        
        console.log('Fetching posts from GitHub...');
        
        // Use the GitHub token if available
        const token = localStorage.getItem('githubToken');
        const endpoint = token 
          ? `/api/github-posts?token=${token}`
          : '/api/github-posts';
        
        const response = await fetch(endpoint);
        
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.error || `Server responded with ${response.status}`);
        }
        
        const allPosts = await response.json();
        console.log('Posts fetched successfully from GitHub:', allPosts.length);
        
        setPosts(allPosts);
      } catch (err) {
        console.error('Dashboard error fetching posts:', err);
        
        if (err instanceof Error) {
          setError(`Failed to fetch posts: ${err.message}`);
        } else {
          setError('Failed to fetch posts from GitHub. Please check your token and network connection.');
        }
      } finally {
        setIsLoading(false);
      }
    }

    // Get repository information if token is available
    async function fetchRepoInfo() {
      const token = localStorage.getItem('githubToken');
      if (!token) return;
      
      try {
        const response = await fetch('/api/github/repo-info', {
          headers: {
            'Authorization': `token ${token}`
          }
        });
        
        if (response.ok) {
          const info = await response.json();
          setRepoInfo(info);
        }
      } catch (error) {
        console.error('Failed to fetch repository information:', error);
      }
    }
    
    fetchRepoInfo();
    fetchPosts();
  }, []);

  // Function to save API keys
  const saveApiKey = async (platform: 'hashnode' | 'devto' | 'github') => {
    setIsSaving(true);
    setSaveMessage({ type: '', message: '' });
    
    try {
      // In a production app, you might want to validate the API key
      // by making a test request to the respective platform
      
      if (platform === 'hashnode') {
        localStorage.setItem('hashnodeToken', hashnodeToken);
        setSaveMessage({ type: 'success', message: 'Hashnode API token saved!' });
      } else if (platform === 'devto') {
        localStorage.setItem('devtoKey', devtoKey);
        setSaveMessage({ type: 'success', message: 'DEV.to API key saved!' });
      } else if (platform === 'github') {
        localStorage.setItem('githubToken', githubToken);
        setSaveMessage({ type: 'success', message: 'GitHub token saved!' });
      }
    } catch (error) {
      console.error(`Error saving ${platform} key:`, error);
      setSaveMessage({ 
        type: 'error', 
        message: `Failed to save ${platform === 'hashnode' ? 'Hashnode API token' : platform === 'devto' ? 'DEV.to API key' : 'GitHub token'}` 
      });
    } finally {
      setIsSaving(false);
      
      // Clear success message after 3 seconds
      if (saveMessage.type === 'success') {
        setTimeout(() => {
          setSaveMessage({ type: '', message: '' });
        }, 3000);
      }
    }
  };

  return (
    <div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="p-4 bg-blue-50 border-b">
          <div className="flex items-center">
            <div className="bg-blue-100 text-blue-700 rounded-full w-10 h-10 flex items-center justify-center mr-3">
              {user.name.charAt(0)}
            </div>
            <div>
              <p className="font-medium">{user.name}</p>
              <p className="text-sm text-gray-600">{user.email}</p>
            </div>
          </div>
        </div>
        
        <div className="border-b">
          <nav className="flex">
            <button
              onClick={() => setActiveTab('posts')}
              className={`py-3 px-4 text-sm font-medium ${
                activeTab === 'posts'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Posts
            </button>
            <button
              onClick={() => setActiveTab('cross-post')}
              className={`py-3 px-4 text-sm font-medium ${
                activeTab === 'cross-post'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Cross-Post
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`py-3 px-4 text-sm font-medium ${
                activeTab === 'settings'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Settings
            </button>
          </nav>
        </div>
        
        <div className="p-6">
          {activeTab === 'posts' && (
            <>
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <h2 className="text-xl font-semibold">Blog Posts</h2>
                  <button
                    onClick={() => fetchPosts()}
                    className="ml-2 p-1 text-gray-500 hover:text-blue-600"
                    title="Refresh posts"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </button>
                  {useGitHubFetch && (
                    <span className="ml-2 px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">
                      GitHub
                    </span>
                  )}
                </div>
                <Link
                  href="/admin/new-post"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  New Post
                </Link>
              </div>
              
              {isLoading ? (
                <div className="py-8 text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                </div>
              ) : error ? (
                <div className="py-8 text-center text-red-600">
                  {error}
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Title
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {posts.length === 0 ? (
                        <tr>
                          <td colSpan={3} className="px-6 py-4 text-center text-gray-500">
                            No posts found
                          </td>
                        </tr>
                      ) : (
                        posts.map((post, index) => (
                          <tr key={post.id || post.slug || `post-${index}`} className={`hover:bg-gray-50 ${post.hasError ? 'bg-red-50' : ''}`}>
                            <td className="px-6 py-4">
                              {post.hasError ? (
                                <div>
                                  <span className="text-red-600">{post.title}</span>
                                  <p className="text-xs text-red-500 mt-1">{post.errorMessage}</p>
                                </div>
                              ) : (
                                <Link
                                  href={`/blog/${post.slug}`}
                                  className="text-blue-600 hover:underline"
                                >
                                  {post.title}
                                </Link>
                              )}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {new Date(post.date).toLocaleDateString()}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              {post.hasError ? (
                                <a
                                  href={`https://github.com/${repoInfo.owner}/${repoInfo.repo}/blob/${repoInfo.defaultBranch}/content/blog/${post.slug}.md`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-red-600 hover:text-red-900 mr-3"
                                >
                                  Fix YAML
                                </a>
                              ) : (
                                <>
                                  <Link
                                    href={`/admin/edit/${post.slug}`}
                                    className="text-blue-600 hover:text-blue-900 mr-3"
                                  >
                                    Edit
                                  </Link>
                                  <Link
                                    href={`/admin/cross-post/${post.slug}`}
                                    className="text-purple-600 hover:text-purple-900"
                                  >
                                    Cross-Post
                                  </Link>
                                </>
                              )}
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </>
          )}
          
          {activeTab === 'cross-post' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Cross-Post Management</h2>
              <p className="text-gray-600 mb-4">
                Select a post from the list below to cross-post it to Hashnode and other platforms.
              </p>
              
              {/* Cross-post content would go here */}
              {isLoading ? (
                <div className="py-4 text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-4">
                  {posts.map((post) => (
                    <div key={post.slug} className="border rounded-lg p-4 hover:bg-gray-50">
                      <h3 className="font-medium">{post.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {new Date(post.date).toLocaleDateString()}
                      </p>
                      <div className="mt-3">
                        <Link
                          href={`/admin/cross-post/${post.slug}`}
                          className="text-purple-600 hover:text-purple-900 text-sm font-medium"
                        >
                          Cross-Post This Article →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
          
          {activeTab === 'settings' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Settings</h2>
              <p className="text-gray-600 mb-6">
                Configure your blog settings and integrations here.
              </p>
              
              {saveMessage.message && (
                <div className={`mb-4 p-3 rounded-md ${
                  saveMessage.type === 'success' 
                    ? 'bg-green-50 text-green-700 border border-green-200' 
                    : 'bg-red-50 text-red-700 border border-red-200'
                }`}>
                  {saveMessage.message}
                </div>
              )}
              
              <div className="space-y-6">
                {/* Hashnode Integration */}
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">Hashnode Integration</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Configure your Hashnode API token for cross-posting.
                  </p>
                  <div className="flex">
                    <input 
                      type="password" 
                      placeholder="Hashnode API Token" 
                      value={hashnodeToken}
                      onChange={(e) => setHashnodeToken(e.target.value)}
                      className="flex-1 px-3 py-2 border rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500" 
                    />
                    <button 
                      onClick={() => saveApiKey('hashnode')}
                      disabled={isSaving}
                      className={`px-4 py-2 rounded-r-md ${
                        isSaving 
                          ? 'bg-gray-400 text-white cursor-not-allowed' 
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}
                    >
                      {isSaving ? 'Saving...' : 'Save'}
                    </button>
                  </div>
                </div>
                
                {/* DEV.to Integration */}
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">DEV.to Integration</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Configure your DEV.to API key for cross-posting articles.
                  </p>
                  <div className="flex">
                    <input 
                      type="password" 
                      placeholder="DEV.to API Key" 
                      value={devtoKey}
                      onChange={(e) => setDevtoKey(e.target.value)}
                      className="flex-1 px-3 py-2 border rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500" 
                    />
                    <button 
                      onClick={() => saveApiKey('devto')}
                      disabled={isSaving}
                      className={`px-4 py-2 rounded-r-md ${
                        isSaving 
                          ? 'bg-gray-400 text-white cursor-not-allowed' 
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}
                    >
                      {isSaving ? 'Saving...' : 'Save'}
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    You can find or generate your API key in your{" "}
                    <a 
                      href="https://dev.to/settings/extensions" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      DEV.to settings
                    </a>.
                  </p>
                </div>

                {/* GitHub Integration */}
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">GitHub Integration</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Configure your GitHub personal access token for creating posts.
                  </p>
                  <div className="flex">
                    <input 
                      type="password" 
                      placeholder="GitHub Personal Access Token" 
                      value={githubToken}
                      onChange={(e) => setGithubToken(e.target.value)}
                      className="flex-1 px-3 py-2 border rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500" 
                    />
                    <button 
                      onClick={() => saveApiKey('github')}
                      disabled={isSaving}
                      className={`px-4 py-2 rounded-r-md ${
                        isSaving 
                          ? 'bg-gray-400 text-white cursor-not-allowed' 
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}
                    >
                      {isSaving ? 'Saving...' : 'Save'}
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Token needs repo access. You can generate one in your{" "}
                    <a 
                      href="https://github.com/settings/tokens" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      GitHub settings
                    </a>.
                  </p>
                  <div className="mt-3 flex items-center">
                    <input
                      type="checkbox"
                      id="use-github-fetch"
                      checked={useGitHubFetch}
                      onChange={(e) => {
                        const checked = e.target.checked;
                        setUseGitHubFetch(checked);
                        localStorage.setItem('useGitHubFetch', checked.toString());
                      }}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="use-github-fetch" className="ml-2 block text-sm text-gray-900">
                      Fetch posts directly from GitHub
                    </label>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 ml-6">
                    When enabled, posts will be fetched from GitHub instead of local files.
                  </p>
                </div>
              </div>
            </div>
          )}
          
          {process.env.NODE_ENV !== 'production' && (
            <div className="mt-8 p-4 bg-gray-100 rounded border border-gray-300">
              <h3 className="text-sm font-medium mb-2">Debug Information</h3>
              <div className="text-xs space-y-1">
                <p>Environment: {process.env.NODE_ENV}</p>
                <p>Posts loaded: {posts.length}</p>
                <p>API URL: {typeof window !== 'undefined' ? `${window.location.origin}/api/posts` : ''}</p>
                <button
                  onClick={async () => {
                    try {
                      setIsLoading(true);
                      const token = localStorage.getItem('githubToken');
                      const apiUrl = useGitHubFetch 
                        ? `/api/github-posts${token ? `?token=${token}` : ''}`
                        : '/api/posts';
                        
                      const result = await fetch(apiUrl);
                      const text = await result.text();
                      console.log('API Response:', text);
                      alert(`API Status: ${result.status}\nSource: ${useGitHubFetch ? 'GitHub' : 'Local'}\nCheck console for details`);
                    } catch (e) {
                      console.error('Debug fetch error:', e);
                      alert(`Error: ${e.message}`);
                    } finally {
                      setIsLoading(false);
                    }
                  }}
                  className="px-2 py-1 bg-gray-200 rounded text-xs mt-2"
                >
                  Test API Endpoint
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
