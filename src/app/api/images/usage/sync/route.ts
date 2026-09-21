import { NextRequest, NextResponse } from "next/server";
import { requireImageLibraryAdmin } from "../../../../../lib/image-library-admin";
import {
  IMAGE_USAGE_TYPES,
  type ImageUsageType,
  syncUsagesForReference,
} from "../../../../../lib/image-library-usage";
import { imageLibraryErrorResponse } from "../../../../../lib/image-library-db";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const auth = await requireImageLibraryAdmin();
  if (auth.error) return auth.error;

  try {
    const body = (await request.json()) as {
      refSlug?: string;
      refPath?: string;
      replaceUsageTypes?: string[];
      entries?: { mediaUrl: string; usageType: string }[];
    };

    const refSlug = body.refSlug?.trim();
    if (!refSlug) {
      return NextResponse.json({ error: "refSlug is required" }, { status: 400 });
    }

    const replaceUsageTypes = (body.replaceUsageTypes ?? []).filter((t): t is ImageUsageType =>
      (IMAGE_USAGE_TYPES as readonly string[]).includes(t)
    );
    if (replaceUsageTypes.length === 0) {
      return NextResponse.json({ error: "replaceUsageTypes is required" }, { status: 400 });
    }

    const entries = (body.entries ?? []).filter(
      (e) =>
        e.mediaUrl?.includes("/media/") &&
        (IMAGE_USAGE_TYPES as readonly string[]).includes(e.usageType)
    ) as { mediaUrl: string; usageType: ImageUsageType }[];

    const result = await syncUsagesForReference({
      refSlug,
      refPath: body.refPath?.trim() ?? "",
      replaceUsageTypes,
      entries,
    });

    return NextResponse.json({ ok: true, ...result });
  } catch (e) {
    console.error("POST /api/images/usage/sync:", e);
    const { status, error } = imageLibraryErrorResponse(e);
    return NextResponse.json({ error }, { status });
  }
}
