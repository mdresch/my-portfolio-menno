# 🚀 Vercel CLI Setup Guide - Quick Commands

This guide provides the exact commands to set up your Neon PostgreSQL database connection in Vercel using the CLI.

## 🔐 Step 1: Login to Vercel

```bash
vercel login
```

This will open your browser to authenticate. Follow the prompts.

---

## 🔗 Step 2: Link Your Project (if not already linked)

```bash
vercel link
```

You'll be prompted to:
- Select or create a Vercel project
- Choose your Git repository
- Select framework (Next.js)

---

## 📋 Step 3: Check Current Environment Variables

```bash
vercel env ls
```

This shows all current environment variables for your project.

---

## ➕ Step 4: Add DATABASE_URL Environment Variable

### Get Your Neon Connection String

1. Go to [Neon Console](https://console.neon.tech)
2. Select your project
3. Copy the **pooler connection string** (recommended)
4. Format should be: `postgresql://user:password@ep-xxx-pooler.region.aws.neon.tech/dbname?sslmode=require`

### Add to Vercel

**For Production:**
```bash
vercel env add DATABASE_URL production
# Paste your connection string when prompted
# Press Enter
```

**For Preview:**
```bash
vercel env add DATABASE_URL preview
# Paste your connection string when prompted
# Press Enter
```

**For Development:**
```bash
vercel env add DATABASE_URL development
# Paste your connection string when prompted
# Press Enter
```

### Alternative: Add All at Once

You can also pipe the connection string:

```bash
# Set for Production
echo "postgresql://your-connection-string" | vercel env add DATABASE_URL production

# Set for Preview
echo "postgresql://your-connection-string" | vercel env add DATABASE_URL preview

# Set for Development
echo "postgresql://your-connection-string" | vercel env add DATABASE_URL development
```

---

## ✅ Step 5: Verify Environment Variables

```bash
vercel env ls
```

You should see `DATABASE_URL` listed for all three environments.

---

## 🚀 Step 6: Redeploy

After setting environment variables, redeploy your project:

```bash
vercel --prod
```

Or trigger a new deployment by pushing to your Git repository.

---

## 🔍 Step 7: Verify Deployment

1. Check build logs in Vercel dashboard
2. Look for:
   - ✅ "Prisma Client generated"
   - ✅ "All migrations have been applied"
   - ✅ No database connection errors

3. Test API endpoint:
```bash
curl https://your-project.vercel.app/api/projects
```

---

## 📝 Quick Reference Commands

```bash
# Login
vercel login

# Link project
vercel link

# List environment variables
vercel env ls

# Add environment variable
vercel env add DATABASE_URL production

# Remove environment variable (if needed)
vercel env rm DATABASE_URL production

# Deploy to production
vercel --prod

# View project info
vercel inspect

# View deployment logs
vercel logs
```

---

## 🐛 Troubleshooting

### "No existing credentials found"
```bash
vercel login
```

### "Project not linked"
```bash
vercel link
```

### "Invalid token"
```bash
vercel logout
vercel login
```

### Check if project is linked
```bash
ls .vercel/project.json
# If file exists, project is linked
```

---

## 💡 Pro Tips

1. **Use pooler connection string** for better performance on Vercel
2. **Set for all environments** (Production, Preview, Development)
3. **Test locally first** with the same connection string
4. **Monitor Neon dashboard** for connection metrics
5. **Use different databases** for Production vs Preview/Development if possible

---

**Ready to set up?** Run `vercel login` first, then follow the steps above!

