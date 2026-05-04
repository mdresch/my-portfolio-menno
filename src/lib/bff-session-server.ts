import { cookies } from "next/headers";
import { getFirebaseAdminAuth } from "./firebase-admin";
import { AUTH_COOKIE_ID_TOKEN } from "./auth-cookies";

/** Firebase user from BFF cookies (no refresh flow — use /api/auth/session if token expired). */
export async function getBffSessionUser(): Promise<{ uid: string; email: string | null } | null> {
  const auth = getFirebaseAdminAuth();
  if (!auth) return null;
  const cookieStore = await cookies();
  const idToken = cookieStore.get(AUTH_COOKIE_ID_TOKEN)?.value;
  if (!idToken) return null;
  try {
    const d = await auth.verifyIdToken(idToken, false);
    return { uid: d.uid, email: d.email ?? null };
  } catch {
    return null;
  }
}

export function isJourneyChatAdmin(email: string | null): boolean {
  const raw = (process.env.JOURNEY_CHAT_ADMIN_EMAILS || "").trim();
  if (!raw || !email) return false;
  const allowed = new Set(
    raw
      .split(",")
      .map((s) => s.trim().toLowerCase())
      .filter(Boolean)
  );
  return allowed.has(email.trim().toLowerCase());
}
