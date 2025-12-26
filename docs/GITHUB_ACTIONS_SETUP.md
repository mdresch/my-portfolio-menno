# GitHub Actions Setup Guide

This guide explains how to configure GitHub Actions secrets for automated deployments to Vercel.

## Required GitHub Secrets

To enable automated deployments via GitHub Actions, you need to configure the following secrets in your GitHub repository:

### 1. Navigate to Repository Settings

1. Go to your GitHub repository: `https://github.com/mdresch/my-portfolio-menno`
2. Click on **Settings** (top menu)
3. In the left sidebar, click **Secrets and variables** → **Actions**
4. Click **New repository secret** for each secret below

### 2. Required Secrets

#### `VERCEL_TOKEN` (Required for deployment)

**How to get it:**
1. Go to [Vercel Account Settings → Tokens](https://vercel.com/account/tokens)
2. Click **Create Token**
3. Give it a name (e.g., "GitHub Actions Deployment")
4. Set expiration (or leave as "No expiration")
5. Click **Create**
6. **Copy the token immediately** (you won't be able to see it again)
7. Paste it as the value for `VERCEL_TOKEN` in GitHub Secrets

**Note:** If you get "The specified token is not valid" error, your token may be expired or incorrect. Generate a new one.

#### `ORG_ID` (Required for deployment)

**How to get it:**
1. Run locally: `vercel link` (if not already linked)
2. Check `.vercel/project.json` file - it contains `orgId`
3. Or use Vercel CLI: `vercel inspect` (shows org ID)
4. Copy the `orgId` value and add it as `ORG_ID` secret

#### `PROJECT_ID` (Required for deployment)

**How to get it:**
1. Run locally: `vercel link` (if not already linked)
2. Check `.vercel/project.json` file - it contains `projectId`
3. Or use Vercel CLI: `vercel inspect` (shows project ID)
4. Copy the `projectId` value and add it as `PROJECT_ID` secret

#### `DATABASE_URL` (Required for build)

**How to get it:**
1. Go to your [Neon Console](https://console.neon.tech)
2. Select your database project
3. Go to **Connection Details**
4. Copy the **Connection String** (starts with `postgresql://...`)
5. Make sure it includes `?sslmode=require&channel_binding=require`
6. Add it as `DATABASE_URL` secret

**Format:**
```
postgresql://username:password@host:port/database?sslmode=require&channel_binding=require
```

### 3. Optional Secrets (for full functionality)

These are optional but recommended for complete functionality:

- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`
- `GOOGLE_CLOUD_PROJECT_ID` (for Genkit/Vertex AI features)

## Verification

After setting up secrets:

1. **Trigger a workflow run:**
   - Create a new PR, or
   - Push to `main`/`master` branch

2. **Check workflow status:**
   - Go to **Actions** tab in GitHub
   - Click on the latest workflow run
   - Verify all steps complete successfully

3. **Common issues:**
   - **"Invalid token"**: Regenerate `VERCEL_TOKEN`
   - **"DATABASE_URL is empty"**: Ensure secret is set correctly
   - **"Build fails"**: Check that all required secrets are set

## Quick Setup Script

You can also use the provided PowerShell script to help set up Vercel secrets:

```powershell
.\scripts\add-vercel-db-env.ps1
```

This script helps add `DATABASE_URL` to Vercel, but you still need to manually add GitHub secrets.

## Security Notes

- **Never commit secrets to the repository**
- Secrets are encrypted and only accessible during workflow runs
- Rotate tokens periodically for security
- Use different tokens for different environments if needed

## Troubleshooting

### "The specified token is not valid"

1. Verify the token exists in [Vercel Account Settings](https://vercel.com/account/tokens)
2. Check if the token has expired
3. Generate a new token and update the GitHub secret
4. Ensure there are no extra spaces or characters in the secret value

### "DATABASE_URL resolved to an empty string"

1. Verify `DATABASE_URL` secret is set in GitHub
2. Check the secret value doesn't have quotes around it
3. Ensure the connection string is complete and valid
4. Test the connection string locally first

### Build succeeds but deployment fails

1. Check that `VERCEL_TOKEN`, `ORG_ID`, and `PROJECT_ID` are all set
2. Verify the token has deployment permissions
3. Check Vercel project settings to ensure GitHub integration is enabled

