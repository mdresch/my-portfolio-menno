import { NextRequest, NextResponse } from "next/server";
import {
  IdentityToolkitError,
  signUpWithPassword,
  toolkitMessageToUserMessage,
  updateProfileDisplayName,
} from "../../../../lib/firebase-identity-rest";
import { AUTH_COOKIE_ID_TOKEN, AUTH_COOKIE_REFRESH_TOKEN, authCookieBase } from "../../../../lib/auth-cookies";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as { email?: string; password?: string; username?: string };
    const email = String(body.email ?? "").trim();
    const password = String(body.password ?? "");
    const username = String(body.username ?? "").trim();
    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required." }, { status: 400 });
    }

    let tokens = await signUpWithPassword(email, password);
    if (username) {
      tokens = await updateProfileDisplayName(tokens.idToken, username);
    }

    const res = NextResponse.json({
      ok: true,
      user: {
        uid: tokens.localId,
        email: tokens.email,
        displayName: tokens.displayName ?? (username || null),
      },
    });
    const base = authCookieBase();
    const idMax = Math.max(120, parseInt(tokens.expiresIn, 10) || 3600);
    res.cookies.set(AUTH_COOKIE_ID_TOKEN, tokens.idToken, { ...base, maxAge: idMax });
    res.cookies.set(AUTH_COOKIE_REFRESH_TOKEN, tokens.refreshToken, { ...base, maxAge: 60 * 60 * 24 * 30 });
    return res;
  } catch (e) {
    if (e instanceof IdentityToolkitError) {
      return NextResponse.json({ error: toolkitMessageToUserMessage(e.toolkitCode) }, { status: 400 });
    }
    if (e instanceof Error && e.message.includes("Missing FIREBASE_WEB")) {
      return NextResponse.json({ error: "Server is not configured for sign-up." }, { status: 503 });
    }
    return NextResponse.json({ error: "Sign-up failed." }, { status: 500 });
  }
}
