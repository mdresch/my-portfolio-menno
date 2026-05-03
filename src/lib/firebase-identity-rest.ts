/**
 * Firebase Identity Toolkit REST (server-side only).
 * @see https://firebase.google.com/docs/reference/rest/auth
 */

const IDENTITY = "https://identitytoolkit.googleapis.com/v1";
const SECURE_TOKEN = "https://securetoken.googleapis.com/v1";

export class IdentityToolkitError extends Error {
  constructor(public readonly toolkitCode: string) {
    super(toolkitCode);
    this.name = "IdentityToolkitError";
  }
}

export function getFirebaseWebApiKey(): string {
  const k =
    process.env.FIREBASE_WEB_API_KEY?.trim() ||
    process.env.NEXT_PUBLIC_FIREBASE_API_KEY?.trim();
  if (!k) {
    throw new Error(
      "Missing FIREBASE_WEB_API_KEY or NEXT_PUBLIC_FIREBASE_API_KEY for Identity Toolkit (BFF login)."
    );
  }
  return k;
}

export type PasswordSignResult = {
  idToken: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  email: string;
  displayName?: string;
};

export async function signInWithPassword(email: string, password: string): Promise<PasswordSignResult> {
  const key = getFirebaseWebApiKey();
  const res = await fetch(`${IDENTITY}/accounts:signInWithPassword?key=${encodeURIComponent(key)}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password, returnSecureToken: true }),
  });
  const data = (await res.json()) as { error?: { message?: string } } & PasswordSignResult;
  if (!res.ok) {
    throw new IdentityToolkitError(data?.error?.message || "UNKNOWN_ERROR");
  }
  return data;
}

export async function signUpWithPassword(email: string, password: string): Promise<PasswordSignResult> {
  const key = getFirebaseWebApiKey();
  const res = await fetch(`${IDENTITY}/accounts:signUp?key=${encodeURIComponent(key)}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password, returnSecureToken: true }),
  });
  const data = (await res.json()) as { error?: { message?: string } } & PasswordSignResult;
  if (!res.ok) {
    throw new IdentityToolkitError(data?.error?.message || "UNKNOWN_ERROR");
  }
  return data;
}

export async function updateProfileDisplayName(idToken: string, displayName: string): Promise<PasswordSignResult> {
  const key = getFirebaseWebApiKey();
  const res = await fetch(`${IDENTITY}/accounts:update?key=${encodeURIComponent(key)}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ idToken, displayName, returnSecureToken: true }),
  });
  const data = (await res.json()) as { error?: { message?: string } } & PasswordSignResult;
  if (!res.ok) {
    throw new IdentityToolkitError(data?.error?.message || "UNKNOWN_ERROR");
  }
  return data;
}

export async function refreshIdToken(refreshToken: string): Promise<{
  id_token: string;
  refresh_token: string;
  expires_in: string;
}> {
  const key = getFirebaseWebApiKey();
  const body = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: refreshToken,
  });
  const res = await fetch(`${SECURE_TOKEN}/token?key=${encodeURIComponent(key)}`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
  });
  const data = (await res.json()) as { error?: { message?: string }; id_token?: string; refresh_token?: string; expires_in?: string };
  if (!res.ok || !data.id_token) {
    throw new IdentityToolkitError(data?.error?.message || "UNKNOWN_ERROR");
  }
  return {
    id_token: data.id_token,
    refresh_token: data.refresh_token || refreshToken,
    expires_in: data.expires_in || "3600",
  };
}

export async function sendPasswordResetEmail(email: string): Promise<void> {
  const key = getFirebaseWebApiKey();
  const res = await fetch(`${IDENTITY}/accounts:sendOobCode?key=${encodeURIComponent(key)}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ requestType: "PASSWORD_RESET", email }),
  });
  const data = (await res.json()) as { error?: { message?: string } };
  if (!res.ok) {
    throw new IdentityToolkitError(data?.error?.message || "UNKNOWN_ERROR");
  }
}

/** Map Identity Toolkit `error.message` strings to user-facing text. */
export function toolkitMessageToUserMessage(code: string): string {
  switch (code) {
    case "EMAIL_NOT_FOUND":
    case "INVALID_EMAIL":
      return "No account found with this email address.";
    case "INVALID_PASSWORD":
    case "INVALID_LOGIN_CREDENTIALS":
    case "INVALID_CREDENTIAL":
      return "Invalid email or password.";
    case "EMAIL_EXISTS":
      return "An account with this email already exists. Please sign in instead.";
    case "WEAK_PASSWORD":
      return "Password should be at least 6 characters.";
    case "USER_DISABLED":
      return "This account has been disabled.";
    case "TOO_MANY_ATTEMPTS_TRY_LATER":
      return "Too many failed attempts. Please try again later.";
    case "OPERATION_NOT_ALLOWED":
      return "Email/password sign-in is not enabled for this project.";
    default:
      return "Sign-in failed. Please try again.";
  }
}
