import { useState } from 'react';
import { use } from 'react';
import Link from 'next/link';

export default function CrossPostPage({ params }) {
  // Unwrap params
  const { slug } = use(Promise.resolve(params));
  
  // State variables
  const [platform, setPlatform] = useState('hashnode');
  const [post, setPost] = useState(null);
  const [hashnodeToken, setHashnodeToken] = useState('');
  const [devtoKey, setDevtoKey] = useState('');
  const [isCrossPosting, setIsCrossPosting] = useState(false);
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [showDebugPanel, setShowDebugPanel] = useState(false);
  
  // Load saved tokens and fetch post data
  useEffect(() => {
    // Load saved API keys
    const savedHashnodeToken = localStorage.getItem('hashnodeToken');
    const savedDevtoKey = localStorage.getItem('devtoKey');
    
    if (savedHashnodeToken) {
      setHashnodeToken(savedHashnodeToken);
    }
    
    if (savedDevtoKey) {
      setDevtoKey(savedDevtoKey);
    }
    
    // Fetch post data
    async function fetchPost() {
      setIsLoading(true);
      setError('');
      try {
        const token = localStorage.getItem('githubToken');
        const endpoint = token
          ? `/api/github-posts?slug=${slug}&token=${token}`
          : `/api/posts?slug=${slug}`;
        
        const response = await fetch(endpoint);

        if (!response.ok) {
          setError(`Failed to fetch post: ${response.status}`);
          return;
        }

        const postData = await response.json();
        setPost(postData);
      } catch (err) {
        setError(
          err.message || 'Failed to fetch post'
        );
      } finally {
        setIsLoading(false);
      }
    }

    if (slug) {
      fetchPost();
    }
  }, []);
  
  // Handle cross-posting
  const handleCrossPost = async () => {
    // Get the appropriate token based on platform
    const token =
      platform === 'hashnode'
        ? hashnodeToken || localStorage.getItem('hashnodeToken')
        : devtoKey || localStorage.getItem('devtoKey');
      
    if (!token) {
      alert(`Please enter your ${platform === 'hashnode' ? 'Hashnode API token' : 'DEV.to API key'}`);
      return;
    }

    setIsCrossPosting(true);
    setResult(null);

    try {
      const endpoint =
        platform === 'hashnode'
          ? '/api/hashnode-crosspost'
          : '/api/devto-crosspost';
        
      console.log(`Cross-posting to ${platform} via ${endpoint}`);
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          post, // Sending the post object
          token // Sending the API key/token
        }),
      });
      // First try to get JSON response
      let responseData;
      try {
        responseData = await response.json();
      } catch (jsonError) {
        console.error('Failed to parse JSON response:', jsonError);
        throw new Error(`Failed to parse response: ${response.status}`);
      }
      
      if (!response.ok) throw new Error(responseData.error || `Failed to cross-post: ${response.status}`);

      setResult(responseData);
    } catch (error) {      

      setResult({ error: error.message || 'An error occurred during cross-posting' });
    } finally {
      setIsCrossPosting(false);
    }
  };
  
  // Show loading state
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600 mx-auto"></div>
          <p className="text-center mt-4 text-gray-600">Loading post data...</p>
        </div>
      </div>
    );
  }
  
  // Show error state
  if (error || !post) {
       return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-xl font-semibold text-red-600 mb-4">Error</h1>
          <p>{error || 'Post not found'}</p>
          <Link href="/admin" className="text-blue-600 hover:underline mt-4 inline-block">
            ← Back to Admin
          </Link>
          {process.env.NODE_ENV !== 'production' && (
            <div className="mt-4 p-4 bg-gray-100 rounded border text-xs font-mono">
              <h3 className="font-medium mb-2">Debug Info:</h3>
              <p>Slug: {slug}</p>
              <p>GitHub Token Available: {localStorage.getItem('githubToken') ? 'Yes' : 'No'}</p>
              <div className="mt-2">
                <button
                  onClick={async () => {
                    try {
                      const token = localStorage.getItem('githubToken');
                      // Try both endpoints and show results
                      const results = await Promise.allSettled([
                        fetch(`/api/github-posts?slug=${slug}${token ? `&token=${token}` : ''}`),
                        fetch(`/api/posts?slug=${slug}`)
                      ]);
                      
                      console.log('API Test Results:', results);
                      alert(`Check console for detailed API test results`);
                    } catch (e) {
                      console.error('Debug test error:', e);
                    }
                  }}
                  className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs"
                >
                  Test API Endpoints
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-6">
        <Link href="/admin" className="text-blue-600 hover:underline">
          ← Back to Admin
        </Link>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6">Cross-Post: {post.title}</h1>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Platform
          </label>
          <div className="flex space-x-4">
            <button
              type="button"
              onClick={() => setPlatform('hashnode')}
              className={`px-4 py-2 rounded-md ${
                platform === 'hashnode'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Hashnode
            </button>
            <button
              type="button"
              onClick={() => setPlatform('devto')}
              className={`px-4 py-2 rounded-md ${
                platform === 'devto'
                  ? 'bg-gray-800 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              DEV.to
            </button>
          </div>
        </div>
        
        <form onSubmit={(e) => e.preventDefault()} className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {platform === 'hashnode' ? 'Hashnode Token' : 'DEV.to API Key'}
          </label>
          <input
            type="password"
            value={platform === 'hashnode' ? hashnodeToken : devtoKey}
            onChange={(e) => platform === 'hashnode' 
              ? setHashnodeToken(e.target.value) 
              : setDevtoKey(e.target.value)
            }
            autoComplete="new-password"
            placeholder={`Enter your ${platform === 'hashnode' ? 'Hashnode token' : 'DEV.to API key'}`}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          <p className="mt-1 text-sm text-gray-500">
            {platform === 'hashnode' 
              ? 'You can find your Hashnode token in your Hashnode account settings.' 
              : 'You can find your DEV.to API key in your DEV.to account settings.'}
          </p>
        </form>
        
        <div className="mb-6">
          <h2 className="text-lg font-medium mb-3">Post Details</h2>
          <div className="border rounded-md p-4 bg-gray-50">
            <h3 className="font-medium">{post.title}</h3>
            <p className="text-sm text-gray-500 mt-1">
              {new Date(post.date).toLocaleDateString()}
            </p>
            {post.excerpt && (
              <p className="text-sm mt-3">{post.excerpt}</p>
            )}
            {post.categories && post.categories.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {post.categories.map((category) => (
                  <span key={category} className="text-xs px-2 py-1 bg-gray-200 rounded-full">
                    {category}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-8">
          <button
            onClick={handleCrossPost}
            disabled={isCrossPosting}
            className={`px-5 py-3 rounded-md text-white font-medium ${
              isCrossPosting
                ? 'bg-blue-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {isCrossPosting ? 'Posting...' : `Post to ${platform === 'hashnode' ? 'Hashnode' : 'DEV.to'}`}
          </button>
        </div>
        
        {result && (
          <div className={`mt-6 p-4 rounded-md ${
            result.error 
              ? 'bg-red-50 border border-red-200 text-red-700' 
              : 'bg-green-50 border border-green-200 text-green-700'
          }`}>
            {result.error ? (
              <p>Error: {result.error}</p>
            ) : (
              <div>
                <p className="font-medium">Successfully cross-posted!</p>
                {result.url && (
                  <a 
                    href={result.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-600 hover:underline mt-2 inline-block"
                  >
                    View Post →
                  </a>
                )}
              </div>
            )}
          </div>
        )}

        {process.env.NODE_ENV !== 'production' && (
          <div className="mt-8 border-t pt-4">
            <button 
              onClick={() => setShowDebugPanel(!showDebugPanel)}
              className="text-sm text-gray-500 underline"
            >
              {showDebugPanel ? 'Hide' : 'Show'} Debug Panel
            </button>
            
            {showDebugPanel && (
              <div className="mt-4 p-4 bg-gray-50 rounded border text-xs">
                <h3 className="font-medium mb-2">Hashnode API Debug</h3>
                
                <div className="mb-4">
                  <button
                    onClick={async () => {
                      try {
                        const token = localStorage.getItem('hashnodeToken');
                        if (!token) {
                          alert('Please enter a Hashnode token first');
                          return;
                        }
                        
                        const response = await fetch('/api/hashnode-schema', {
                          headers: { 'Authorization': token }
                        });
                        const data = await response.json();
                        console.log('Hashnode Schema:', data);
                        
                        // Look for specific types
                        const createDraftType = data.types.find(t => t.name === 'CreateDraftPayload');
                        const publishDraftType = data.types.find(t => t.name === 'PublishDraftPayload');
                        
                        if (createDraftType) {
                          console.log('CreateDraftPayload fields:', createDraftType.fields);
                        }
                        
                        if (publishDraftType) {
                          console.log('PublishDraftPayload fields:', publishDraftType.fields);
                        }
                        
                        alert('Schema data logged to console');
                      } catch (e) {
                        console.error('Schema fetch error:', e);
                        alert(`Error: ${e.message}`);
                      }
                    }}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded"
                  >
                    Check Schema
                  </button>
                </div>
                
                <div className="mb-4">
                  <div className="font-medium mb-1">Test Create Draft</div>
                  <button
                    onClick={async () => {
                      try {
                        const token = localStorage.getItem('hashnodeToken');
                        if (!token) {
                          alert('Please enter a Hashnode token first');
                          return;
                        }
                        
                        const testQuery = `
                          mutation {
                            createDraft(input: {
                              title: "Test Draft",
                              contentMarkdown: "This is a test draft."
                            }) {
                              draft {
                                id
                                title
                              }
                            }
                          }
                        `;
                        
                        const response = await fetch('/api/hashnode-test', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({ query: testQuery, token })
                        });
                        
                        const data = await response.json();
                        console.log('Test create draft response:', data);
                        
                        if (data.errors) {
                          alert(`Test failed: ${data.errors[0].message}`);
                        } else {
                          alert(`Test passed! Draft ID: ${data.data.createDraft.draft.id}`);
                        }
                      } catch (e) {
                        console.error('Test error:', e);
                        alert(`Error: ${e.message}`);
                      }
                    }}
                    className="px-3 py-1 bg-green-100 text-green-800 rounded"
                  >
                    Test Create Draft
                  </button>
                </div>

                <div className="mb-4">
                  <div className="font-medium mb-1">Show Hashnode Field Requirements</div>
                  <button
                    onClick={() => {
                      // Based on the error message, show the validation rules Hashnode uses
                      alert(
                        "Hashnode Tag Slug Rules:\n" +
                        "- Must match regex: ^[a-z0-9-]{1,250}$\n" +
                        "- Only lowercase letters, numbers, and hyphens are allowed\n" +
                        "- No spaces, periods or other special characters\n" +
                        "- Max length: 250 characters"
                      );
                    }}
                    className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded"
                  >
                    Show Tag Requirements
                  </button>
                </div>

                <div className="mb-4">
                  <div className="font-medium mb-1">Test Your Categories</div>
                  <div className="bg-gray-100 p-2 rounded mb-2">
                    {post.categories?.map((category, index) => {
                      const slug = category.toLowerCase()
                        .replace(/\s+/g, '-')
                        .replace(/\./g, '-')
                        .replace(/[^a-z0-9-]/g, '');
                      const isValid = /^[a-z0-9-]{1,250}$/.test(slug);
                      
                      return (
                        <div key={index} className={`text-sm mb-1 ${isValid ? 'text-green-600' : 'text-red-600'}`}>
                          {category} → {slug} {isValid ? '✓' : '✗'}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {process.env.NODE_ENV !== 'production' && (
          <div className="mt-8 border-t pt-4">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Debug Information</h3>
            <div className="bg-gray-50 p-4 rounded text-xs font-mono overflow-auto max-h-60">
              <div>
                <strong>Platform:</strong> {platform}
              </div>
              <div>
                <strong>Post Slug:</strong> {slug}
              </div>
              <div>
                <strong>Has Token:</strong> {(platform === 'hashnode' ? hashnodeToken : devtoKey) ? 'Yes' : 'No'}
              </div>
              <div className="mt-2">
                <button 
                  onClick={() => console.log('Post data:', post)}
                  className="px-2 py-1 bg-gray-200 rounded mr-2"
                >
                  Log Post Data
                </button>
                <button
                  onClick={async () => {
                    const apiUrl = platform === 'hashnode'
                      ? 'https://gql.hashnode.com'
                      : 'https://dev.to/api/articles/me/published'; // Use a DEV.to endpoint requiring auth

                    const token = platform === 'hashnode'
                      ? localStorage.getItem('hashnodeToken')
                      : localStorage.getItem('devtoKey');

                    if (!token) {
                      alert(`Please enter a ${platform} token/key first.`);
                      return;
                    }

                    try {
                      let testResponse;
                      if (platform === 'hashnode') {
                        // Use a simple GraphQL query for Hashnode test
                        const testQuery = { query: '{ __typename }' }; // Basic introspection query
                        testResponse = await fetch(apiUrl, {
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/json',
                            'Authorization': token
                          },
                          body: JSON.stringify(testQuery)
                        });
                      } else {
                        // Use a simple GET request for DEV.to test (requires API key)
                        testResponse = await fetch(apiUrl, {
                          method: 'GET',
                          headers: {
                            'api-key': token
                          }
                        });
                      }

                      // Check if the response indicates success (2xx status code)
                      // For Hashnode, also check if there are no GraphQL errors in the response body
                      let isSuccess = testResponse.ok;
                      let responseBody = {}; // Default empty object

                      if (platform === 'hashnode') {
                        try {
                          responseBody = await testResponse.json();
                          if (responseBody.errors) {
                            isSuccess = false; // Mark as failed if GraphQL errors exist
                            console.error("Hashnode Test API Errors:", responseBody.errors);
                          }
                        } catch (e) {
                          // Ignore JSON parsing errors if the status was already not ok
                          if (isSuccess) {
                            console.error("Failed to parse Hashnode test response:", e);
                            isSuccess = false;
                          }
                        }
                      }

                      alert(
                        `Test connection to ${platform} API: ${isSuccess ? 'Success' : 'Failed'} (${testResponse.status})` +
                        `${(platform === 'hashnode' && responseBody.errors) ? ' - Check console for GraphQL errors.' : ''}`
                      );

                    } catch (e) {
                      console.error(`Connection test failed for ${platform}:`, e);
                      alert(`Connection test failed: ${e.message}`);
                    }
                  }}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  Test API Connection
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}