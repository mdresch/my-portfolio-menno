# Vercel Environment Variables Setup Script (PowerShell)
# This script helps you set up environment variables in Vercel for Neon PostgreSQL

param(
    [string]$DatabaseUrl = ""
)

Write-Host "🚀 Vercel + Neon PostgreSQL Environment Setup" -ForegroundColor Blue
Write-Host "==============================================" -ForegroundColor Blue
Write-Host ""

# Check if Vercel CLI is installed
try {
    $vercelVersion = vercel --version 2>$null
    Write-Host "✅ Vercel CLI found: $vercelVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Vercel CLI is not installed." -ForegroundColor Red
    Write-Host "Install it with: npm install -g vercel" -ForegroundColor Yellow
    exit 1
}

# Check if user is logged in
try {
    $whoami = vercel whoami 2>$null
    Write-Host "✅ Logged in as: $whoami" -ForegroundColor Green
} catch {
    Write-Host "⚠️  Not logged in to Vercel. Please log in:" -ForegroundColor Yellow
    vercel login
}

# Check if project is linked
if (-not (Test-Path ".vercel/project.json")) {
    Write-Host "⚠️  Project not linked to Vercel. Linking now..." -ForegroundColor Yellow
    vercel link
}

Write-Host "✅ Project linked to Vercel" -ForegroundColor Green

# Get DATABASE_URL if not provided
if ([string]::IsNullOrEmpty($DatabaseUrl)) {
    Write-Host ""
    Write-Host "ℹ️  Enter your Neon PostgreSQL connection string:" -ForegroundColor Blue
    Write-Host "Format: postgresql://user:password@host:port/database?sslmode=require" -ForegroundColor Blue
    Write-Host "Use the pooler connection string for better performance on Vercel" -ForegroundColor Blue
    Write-Host ""
    $DatabaseUrl = Read-Host "DATABASE_URL"
}

if ([string]::IsNullOrEmpty($DatabaseUrl)) {
    Write-Host "❌ DATABASE_URL cannot be empty!" -ForegroundColor Red
    exit 1
}

# Validate connection string format
if (-not $DatabaseUrl.StartsWith("postgresql://")) {
    Write-Host "❌ Invalid connection string format. Must start with 'postgresql://'" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Connection string format validated" -ForegroundColor Green

# Ask which environments to set
Write-Host ""
Write-Host "ℹ️  Which environments should this variable be set for?" -ForegroundColor Blue
Write-Host "1) Production only"
Write-Host "2) Preview only"
Write-Host "3) Development only"
Write-Host "4) All environments (Recommended)"
$envChoice = Read-Host "Choice [1-4] (default: 4)"
if ([string]::IsNullOrEmpty($envChoice)) { $envChoice = "4" }

# Set environment variables
Write-Host ""
Write-Host "ℹ️  Setting DATABASE_URL in Vercel..." -ForegroundColor Blue

switch ($envChoice) {
    "1" {
        $DatabaseUrl | vercel env add DATABASE_URL production
        Write-Host "✅ Set for Production environment" -ForegroundColor Green
    }
    "2" {
        $DatabaseUrl | vercel env add DATABASE_URL preview
        Write-Host "✅ Set for Preview environment" -ForegroundColor Green
    }
    "3" {
        $DatabaseUrl | vercel env add DATABASE_URL development
        Write-Host "✅ Set for Development environment" -ForegroundColor Green
    }
    "4" {
        $DatabaseUrl | vercel env add DATABASE_URL production
        $DatabaseUrl | vercel env add DATABASE_URL preview
        $DatabaseUrl | vercel env add DATABASE_URL development
        Write-Host "✅ Set for all environments (Production, Preview, Development)" -ForegroundColor Green
    }
    default {
        Write-Host "❌ Invalid choice" -ForegroundColor Red
        exit 1
    }
}

Write-Host ""
Write-Host "✅ Environment variables configured successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "ℹ️  Next steps:" -ForegroundColor Blue
Write-Host "1. Verify variables in Vercel dashboard: Project → Settings → Environment Variables"
Write-Host "2. Redeploy your project to apply changes"
Write-Host "3. Check deployment logs to verify database connection"
Write-Host "4. Test API endpoint: https://your-project.vercel.app/api/projects"
Write-Host ""

