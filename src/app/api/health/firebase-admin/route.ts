import { NextResponse } from "next/server";
import { getFirebaseAdminApp } from "../../../../lib/firebase-admin";

/**
 * GET /api/health/firebase-admin
 * Returns whether Firebase Admin SDK initialized (no secrets).
 * Restart `pnpm dev` after changing .env so this picks up new values.
 */
export async function GET() {
  try {
    const app = getFirebaseAdminApp();
    return NextResponse.json({ firebaseAdmin: Boolean(app) });
  } catch {
    return NextResponse.json({ firebaseAdmin: false }, { status: 200 });
  }
}
