import fs from "fs";
import path from "path";

/**
 * Ensures GOOGLE_APPLICATION_CREDENTIALS is set to a valid file for VertexAI/GoogleAuth.
 * - Always writes GOOGLE_SERVICE_ACCOUNT_KEY to /tmp/gcp-sa-key.json and sets the env var if present.
 * - If GOOGLE_SERVICE_ACCOUNT_KEY is not set, does nothing (assumes GOOGLE_APPLICATION_CREDENTIALS is set).
 */
export function loadServiceAccountKey() {
  if (process.env.GOOGLE_SERVICE_ACCOUNT_KEY) {
    const tempPath = "/tmp/gcp-sa-key.json";

    try {
      const serviceAccountData = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY) as {
        private_key?: string;
      };
      if (serviceAccountData.private_key) {
        serviceAccountData.private_key = serviceAccountData.private_key.replace(/\\n/g, "\n");
      }
      const formattedJson = JSON.stringify(serviceAccountData, null, 2);
      fs.writeFileSync(tempPath, formattedJson);
    } catch (parseError) {
      console.error("[loadServiceAccountKey] Failed to parse GOOGLE_SERVICE_ACCOUNT_KEY:", parseError);
      fs.writeFileSync(tempPath, process.env.GOOGLE_SERVICE_ACCOUNT_KEY);
    }

    process.env.GOOGLE_APPLICATION_CREDENTIALS = tempPath;
  }
}
