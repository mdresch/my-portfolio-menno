import { Prisma } from "@prisma/client";
import { prisma } from "./prisma";
import { storageUsesBlob } from "./image-library-storage";

const MIGRATION_HINT =
  "Image library tables are missing. Run: npx prisma migrate deploy (or npx prisma migrate dev locally).";

export function isImageLibrarySchemaError(e: unknown): boolean {
  if (e instanceof Prisma.PrismaClientKnownRequestError) {
    return e.code === "P2021" || e.code === "P2022";
  }
  if (e instanceof Error) {
    return /ImageAsset|does not exist|relation/i.test(e.message);
  }
  return false;
}

export function imageLibraryErrorResponse(e: unknown): { status: number; error: string } {
  if (isImageLibrarySchemaError(e)) {
    return { status: 503, error: MIGRATION_HINT };
  }
  const message = e instanceof Error ? e.message : "Image library error";
  return { status: 500, error: message };
}

export async function isImageLibraryReady(): Promise<boolean> {
  try {
    await prisma.imageAsset.findFirst({ select: { id: true }, take: 1 });
    return true;
  } catch (e) {
    if (isImageLibrarySchemaError(e)) return false;
    throw e;
  }
}

export async function getImageLibrarySetupStatus(): Promise<{
  ready: boolean;
  storageMode: "blob" | "local";
  migrationHint: string | null;
}> {
  const ready = await isImageLibraryReady();
  return {
    ready,
    storageMode: storageUsesBlob() ? "blob" : "local",
    migrationHint: ready ? null : MIGRATION_HINT,
  };
}
