import { NextResponse } from "next/server";
import {
  isImageLibraryAdmin,
  requireImageLibraryAdmin,
} from "../../../../lib/image-library-admin";
import { getImageLibrarySetupStatus } from "../../../../lib/image-library-db";

export const dynamic = "force-dynamic";

/** Admin: DB migration + storage mode readiness for the image library. */
export async function GET() {
  const auth = await requireImageLibraryAdmin();
  if (auth.error) return auth.error;

  try {
    const setup = await getImageLibrarySetupStatus();
    return NextResponse.json({
      ...setup,
      adminAuthorized: isImageLibraryAdmin(auth.user.email),
    });
  } catch (e) {
    console.error("GET /api/images/setup:", e);
    return NextResponse.json({ error: "Failed to read setup status" }, { status: 500 });
  }
}
