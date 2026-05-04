import { NextResponse } from "next/server";

/** Keys read by `src/lib/firebase.ts` for the browser SDK (must use NEXT_PUBLIC_ prefix). */
const FIREBASE_WEB_ENV_KEYS = [
  "NEXT_PUBLIC_FIREBASE_API_KEY",
  "NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN",
  "NEXT_PUBLIC_FIREBASE_PROJECT_ID",
  "NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET",
  "NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID",
  "NEXT_PUBLIC_FIREBASE_APP_ID",
  "NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID",
] as const;

/**
 * GET /api/health/firebase-web
 * Lists which NEXT_PUBLIC_FIREBASE_* vars are unset (names only — no values).
 * Use after editing .env; restart `pnpm dev` so Next embeds client env.
 */
export async function GET() {
  const missing = FIREBASE_WEB_ENV_KEYS.filter((key) => !process.env[key]?.trim());

  const devMinimum =
    !!process.env.NEXT_PUBLIC_FIREBASE_API_KEY?.trim() &&
    !!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID?.trim();

  const productionReady = missing.filter((k) => k !== "NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID").length === 0;

  return NextResponse.json({
    devMinimumApiKeyAndProjectId: devMinimum,
    /** All core keys set (measurementId optional for this flag). */
    productionStyleComplete: productionReady,
    missingEnvKeys: missing,
    note: "If you set apiKey in .env without the NEXT_PUBLIC_ prefix, the browser cannot see it. Copy the web app firebaseConfig from Firebase Console → Project settings → Your apps.",
  });
}
