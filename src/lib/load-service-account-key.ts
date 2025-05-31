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
    // Log the first 100 chars of the env var
    console.log("[loadServiceAccountKey] GOOGLE_SERVICE_ACCOUNT_KEY (first 100 chars):", process.env.GOOGLE_SERVICE_ACCOUNT_KEY.slice(0, 100));
    
    // Parse the JSON and properly format the private key
    try {
      const serviceAccountData = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY);
      // Replace escaped newlines with actual newlines in the private key
      if (serviceAccountData.private_key) {
        serviceAccountData.private_key = serviceAccountData.private_key.replace(/\\n/g, '\n');
      }
      const formattedJson = JSON.stringify(serviceAccountData, null, 2);
      fs.writeFileSync(tempPath, formattedJson);
      
      // Log the first 100 chars of the written file
      const written = fs.readFileSync(tempPath, "utf8");
      console.log("[loadServiceAccountKey] /tmp/gcp-sa-key.json (first 100 chars):", written.slice(0, 100));
      console.log("[loadServiceAccountKey] private_key starts with:", serviceAccountData.private_key.slice(0, 50));
    } catch (parseError) {
      console.error("[loadServiceAccountKey] Failed to parse GOOGLE_SERVICE_ACCOUNT_KEY:", parseError);
      // Fallback: write as-is
      fs.writeFileSync(tempPath, process.env.GOOGLE_SERVICE_ACCOUNT_KEY);
    }
    
    process.env.GOOGLE_APPLICATION_CREDENTIALS = tempPath;
  }
  // If GOOGLE_SERVICE_ACCOUNT_KEY is not set, assumes GOOGLE_APPLICATION_CREDENTIALS is set in .env.local or environment.
}
