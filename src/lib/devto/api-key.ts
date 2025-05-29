import { validateApiKey } from "./devto";

interface ApiKeyStatus {
  isValid: boolean;
  hasKey: boolean;
  message: string;
}

export class DevToApiKeyManager {
  private static readonly STORAGE_KEY = "devto_api_key";
  private static readonly TEST_URL = "/api/devto";

  static async init(): Promise<ApiKeyStatus> {
    const apiKey = this.getApiKey();
    if (!apiKey) {
      return {
        isValid: false,
        hasKey: false,
        message: "No API key set"
      };
    }

    try {
      const { isValid, error, message } = await this.testApiKey(apiKey);
      return {
        isValid,
        hasKey: true,
        message: isValid ? message || "API key is valid" : error || "Invalid API key"
      };
    } catch (error) {
      return {
        isValid: false,
        hasKey: true,
        message: "Error testing API key"
      };
    }
  }

  static setApiKey(apiKey: string): void {
    if (apiKey) {
      localStorage.setItem(this.STORAGE_KEY, apiKey);
    } else {
      localStorage.removeItem(this.STORAGE_KEY);
    }
  }

  static getApiKey(): string | null {
    return localStorage.getItem(this.STORAGE_KEY);
  }

  static clearApiKey(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }

  static async testApiKey(apiKey: string): Promise<{ isValid: boolean; error?: string; message?: string }> {
    if (!apiKey) {
      return { isValid: false, error: "API key is required" };
    }

    try {
      const response = await fetch(this.TEST_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          apiKey,
          action: "test"
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        return { isValid: false, error: errorData.error || errorData.message || `Error ${response.status}: ${response.statusText}` };
      }

      const result = await response.json();
      return { isValid: result.isValid, error: result.error, message: result.message };
    } catch (error) {
      return { isValid: false, error: "Error testing API key connection" };
    }
  }
}

export type { ApiKeyStatus };
export { validateApiKey };
