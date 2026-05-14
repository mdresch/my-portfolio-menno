import { PrismaClient } from "@prisma/client";

/** After DB migrations that change columns, run `npx prisma generate` (or restart `pnpm dev`, which runs generate first). */
const globalForPrisma = global as unknown as { prisma: PrismaClient };

const logLevels: ("query" | "info" | "warn" | "error")[] =
  process.env.NODE_ENV === "development" && process.env.PRISMA_LOG_QUERIES === "1"
    ? ["query", "warn", "error"]
    : ["warn", "error"];

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: logLevels,
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
