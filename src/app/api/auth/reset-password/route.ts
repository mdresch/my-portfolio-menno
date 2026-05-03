import { NextRequest, NextResponse } from "next/server";
import { IdentityToolkitError, sendPasswordResetEmail, toolkitMessageToUserMessage } from "../../../../lib/firebase-identity-rest";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as { email?: string };
    const email = String(body.email ?? "").trim();
    if (!email) {
      return NextResponse.json({ error: "Email is required." }, { status: 400 });
    }
    await sendPasswordResetEmail(email);
    return NextResponse.json({ ok: true });
  } catch (e) {
    if (e instanceof IdentityToolkitError) {
      return NextResponse.json({ error: toolkitMessageToUserMessage(e.toolkitCode) }, { status: 400 });
    }
    return NextResponse.json({ error: "Could not send reset email." }, { status: 500 });
  }
}
