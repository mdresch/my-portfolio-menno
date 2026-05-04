import { NextResponse } from "next/server";
import { AUTH_COOKIE_ID_TOKEN, AUTH_COOKIE_REFRESH_TOKEN, authCookieBase } from "../../../../lib/auth-cookies";

export const dynamic = "force-dynamic";

export async function POST() {
  const res = NextResponse.json({ ok: true });
  const base = authCookieBase();
  const cleared = { ...base, maxAge: 0 };
  res.cookies.set(AUTH_COOKIE_ID_TOKEN, "", cleared);
  res.cookies.set(AUTH_COOKIE_REFRESH_TOKEN, "", cleared);
  return res;
}
