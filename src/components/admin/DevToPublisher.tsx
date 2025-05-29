"use client";

import { useState, useEffect } from "react";
import { BlogPostFile } from "@/types/github";
import { FiExternalLink, FiCheckCircle, FiXCircle, FiInfo, FiCopy } from "react-icons/fi";
import { DevToApiKeyManager, ApiKeyStatus } from "@/lib/devto/api-key";
import { ReactNode } from "react";

interface DevToPublisherProps {
  post: BlogPostFile;
}

interface ApiKeyStatusProps {
  status: ApiKeyStatus;
  onTest: () => Promise<void>;
  onClear: () => void;
}

const ApiKeyStatusIndicator = ({ status, onTest, onClear }: ApiKeyStatusProps) => {
  const getStatusIcon = () => {
    if (!status.hasKey) return <FiInfo className="text-yellow-500" />;
    return status.isValid ? (
      <FiCheckCircle className="text-green-500" />
    ) : (
      <FiXCircle className="text-red-500" />
    );
  };

  return (
    <div className="flex items-center space-x-2 mb-4">
      {getStatusIcon()}
      <span className="text-sm">
        {status.message}
      </span>
      {status.hasKey && (
        <>
          <button
            onClick={onTest}
            className="ml-4 px-2 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Test Connection
          </button>
          <button
            onClick={onClear}
            className="ml-2 px-2 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
          >
            Clear API Key
          </button>
        </>
      )}
    </div>
  );
};

