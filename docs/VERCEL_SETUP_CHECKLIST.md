# ✅ Vercel + Neon PostgreSQL Setup Checklist

Use this checklist to ensure your Vercel deployment is properly configured for Neon PostgreSQL.

## 📋 Pre-Deployment Checklist

### 1. Neon Database Setup
- [ ] Created Neon account at https://neon.tech
- [ ] Created a new project in Neon
- [ ] Copied the **pooler connection string** (recommended for Vercel)
- [ ] Verified connection string includes `sslmode=require`
- [ ] Tested connection locally with `npm run test:db`

### 2. Vercel Environment Variables
- [ ] Logged into Vercel dashboard
- [ ] Navigated to: Project → Settings → Environment Variables
- [ ] Added `DATABASE_URL` with Neon connection string
- [ ] Set for **Production** environment
- [ ] Set for **Preview** environment
- [ ] Set for **Development** environment
- [ ] Verified connection string is correct (no typos)

### 3. Vercel Configuration Files
- [ ] `vercel.json` exists and has correct build command
- [ ] Build command includes: `npx prisma generate && npx prisma migrate deploy`
- [ ] `package.json` has `postinstall` script: `npx prisma generate`
- [ ] API routes have appropriate timeout (30 seconds)

### 4. Database Migrations
- [ ] Migrations are up to date locally
- [ ] Ran `npx prisma migrate status` to verify
- [ ] Migration files are committed to Git
- [ ] `prisma/migrations` folder exists

### 5. Prisma Configuration
- [ ] `prisma/schema.prisma` uses PostgreSQL provider
- [ ] `DATABASE_URL` is referenced in schema
- [ ] Prisma client generates successfully: `npx prisma generate`

---

## 🚀 Deployment Checklist

### Before First Deployment
- [ ] All environment variables are set in Vercel
- [ ] Local database connection test passes
- [ ] Code is pushed to Git repository
- [ ] Vercel project is linked to Git repository

### During Deployment
- [ ] Monitor Vercel build logs
- [ ] Verify "Prisma Client generated" message appears
- [ ] Verify "All migrations have been applied" message appears
- [ ] No database connection errors in logs

### After Deployment
- [ ] Deployment completed successfully
- [ ] Test API endpoint: `https://your-project.vercel.app/api/projects`
- [ ] Verify response is JSON (even if empty array)
- [ ] Check Vercel function logs for errors
- [ ] Monitor Neon dashboard for connections

---

## 🔍 Verification Steps

### 1. Check Environment Variables
```bash
# Via CLI
vercel env ls

# Via Dashboard
# Go to: Project → Settings → Environment Variables
```

### 2. Test Database Connection
```bash
# Set DATABASE_URL locally
export DATABASE_URL="your-neon-connection-string"

# Test connection
npm run test:db

# Test CRUD operations
npm run test:db:crud
```

### 3. Verify API Endpoint
```bash
# Test production API
curl https://your-project.vercel.app/api/projects

# Should return JSON (empty array if no projects)
```

### 4. Check Build Logs
- Go to: Vercel Dashboard → Deployments → Latest
- Look for:
  - ✅ "Prisma Client generated"
  - ✅ "All migrations have been applied"
  - ✅ No connection errors

---

## 🐛 Troubleshooting Checklist

If deployment fails:

- [ ] Check Vercel build logs for specific error
- [ ] Verify `DATABASE_URL` is set correctly
- [ ] Ensure connection string uses pooler endpoint
- [ ] Verify `sslmode=require` is in connection string
- [ ] Check Neon dashboard - project is active
- [ ] Test connection locally with same connection string
- [ ] Verify Prisma migrations are up to date
- [ ] Check `vercel.json` build command is correct

---

## 📝 Quick Commands Reference

```bash
# Test database connection
npm run test:db

# Run migrations
npx prisma migrate deploy

# Generate Prisma client
npx prisma generate

# View database in browser
npx prisma studio

# Check migration status
npx prisma migrate status

# List Vercel environment variables
vercel env ls

# Add environment variable (via CLI)
vercel env add DATABASE_URL production
```

---

## 🔗 Useful Links

- **Vercel Dashboard:** https://vercel.com/dashboard
- **Neon Console:** https://console.neon.tech
- **Vercel Docs:** https://vercel.com/docs
- **Neon Docs:** https://neon.tech/docs
- **Prisma Docs:** https://www.prisma.io/docs

---

## 📚 Documentation Files

- **Full Setup Guide:** `docs/VERCEL_NEON_SETUP.md`
- **Environment Variables:** `docs/VERCEL_ENV_SETUP.md`
- **Database Review:** `docs/DATABASE_REVIEW.md`
- **Setup Scripts:** `scripts/setup-vercel-env.sh` (Unix) or `scripts/setup-vercel-env.ps1` (Windows)

---

**Last Updated:** January 2025  
**Status:** Ready for deployment ✅

