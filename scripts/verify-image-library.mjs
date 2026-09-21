/**
 * Quick check: ImageAsset table exists and setup helpers work.
 * Run: node scripts/verify-image-library.mjs
 */
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

try {
  const count = await prisma.imageAsset.count();
  const views = await prisma.imageView.count();
  console.log(JSON.stringify({ ok: true, imageAssets: count, imageViews: views }, null, 2));
} catch (e) {
  console.error(
    JSON.stringify(
      {
        ok: false,
        code: e.code,
        message: e.message,
        hint: "Run: npm run db:migrate",
      },
      null,
      2
    )
  );
  process.exit(1);
} finally {
  await prisma.$disconnect();
}