export default function DevToPublisher({ post }: DevToPublisherProps) {
  const [isPublishing, setIsPublishing] = useState(false);
  const [publishedUrl, setPublishedUrl] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState<string | JSX.Element>("");
  const [apiKey, setApiKey] = useState("");
  const [showApiForm, setShowApiForm] = useState(false);
  const [apiKeyStatus, setApiKeyStatus] = useState<ApiKeyStatus | null>(null);

  // Get the site's domain for canonical URL
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://my-portfolio-menno.vercel.app";

  useEffect(() => {
    initApiKeyStatus();
  }, []);

  const initApiKeyStatus = async () => {
    const status = await DevToApiKeyManager.init();
    setApiKeyStatus(status);
    
    // Show API form if no API key is set
    if (!status.hasKey) {
      setShowApiForm(true);
    }
  };

  const handleApiKeySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!apiKey) {
      setError("API key is required");
      return;
    }

    try {
      const result = await DevToApiKeyManager.testApiKey(apiKey);
      if (result.isValid) {
        DevToApiKeyManager.setApiKey(apiKey);
        await initApiKeyStatus();
        setShowApiForm(false);
      } else {
        setError(result.error || "Invalid API key");
      }
    } catch (error) {
      setError("Error testing API key connection");
    }
  };

  const handleTestApiKey = async () => {
    if (!apiKey) {
      setError("API key is required");
      return;
    }

    try {
      const result = await DevToApiKeyManager.testApiKey(apiKey);
      if (result.isValid) {
        setError("");
        setSuccessMessage("Successfully connected to DEV.to");
      } else {
        setError(result.error || "Invalid API key");
      }
    } catch (error) {
      setError("Error testing API key connection");
    }
  };

  const handleClearApiKey = () => {
    DevToApiKeyManager.clearApiKey();
    setApiKey("");
    setApiKeyStatus(null);
    setShowApiForm(true);
    setError("");
    setSuccessMessage("");
  };

  const handlePublish = async () => {
    if (!apiKey) {
      setShowApiForm(true);
      return;
    }

    setIsPublishing(true);
    setError("");
    
    try {
      const result = await DevToApiKeyManager.testApiKey(apiKey);
      if (!result.isValid) {
        throw new Error(result.error || "Invalid API key");
      }

      console.log("Preparing to publish to DEV.to:", {
        postTitle: post.title,
        categories: post.categories,
        hasApiKey: !!apiKey
      });

      // Format the article for DEV.to
      const devToArticle = formatDevToArticle(post);

      // First check if article already exists
      const checkResponse = await fetch("/api/devto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          apiKey,
          action: "check",
          data: {
            canonical_url: devToArticle.article.canonical_url
          }
        })
      });

      if (!checkResponse.ok) {
        const errorData = await checkResponse.json();
        if (errorData.error?.includes("already been taken")) {
          setError(
            <div className="bg-yellow-50 p-4 rounded-lg">
              <div className="flex items-center">
                <div className="flex-1">
                  <p className="text-yellow-800 font-medium">Article already exists on DEV.to</p>
                  <p className="text-yellow-700 text-sm mt-1">This article has already been published to DEV.to. Would you like to update it instead?</p>
                </div>
                <button
                  onClick={() => {
                    setError("");
                    setIsPublishing(false);
                  }}
                  className="text-gray-500 hover:text-gray-700 text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          );
          setIsPublishing(false);
          return;
        }
        throw new Error(errorData.error || errorData.message || `Error ${checkResponse.status}: ${checkResponse.statusText}`);
      }

      // Send to our server-side API
      const apiResponse = await fetch("/api/devto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          apiKey,
          action: "publish",
          data: devToArticle
        })
      });

      if (!apiResponse.ok) {
        const errorData = await apiResponse.json().catch(() => ({ 
          error: "Unknown error",
          status: apiResponse.status,
          statusText: apiResponse.statusText
        }));
        
        console.error("DEV.to API Error:", {
          status: apiResponse.status,
          statusText: apiResponse.statusText,
          errorData,
          request: {
            url: "/api/devto",
            method: "POST",
            body: devToArticle
          }
        });

        // Handle canonical URL error specifically
        if (errorData.error?.includes("already been taken")) {
          setError(
            <div className="bg-yellow-50 p-4 rounded-lg">
              <div className="flex items-center">
                <div className="flex-1">
                  <p className="text-yellow-800 font-medium">Article already exists on DEV.to</p>
                  <p className="text-yellow-700 text-sm mt-1">This article has already been published to DEV.to. Would you like to update it instead?</p>
                </div>
                <button
                  onClick={() => {
                    setError("");
                    setIsPublishing(false);
                  }}
                  className="text-gray-500 hover:text-gray-700 text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          );
        } else {
          throw new Error(errorData.error || errorData.message || errorData.detail || errorData.errors?.join(", ") || `Error ${apiResponse.status}: ${apiResponse.statusText}`);
        }
      }

      const publishResult = await apiResponse.json();
      console.log("Successfully published to DEV.to:", {
        url: publishResult.url,
        id: publishResult.id,
        title: publishResult.title
      });
      setPublishedUrl(publishResult.url);
      setIsPublishing(false);
      
      // Show success message with URL
      setSuccessMessage(
        <div className="bg-green-50 p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-800 text-sm font-medium">Successfully published to DEV.to!</p>
              <div className="mt-2 flex items-center space-x-4">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(publishedUrl);
                    setSuccessMessage(
                      <div className="bg-green-50 p-4 rounded-lg shadow-sm">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-green-800 text-sm font-medium">Successfully published to DEV.to!</p>
                            <p className="text-green-700 text-xs mt-1">URL copied to clipboard!</p>
                            <div className="mt-2 flex items-center space-x-4">
                              <a 
                                href={publishedUrl} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-blue-600 hover:text-blue-700 text-sm flex items-center gap-1"
                              >
                                View on DEV.to
                                <FiExternalLink className="inline h-4 w-4" />
                              </a>
                              <button
                                onClick={() => {
                                  setSuccessMessage("");
                                  setPublishedUrl("");
                                }}
                                className="text-gray-500 hover:text-gray-700 text-sm"
                              >
                                Close
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                    setTimeout(() => {
                      setSuccessMessage("");
                      setPublishedUrl("");
                    }, 3000);
                  }}
                  className="text-green-700 hover:text-green-800 text-sm flex items-center gap-1"
                >
                  Copy URL
                  <FiCopy className="inline h-4 w-4" />
                </button>
                <a 
                  href={publishedUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:text-blue-700 text-sm flex items-center gap-1"
                >
                  View on DEV.to
                  <FiExternalLink className="inline h-4 w-4" />
                </a>
                <button
                  onClick={() => {
                    setSuccessMessage("");
                    setPublishedUrl("");
                  }}
                  className="text-gray-500 hover:text-gray-700 text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      );

    } catch (error: any) {
      console.error("Error publishing to DEV.to:", error);
      setError(error.message);
      setIsPublishing(false);
    }
  };

  const formatDevToArticle = (post: BlogPostFile) => {
    // Extract front matter for tags
    const categories = post.categories || [];
    
    // Format date for DEV.to
    const now = new Date();
    // Add 1 minute to ensure it's in the future
    now.setMinutes(now.getMinutes() + 1);
    // Format timestamp according to DEV.to's requirements
    const publishDate = now.toISOString().replace("T", " ").replace("Z", "");

    // Format tags according to DEV.to requirements
    const formatTag = (tag: string): string => {
      // Convert to lowercase
      let formatted = tag.toLowerCase();
      // Replace spaces with hyphens
      formatted = formatted.replace(/\s+/g, "-");
      // Remove any non-alphanumeric characters except hyphens
      formatted = formatted.replace(/[^a-z0-9-]/g, "");
      // Remove consecutive hyphens
      formatted = formatted.replace(/-{2,}/g, "-");
      // Remove leading/trailing hyphens
      formatted = formatted.replace(/^\-|-$/g, "");
      
      // Special handling for known tags
      const tagMap: { [key: string]: string } = {
        "tutorial": "tutorial",
        "next.js": "nextjs",
        "react": "react"
      };
      
      // Use mapped tag if available, otherwise use formatted tag
      return tagMap[formatted] || formatted || "webdevelopment";
    };

    // Format the article content
    const formattedContent = post.content
      .replace(/\n{3,}/g, "\n\n") // Normalize multiple newlines
      .trim();

    // Create the payload for DEV.to API
    const devToArticle = {
      article: {
        title: post.title,
        body_markdown: formattedContent,
        published: true,
        tags: categories.map(tag => formatTag(tag)),
        canonical_url: `${baseUrl}/blog/${post.path.split("/").pop()?.replace(".md", "")}`,
        description: post.excerpt || post.title.substring(0, 155) + "...",
        main_image: post.image || "",
        series: "",
        published_at: publishDate,
        organization_id: null,
        readtime: Math.ceil(formattedContent.split(" ").length / 265) || 1, // Estimate reading time
        articles: [] // Required by DEV.to API
      }
    };

    return devToArticle;
  };

  return (
    <div className="space-y-4">
      <ApiKeyStatusIndicator
        status={apiKeyStatus || { isValid: false, hasKey: false, message: "No API key set" }}
        onTest={handleTestApiKey}
        onClear={handleClearApiKey}
      />

      {showApiForm && (
        <form onSubmit={handleApiKeySubmit} className="space-y-4">
          <div>
            <label htmlFor="apiKey" className="block text-sm font-medium text-gray-700">
              DEV.to API Key
            </label>
            <div className="mt-1">
              <input
                type="password"
                id="apiKey"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="Enter your DEV.to API key"
              />
            </div>
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => {
                setShowApiForm(false);
                setApiKey("");
                setError("");
                setSuccessMessage("");
              }}
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save API Key
            </button>
          </div>
        </form>
      )}

      <div className="space-y-2">
        <button
          onClick={handlePublish}
          disabled={isPublishing || !apiKey}
          className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${
            isPublishing ? "bg-gray-400 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700"
          } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full`}
        >
          {isPublishing ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Publishing...
            </>
          ) : (
            "Publish to DEV.to"
          )}
        </button>

        {error && (
          <div className="bg-red-50 p-4 rounded-md">
            <p className="text-red-800">{error}</p>
          </div>
        )}

        {successMessage && (
          <div className="bg-green-50 p-4 rounded-lg shadow-sm">
            {typeof successMessage === "string" ? (
              <p className="text-green-800">{successMessage}</p>
            ) : (
              successMessage
            )}
          </div>
        )}
      </div>
    </div>
  );
};
