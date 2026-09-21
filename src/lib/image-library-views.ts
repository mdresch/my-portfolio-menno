import { prisma } from "./prisma";
import { isBotUserAgent } from "./image-library-bot";

export type LogImageViewInput = {
  imageId: string;
  referrer?: string | null;
  path?: string | null;
  userAgent?: string | null;
};

function truncate(s: string | null | undefined, max: number): string | null {
  if (!s) return null;
  return s.length <= max ? s : s.slice(0, max);
}

function referrerPath(referrer: string | null | undefined): string | null {
  if (!referrer) return null;
  try {
    const u = new URL(referrer);
    return u.pathname || null;
  } catch {
    return null;
  }
}

/** Fire-and-forget view log; never throw to caller. */
export function logImageView(input: LogImageViewInput): void {
  const referrer = truncate(input.referrer, 2048);
  const userAgent = truncate(input.userAgent, 512);
  const path = truncate(input.path ?? referrerPath(referrer), 512);
  const isBot = isBotUserAgent(userAgent);

  void prisma.imageView
    .create({
      data: {
        imageId: input.imageId,
        referrer,
        path,
        userAgent,
        isBot,
      },
    })
    .catch((err) => {
      console.error("logImageView:", err);
    });
}
