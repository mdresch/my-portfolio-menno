# 🔐 Vercel Environment Variables Setup - Quick Reference

## Required Environment Variables for Neon PostgreSQL

### 1. DATABASE_URL (REQUIRED)

**Purpose:** PostgreSQL connection string for Neon database

**Format:**
```
postgresql://username:password@host:port/database?sslmode=require&channel_binding=require
```

**Example (Neon Pooler - Recommended):**
```
postgresql://neondb_owner:npg_6T4HAmIRGDct@ep-crimson-brook-a9nl7ha6-pooler.gwc.azure.neon.tech/neondb?sslmode=require&channel_binding=require
```

**How to Set in Vercel:**

1. **Via Dashboard:**
   - Go to: Project → Settings → Environment Variables
   - Click "Add New"
   - Key: `DATABASE_URL`
   - Value: Your Neon connection string
   - Environments: Select **Production**, **Preview**, and **Development**
   - Click "Save"

2. **Via CLI:**
   ```bash
   vercel env add DATABASE_URL production
   vercel env add DATABASE_URL preview
   vercel env add DATABASE_URL development
   ```

**Important Notes:**
- ✅ Use **pooler connection string** for better performance on Vercel
- ✅ Always include `sslmode=require` for secure connections
- ✅ Set for all environments (Production, Preview, Development)
- ✅ Never commit connection strings to Git

---

## Optional Environment Variables

### 2. NEXT_PUBLIC_API_BASE_URL (Optional)

**Purpose:** Base URL for API endpoints (if using separate API)

**Format:**
```
https://your-domain.vercel.app/api
```

**When to Use:**
- If you have a separate API backend
- If you need to reference API URLs in client-side code

**How to Set:**
- Same process as `DATABASE_URL`
- Only needed if your app references this variable

---

## Environment-Specific Configuration

### Production Environment
- Use production Neon database
- Connection string should point to production database
- Set `NODE_ENV=production` (auto-set by Vercel)

### Preview Environment
- Can use same database or separate preview database
- Recommended: Use separate database for preview deployments
- Allows testing without affecting production data

### Development Environment
- Used for `vercel dev` local development
- Can use local database or separate dev database
- Recommended: Use local `.env.local` for development

---

## Verification Steps

### 1. Check Variables Are Set

**Via Dashboard:**
- Go to: Project → Settings → Environment Variables
- Verify `DATABASE_URL` appears for all environments

**Via CLI:**
```bash
vercel env ls
```

### 2. Test Connection

**After deployment:**
1. Check build logs for Prisma generation
2. Verify migrations run successfully
3. Test API endpoint: `https://your-project.vercel.app/api/projects`

### 3. Monitor Logs

**In Vercel Dashboard:**
- Go to: Deployments → Latest → Functions
- Check for database connection errors
- Verify API routes are working

---

## Common Issues & Solutions

### Issue: "DATABASE_URL is not defined"

**Solution:**
1. Verify variable is set in Vercel dashboard
2. Check environment scope (Production/Preview/Development)
3. Redeploy after adding variable

### Issue: "Connection refused"

**Solution:**
1. Verify connection string is correct
2. Check if using pooler endpoint (recommended)
3. Ensure `sslmode=require` is included
4. Verify Neon project is active

### Issue: "Migration failed"

**Solution:**
1. Check build logs for specific error
2. Verify migrations are up to date
3. Run `npx prisma migrate status` locally
4. Ensure Prisma client is generated

---

## Security Checklist

- [ ] Connection strings are NOT in Git
- [ ] Different databases for Production/Preview/Development
- [ ] Using SSL (`sslmode=require`)
- [ ] Using connection pooling (pooler endpoint)
- [ ] Database passwords are strong and rotated regularly
- [ ] Environment variables are scoped correctly

---

## Quick Setup Script

For quick setup, you can use this script:

```bash
#!/bin/bash
# Quick Vercel environment setup

echo "Setting up Vercel environment variables..."

# Add DATABASE_URL for all environments
read -p "Enter your Neon DATABASE_URL: " DB_URL

vercel env add DATABASE_URL production <<< "$DB_URL"
vercel env add DATABASE_URL preview <<< "$DB_URL"
vercel env add DATABASE_URL development <<< "$DB_URL"

echo "✅ Environment variables set successfully!"
echo "Redeploy your project to apply changes."
```

---

**Last Updated:** January 2025

