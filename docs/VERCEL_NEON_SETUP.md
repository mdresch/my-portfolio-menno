# 🚀 Vercel + Neon PostgreSQL Setup Guide

This guide will help you configure your Vercel deployment to use Neon PostgreSQL for the projects database.

## 📋 Prerequisites

- ✅ Vercel account (https://vercel.com)
- ✅ Neon account (https://neon.tech)
- ✅ Your Neon PostgreSQL connection string
- ✅ Access to your Vercel project dashboard

---

## 🔧 Step 1: Get Your Neon Connection String

### Option A: Using Neon Pooler (Recommended for Vercel)

1. Log in to [Neon Console](https://console.neon.tech)
2. Select your project
3. Go to **Connection Details** or **Dashboard**
4. Copy the **Connection Pooling** connection string
   - Format: `postgresql://username:password@ep-xxx-xxx-pooler.region.aws.neon.tech/dbname?sslmode=require`
   - **Important:** Use the pooler connection string (not direct connection) for better performance on Vercel

### Option B: Direct Connection (If Pooler Not Available)

1. Use the direct connection string from Neon
2. Format: `postgresql://username:password@ep-xxx-xxx.region.aws.neon.tech/dbname?sslmode=require`

### Connection String Parameters

For Neon, ensure your connection string includes:
- `sslmode=require` - Required for secure connections
- `channel_binding=require` - Optional, but recommended for pooler connections

**Example Connection String:**
```
postgresql://neondb_owner:npg_6T4HAmIRGDct@ep-crimson-brook-a9nl7ha6-pooler.gwc.azure.neon.tech/neondb?sslmode=require&channel_binding=require
```

---

## 🔐 Step 2: Configure Environment Variables in Vercel

### Method 1: Via Vercel Dashboard (Recommended)

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the following environment variables:

#### Required Variables

| Variable Name | Value | Environments | Description |
|--------------|-------|--------------|-------------|
| `DATABASE_URL` | `postgresql://...` | Production, Preview, Development | Your Neon PostgreSQL connection string |

**Steps:**
1. Click **Add New**
2. **Key:** `DATABASE_URL`
3. **Value:** Paste your Neon connection string
4. **Environments:** Select all (Production, Preview, Development)
5. Click **Save**

#### Optional Variables (If Needed)

| Variable Name | Value | Environments | Description |
|--------------|-------|--------------|-------------|
| `NEXT_PUBLIC_API_BASE_URL` | `https://your-domain.vercel.app/api` | Production | API base URL (if using separate API) |
| `NODE_ENV` | `production` | Production | Node environment (auto-set by Vercel) |

### Method 2: Via Vercel CLI

```bash
# Install Vercel CLI if not already installed
npm install -g vercel

# Login to Vercel
vercel login

# Link your project (if not already linked)
vercel link

# Add environment variable
vercel env add DATABASE_URL production
# Paste your connection string when prompted

# Add for preview and development environments
vercel env add DATABASE_URL preview
vercel env add DATABASE_URL development
```

---

## 🏗️ Step 3: Verify Vercel Build Configuration

### Check `vercel.json`

Your `vercel.json` should include:

```json
{
  "framework": "nextjs",
  "buildCommand": "npx prisma generate && npx prisma migrate deploy && npm run build",
  "installCommand": "npm install",
  "devCommand": "npm run dev",
  "regions": ["iad1"],
  "functions": {
    "src/app/api/**/*.ts": {
      "maxDuration": 30
    }
  }
}
```

**Key Points:**
- ✅ `buildCommand` includes Prisma client generation and migrations
- ✅ `migrate deploy` runs migrations automatically on each deployment
- ✅ API routes have 30-second timeout (sufficient for database operations)

### Verify `package.json` Scripts

Ensure these scripts exist:

```json
{
  "scripts": {
    "postinstall": "npx prisma generate",
    "build:vercel": "npx prisma generate && npx prisma migrate deploy && next build",
    "deploy:db": "npx prisma migrate deploy"
  }
}
```

---

## 🧪 Step 4: Test Database Connection

### Before Deploying

1. **Test locally with Neon connection string:**
   ```bash
   # Set environment variable locally
   export DATABASE_URL="your-neon-connection-string"
   
   # Test connection
   npm run test:db
   
   # Run migrations
   npx prisma migrate deploy
   
   # Test CRUD operations
   npm run test:db:crud
   ```

2. **Verify Prisma Client generation:**
   ```bash
   npx prisma generate
   ```

### After Deploying to Vercel

1. Check Vercel deployment logs for:
   - ✅ Prisma client generation success
   - ✅ Database migrations applied
   - ✅ No connection errors

2. Test the API endpoint:
   ```bash
   curl https://your-project.vercel.app/api/projects
   ```

---

## 🚨 Troubleshooting

### Issue: "Can't reach database server"

**Solutions:**
1. Verify `DATABASE_URL` is set correctly in Vercel
2. Check if you're using the pooler connection string (recommended)
3. Ensure `sslmode=require` is in the connection string
4. Verify Neon project is active and not paused

### Issue: "Migration failed"

**Solutions:**
1. Check Vercel build logs for specific error
2. Ensure migrations are up to date locally:
   ```bash
   npx prisma migrate status
   ```
3. Run migrations manually if needed:
   ```bash
   npx prisma migrate deploy
   ```

### Issue: "Prisma Client not generated"

**Solutions:**
1. Verify `postinstall` script runs: `npx prisma generate`
2. Check `vercel.json` build command includes Prisma generation
3. Ensure `@prisma/client` is in `package.json` dependencies

### Issue: "Connection timeout"

**Solutions:**
1. Use Neon pooler connection (better for serverless)
2. Increase function timeout in `vercel.json` if needed
3. Check Neon project limits and upgrade if necessary

---

## ✅ Verification Checklist

Before going live, verify:

- [ ] `DATABASE_URL` is set in Vercel for all environments
- [ ] Connection string uses pooler endpoint (recommended)
- [ ] Connection string includes `sslmode=require`
- [ ] `vercel.json` has correct build command
- [ ] `package.json` has `postinstall` script
- [ ] Local database connection test passes
- [ ] Migrations run successfully in Vercel build logs
- [ ] API endpoint `/api/projects` returns data (or empty array)

---

## 🔄 Deployment Workflow

### Automatic Deployment (Recommended)

1. Push to your main branch
2. Vercel automatically:
   - Installs dependencies
   - Runs `postinstall` (generates Prisma client)
   - Runs `buildCommand` (migrations + build)
   - Deploys to production

### Manual Deployment

```bash
# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate deploy

# Build and deploy
vercel --prod
```

---

## 📊 Monitoring

### Check Database Connection in Vercel

1. Go to **Deployments** → Select latest deployment
2. Check **Build Logs** for:
   - `Prisma Client generated`
   - `All migrations have been applied`
   - No database connection errors

### Monitor Neon Dashboard

1. Log in to [Neon Console](https://console.neon.tech)
2. Check:
   - Connection metrics
   - Query performance
   - Database size
   - Active connections

---

## 🔒 Security Best Practices

1. **Never commit connection strings** to Git
2. **Use different databases** for Production, Preview, and Development
3. **Rotate passwords** regularly in Neon
4. **Use connection pooling** for better performance
5. **Enable SSL** (`sslmode=require`) always
6. **Restrict IP access** in Neon if possible (Vercel IPs are dynamic)

---

## 📝 Quick Reference

### Connection String Format
```
postgresql://[user]:[password]@[host]:[port]/[database]?sslmode=require&channel_binding=require
```

### Vercel Environment Variables
- **Production:** Used for production deployments
- **Preview:** Used for pull request previews
- **Development:** Used for `vercel dev` local development

### Important Commands
```bash
# Test database connection
npm run test:db

# Run migrations
npx prisma migrate deploy

# Generate Prisma client
npx prisma generate

# View database in browser
npx prisma studio
```

---

## 🆘 Support

If you encounter issues:

1. Check Vercel deployment logs
2. Check Neon dashboard for connection issues
3. Review Prisma migration status
4. Test connection locally with same connection string
5. Contact support:
   - Vercel: https://vercel.com/support
   - Neon: https://neon.tech/docs

---

**Last Updated:** January 2025  
**Project:** my-portfolio-menno

