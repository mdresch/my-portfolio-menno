"use client";

import { useState, useEffect } from "react";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";

interface DevToConfigProps {
  onApiKeyChange: (apiKey: string) => void;
}

interface ErrorDetails {
  error: any;
  name: string | undefined;
  message: string | undefined;
  stack: string | undefined;
}

export default function DevToConfig({ onApiKeyChange }: DevToConfigProps) {
  const [apiKey, setApiKey] = useState("");
  const [isTesting, setIsTesting] = useState(false);
  const [testResult, setTestResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  useEffect(() => {
    const savedApiKey = sessionStorage.getItem("devto_api_key");
    if (savedApiKey) {
      setApiKey(savedApiKey);
      onApiKeyChange(savedApiKey);
    }
  }, [onApiKeyChange]);

  const handleTestConnection = async () => {
    if (!apiKey) {
      setTestResult({ success: false, message: "Please enter your API key first" });
      return;
    }

    setIsTesting(true);
    setTestResult(null);

    try {
      // Test the API key by making a request to our server-side API
      const response = await fetch("/api/devto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          apiKey,
          action: "test"
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: "Unknown error" }));
        console.error("Server API Response:", {
          status: response.status,
          errorData
        });
        
        setTestResult({
          success: false,
          message: errorData.error || `Error ${response.status}: ${errorData}`
        });
        return;
      }

      const data = await response.json();
      console.log("Server API Success Response:", {
        status: response.status,
        data
      });
      
      setTestResult({
        success: true,
        message: `Successfully connected to DEV.to! Found ${data.length} articles.`
      });
      sessionStorage.setItem("devto_api_key", apiKey);
      onApiKeyChange(apiKey);
    } catch (error: unknown) {
      console.error("Error Details:", {
        error,
        name: error instanceof Error ? error.name : undefined,
        message: error instanceof Error ? error.message : undefined,
        stack: error instanceof Error ? error.stack : undefined
      });
      
      let errorMessage = "Connection failed";
      if (error instanceof Error) {
        errorMessage = error.message;
      } else {
        errorMessage = "An unexpected error occurred while testing the connection.";
      }
      
      setTestResult({
        success: false,
        message: errorMessage
      });
    } finally {
      setIsTesting(false);
    }
  };

  return (
    <div className="border rounded-lg p-4 mb-4">
      <h3 className="text-lg font-medium mb-2">DEV.to Configuration</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            API Key
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Enter your DEV.to API key"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleTestConnection}
            disabled={isTesting}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-md disabled:opacity-50"
          >
            {isTesting ? "Testing..." : "Test Connection"}
          </button>

          {testResult && (
            <div className="flex items-center gap-2">
              {testResult.success ? (
                <FiCheckCircle className="text-green-500" />
              ) : (
                <FiXCircle className="text-red-500" />
              )}
              <span className={testResult.success ? "text-green-600" : "text-red-600"}>
                {testResult.message}
              </span>
            </div>
          )}
        </div>

        <div className="text-sm text-gray-500">
          Get your API key from{" "}
          <a 
            href="https://dev.to/settings/extensions" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-purple-600 hover:underline"
          >
            DEV.to Settings → Extensions
          </a>
        </div>
      </div>
    </div>
  );
}
