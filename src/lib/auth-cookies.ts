/** HttpOnly cookies for BFF Firebase session (never readable from JS). */
export const AUTH_COOKIE_ID_TOKEN = "fp_bff_id_token";
export const AUTH_COOKIE_REFRESH_TOKEN = "fp_bff_refresh_token";

export function authCookieBase() {
  return {
    httpOnly: true as const,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/" as const,
  };
}
