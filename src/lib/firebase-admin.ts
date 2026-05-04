import admin from "firebase-admin";

/**
 * Server-only Firebase Admin SDK (Auth, Firestore, etc.).
 * Use credentials from the Firebase service account JSON
 * (e.g. `firebase-adminsdk-...@....iam.gserviceaccount.com`).
 *
 * Env (first match wins):
 * - `FIREBASE_SERVICE_ACCOUNT_JSON` — full JSON string (recommended name for Firebase-only keys)
 * - `GOOGLE_SERVICE_ACCOUNT_KEY` — same shape; reused if you already set it for Vertex / GCP
 * - Else `GOOGLE_APPLICATION_CREDENTIALS` — path to a JSON file (local dev)
 */

function parseServiceAccount(raw: string): admin.ServiceAccount {
  const data = JSON.parse(raw) as Record<string, unknown>;
  if (typeof data.private_key === "string") {
    data.private_key = data.private_key.replace(/\\n/g, "\n");
  }
  return data as admin.ServiceAccount;
}

function serviceAccountFromEnv(): admin.ServiceAccount | null {
  const raw =
    process.env.FIREBASE_SERVICE_ACCOUNT_JSON?.trim() ||
    process.env.GOOGLE_SERVICE_ACCOUNT_KEY?.trim();
  if (!raw) return null;
  try {
    return parseServiceAccount(raw);
  } catch {
    return null;
  }
}

/** Returns the default Admin app, or null if no credentials are configured or init fails. */
export function getFirebaseAdminApp(): admin.app.App | null {
  if (admin.apps.length > 0) {
    return admin.app();
  }

  try {
    const sa = serviceAccountFromEnv();
    // Env JSON uses snake_case; typings often use camelCase — read both shapes.
    const keys = sa as unknown as {
      project_id?: string;
      client_email?: string;
      private_key?: string;
      projectId?: string;
      clientEmail?: string;
      privateKey?: string;
    };
    const hasJsonKey =
      Boolean(keys.project_id && keys.client_email && keys.private_key) ||
      Boolean(keys.projectId && keys.clientEmail && keys.privateKey);
    if (sa && hasJsonKey) {
      admin.initializeApp({
        credential: admin.credential.cert(sa),
      });
      return admin.app();
    }

    if (process.env.GOOGLE_APPLICATION_CREDENTIALS) {
      admin.initializeApp({
        credential: admin.credential.applicationDefault(),
      });
      return admin.app();
    }
  } catch (e) {
    console.error("Firebase Admin initializeApp failed:", e);
    return null;
  }

  return null;
}

export function getFirebaseAdminAuth(): admin.auth.Auth | null {
  const app = getFirebaseAdminApp();
  return app ? admin.auth(app) : null;
}

export function getFirebaseAdminFirestore(): admin.firestore.Firestore | null {
  const app = getFirebaseAdminApp();
  return app ? admin.firestore(app) : null;
}
