import { NextResponse } from "next/server";
import { getBffSessionUser, isJourneyChatAdmin } from "./bff-session-server";

export function isImageLibraryAdmin(email: string | null): boolean {
  const raw = (process.env.IMAGE_LIBRARY_ADMIN_EMAILS || "").trim();
  if (raw && email) {
    const allowed = new Set(
      raw
        .split(",")
        .map((s) => s.trim().toLowerCase())
        .filter(Boolean)
    );
    if (allowed.has(email.trim().toLowerCase())) return true;
  }
  return isJourneyChatAdmin(email);
}

export async function requireImageLibraryAdmin() {
  const user = await getBffSessionUser();
  if (!user) {
    return { user: null, error: NextResponse.json({ error: "Sign in required" }, { status: 401 }) };
  }
  if (!isImageLibraryAdmin(user.email)) {
    return {
      user: null,
      error: NextResponse.json(
        {
          error:
            "Your account is not authorized for the image library. Set IMAGE_LIBRARY_ADMIN_EMAILS (or JOURNEY_CHAT_ADMIN_EMAILS).",
        },
        { status: 403 }
      ),
    };
  }
  return { user, error: null };
}
