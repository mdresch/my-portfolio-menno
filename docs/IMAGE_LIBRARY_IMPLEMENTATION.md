# Image Library — Implementation Checklist

**Status:** Phase 1 complete (run migration on each environment)  
**Last updated:** 2026-05-19  
**Canonical URLs:** `/media/{slug}` (tracked) · Admin: `/admin/images`

---

## Phase 1 — Foundation

| # | Task | Status | Notes |
|---|------|--------|-------|
| 1.1 | Prisma `ImageAsset` + `ImageView` models | ✅ | `prisma/schema.prisma` |
| 1.2 | Database migration | ✅ | `npm run db:migrate` or `npx prisma migrate deploy` |
| 1.3 | `@vercel/blob` + local filesystem fallback | ✅ | `src/lib/image-library-storage.ts` |
| 1.4 | Admin auth helper (`IMAGE_LIBRARY_ADMIN_EMAILS`) | ✅ | `src/lib/image-library-admin.ts` |
| 1.5 | `POST /api/images/upload` | ✅ | Multipart, 10 MB, jpeg/png/webp/gif |
| 1.6 | `GET /api/images` (list, include deleted filter) | ✅ | Admin only |
| 1.7 | `GET/PATCH/DELETE /api/images/[id]` | ✅ | DELETE = soft delete |
| 1.8 | `GET /media/[slug]` serve + view logging | ✅ | 404 if soft-deleted |
| 1.9 | Admin UI `/admin/images` | ✅ | Upload, grid, edit metadata, soft delete, copy URL |
| 1.10 | Admin hub quick action | ✅ | `/admin` |
| 1.11 | Env docs (`.env.example`) | ✅ | `BLOB_READ_WRITE_TOKEN`, admin emails |
| 1.12 | `.gitignore` local storage path | ✅ | `data/image-library/` |
| 1.13 | Setup status API + admin migration banner | ✅ | `GET /api/images/setup` |
| 1.14 | Upload rollback on storage failure | ✅ | Deletes DB row if blob/disk write fails |

**Phase 1 exit criteria:** Upload an image in admin → copy `/media/{slug}` → open URL in browser → see view row in DB.

### Phase 1 setup (local or Vercel)

1. Set `DATABASE_URL` and run `npm run db:migrate`.
2. Sign in at `/admin/login` with an email listed in `IMAGE_LIBRARY_ADMIN_EMAILS` (or `JOURNEY_CHAT_ADMIN_EMAILS`).
3. Open `/admin/images` — confirm **database ready** in the header.
4. Upload an image, copy **URL** or **Cover**, open `/media/{slug}` in a new tab.
5. Verify a row in `ImageView` (Prisma Studio: `npx prisma studio`).

**Production:** add `BLOB_READ_WRITE_TOKEN` in Vercel for Blob storage; without it, uploads use `data/image-library/` (not suitable for serverless production).

---

## Phase 2 — Discovery & integration

| # | Task | Status | Notes |
|---|------|--------|-------|
| 2.1 | Public browse page `/library` | ✅ | Tag filter, search · `GET /api/library` |
| 2.2 | `ImageUsage` model + registration API | ✅ | `POST /api/images/usage/sync` · `GET /api/images/:id/usage` |
| 2.3 | Image picker component | ✅ | `ImageLibraryPicker` + `ImageLibraryField` |
| 2.4 | Blog admin cover + insert | ✅ | `BlogPostImageTools` on new/edit post |
| 2.5 | `ProjectForm` screenshot picker | ✅ | Library field + “Add from library” |
| 2.6 | “Where used” from markdown scan | ✅ | `npm run index:image-usages` + on-save sync |

---

## Phase 3 — Analytics dashboard

| # | Task | Status | Notes |
|---|------|--------|-------|
| 3.1 | `ImageViewDaily` rollup model | ⬜ | Cron / Vercel Cron |
| 3.2 | Rollup job route | ⬜ | `POST /api/images/rollup` |
| 3.3 | `/admin/images/analytics` dashboard | ⬜ | Chart.js |
| 3.4 | Top images / views over time | ⬜ | |
| 3.5 | Top referrers | ⬜ | From `ImageView.referrer` |
| 3.6 | Unused images report | ⬜ | No views + no usage |
| 3.7 | Bot filtering tuning | ⬜ | `isBot` flag |

---

## Phase 4 — Migration & hardening

| # | Task | Status | Notes |
|---|------|--------|-------|
| 4.1 | Import script `public/images/*` → library | ⬜ | `scripts/migrate-public-images.mjs` |
| 4.2 | Legacy redirect `/images/*` → `/media/{slug}` | ⬜ | Middleware or redirect map table |
| 4.3 | Rewrite blog `coverImage` paths | ⬜ | Optional batch |
| 4.4 | Rate limit on `/media/[slug]` | ⬜ | |
| 4.5 | Purge job for hard-delete + blob removal | ⬜ | After retention period |
| 4.6 | `next.config` remotePatterns for blob host | ⬜ | If using `<Image>` on blob URLs |

---

## Environment variables

| Variable | Required | Purpose |
|----------|----------|---------|
| `DATABASE_URL` | Yes | Neon Postgres |
| `BLOB_READ_WRITE_TOKEN` | Prod upload | Vercel Blob; omit for local `data/image-library/` |
| `IMAGE_LIBRARY_ADMIN_EMAILS` | Yes (admin APIs) | Comma-separated Firebase login emails |
| `JOURNEY_CHAT_ADMIN_EMAILS` | Fallback | Used if image library list empty |

---

## API reference (Phase 1)

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| GET | `/api/images/setup` | Admin | Migration + storage mode readiness |
| GET | `/api/images` | Admin | List assets (`?includeDeleted=1`) |
| POST | `/api/images/upload` | Admin | `multipart/form-data` field `file` |
| GET | `/api/images/:id` | Admin | Single asset |
| PATCH | `/api/images/:id` | Admin | Metadata / restore (`deletedAt: null`) |
| DELETE | `/api/images/:id` | Admin | Soft delete |
| GET | `/media/:slug` | Public | Serve file + log view |
| GET | `/api/library` | Public | Browse catalog (`?q=` `?tag=`) |
| POST | `/api/images/usage/sync` | Admin | Replace usage rows for a ref |
| GET | `/api/images/:id/usage` | Admin | Where-used list for one asset |

**Phase 2 setup:** run `npm run db:migrate` (applies `20260519180000_image_usage`), then optionally `npm run index:image-usages` to backfill blog references.

---

## Related docs

- [IMAGE_LIBRARY_IMPLEMENTATION.md](./IMAGE_LIBRARY_IMPLEMENTATION.md) (this file)
- [INDEX.md](./INDEX.md)
