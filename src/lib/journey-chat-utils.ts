/** Accepts standard `crypto.randomUUID()` (RFC 4122) strings. */
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export function isJourneyChatConversationId(id: string): boolean {
  return typeof id === "string" && UUID_RE.test(id.trim());
}

export function clampJourneyChatText(text: string, max = 4000): string {
  return text.trim().slice(0, max);
}

function firestoreErrorMessage(e: unknown): string {
  if (e && typeof e === "object" && "message" in e && typeof (e as { message: unknown }).message === "string") {
    return (e as { message: string }).message;
  }
  return String(e ?? "");
}

/**
 * Maps Firebase Admin / Firestore gRPC errors to HTTP status and a short UI message (API routes).
 */
export function mapJourneyChatFirestoreError(
  e: unknown,
  fallback: string
): { status: number; error: string } {
  const msg = firestoreErrorMessage(e);

  if (/SERVICE_DISABLED|Firestore API has not been used|API has not been used in project/i.test(msg)) {
    return {
      status: 503,
      error:
        "Firestore is not enabled for this Google Cloud project. Open Google Cloud Console, enable the Cloud Firestore API, create a Firestore database, wait a few minutes, then retry.",
    };
  }
  if (/NOT_FOUND|No database \(default\) exists|does not exist.*database/i.test(msg)) {
    return {
      status: 503,
      error:
        "No Firestore database found. Create a Cloud Firestore database (Firebase console or Google Cloud) for this project.",
    };
  }
  if (/PERMISSION_DENIED|Missing or insufficient permissions/i.test(msg)) {
    return {
      status: 503,
      error:
        "Firestore rejected this request. Check the service account has access to Firestore and that the project matches your credentials.",
    };
  }
  return { status: 500, error: fallback };
}
