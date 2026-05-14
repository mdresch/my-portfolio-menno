import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { getFirebaseAdminAuth } from "../../../../lib/firebase-admin";
import { AUTH_COOKIE_ID_TOKEN, AUTH_COOKIE_REFRESH_TOKEN, authCookieBase } from "../../../../lib/auth-cookies";
import { refreshIdToken } from "../../../../lib/firebase-identity-rest";

export const dynamic = "force-dynamic";

type PublicUser = {
  uid: string;
  email: string | null;
  displayName: string | null;
  emailVerified: boolean;
};

function buildUserPayload(d: {
  uid: string;
  email?: string;
  name?: string;
  email_verified?: boolean;
}): PublicUser {
  return {
    uid: d.uid,
    email: d.email ?? null,
    displayName: d.name ?? null,
    emailVerified: Boolean(d.email_verified),
  };
}

export async function GET() {
  const auth = getFirebaseAdminAuth();
  if (!auth) {
    return NextResponse.json(
      {
        user: null,
        error:
          "Session check requires Firebase Admin (FIREBASE_SERVICE_ACCOUNT_JSON or GOOGLE_SERVICE_ACCOUNT_KEY).",
      },
      { status: 503 }
    );
  }

  const cookieStore = await cookies();
  let idToken = cookieStore.get(AUTH_COOKIE_ID_TOKEN)?.value ?? null;
  const refreshToken = cookieStore.get(AUTH_COOKIE_REFRESH_TOKEN)?.value ?? null;

  const verify = async (token: string | null): Promise<PublicUser | null> => {
    if (!token) return null;
    try {
      const d = await auth.verifyIdToken(token, false);
      return buildUserPayload({
        uid: d.uid,
        email: d.email,
        name: d.name,
        email_verified: d.email_verified,
      });
    } catch {
      return null;
    }
  };

  let user = await verify(idToken);

  if (!user && refreshToken) {
    try {
      const t = await refreshIdToken(refreshToken);
      idToken = t.id_token;
      user = await verify(idToken);
      if (user && idToken) {
        const res = NextResponse.json({ user });
        const base = authCookieBase();
        const idMax = Math.max(120, parseInt(t.expires_in, 10) || 3600);
        res.cookies.set(AUTH_COOKIE_ID_TOKEN, idToken, { ...base, maxAge: idMax });
        res.cookies.set(AUTH_COOKIE_REFRESH_TOKEN, t.refresh_token, { ...base, maxAge: 60 * 60 * 24 * 30 });
        return res;
      }
    } catch {
      /* fall through */
    }
  }

  if (!user) {
    return NextResponse.json({ user: null }, { status: 401 });
  }

  return NextResponse.json({ user });
}
