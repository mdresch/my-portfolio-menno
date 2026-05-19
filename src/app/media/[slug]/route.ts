import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";
import { logImageView } from "../../../lib/image-library-views";
import { readImageBytes } from "../../../lib/image-library-storage";

export const dynamic = "force-dynamic";

type RouteContext = { params: Promise<{ slug: string }> };

export async function GET(request: NextRequest, context: RouteContext) {
  const { slug: rawSlug } = await context.params;
  const slug = decodeURIComponent(rawSlug);

  try {
    const asset = await prisma.imageAsset.findUnique({ where: { slug } });
    if (!asset || asset.deletedAt) {
      return new NextResponse("Not found", { status: 404 });
    }

    logImageView({
      imageId: asset.id,
      referrer: request.headers.get("referer"),
      userAgent: request.headers.get("user-agent"),
    });

    if (asset.blobUrl) {
      return NextResponse.redirect(asset.blobUrl, {
        status: 308,
        headers: {
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      });
    }

    const { buffer, mimeType } = await readImageBytes(asset.storageKey, asset.blobUrl);
    const contentType = mimeType || asset.mimeType;

    return new NextResponse(new Uint8Array(buffer), {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Content-Length": String(buffer.length),
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (e) {
    console.error("GET /media/[slug]:", e);
    return new NextResponse("Failed to load image", { status: 500 });
  }
}
