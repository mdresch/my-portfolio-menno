# Vercel Deployment Script for Portfolio with PostgreSQL (PowerShell)
param(
    [string]$DatabaseUrl = $env:DATABASE_URL
)

Write-Host "🚀 Starting Vercel deployment process..." -ForegroundColor Blue

# Check if Vercel CLI is installed
try {
    $vercelVersion = vercel --version 2>$null
    Write-Host "✅ Vercel CLI found: $vercelVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Vercel CLI is not installed. Installing now..." -ForegroundColor Red
    npm install -g vercel
}

# Check if user is logged in to Vercel
try {
    vercel whoami | Out-Null
    Write-Host "✅ Logged in to Vercel" -ForegroundColor Green
} catch {
    Write-Host "⚠️  Not logged in to Vercel. Please log in:" -ForegroundColor Yellow
    vercel login
}

# Check if DATABASE_URL is set
if (-not $DatabaseUrl) {
    Write-Host "❌ DATABASE_URL environment variable is not set!" -ForegroundColor Red
    Write-Host "Please set your PostgreSQL connection string:" -ForegroundColor Blue
    Write-Host '`$env:DATABASE_URL = "postgresql://username:password@host:port/database?schema=public"' -ForegroundColor Blue
    exit 1
}

Write-Host "✅ Database URL configured: $($DatabaseUrl.Substring(0, [Math]::Min(20, $DatabaseUrl.Length)))..." -ForegroundColor Green

# Generate Prisma client
Write-Host "📦 Generating Prisma client..." -ForegroundColor Blue
npx prisma generate

# Run database migrations
Write-Host "🗄️  Running database migrations..." -ForegroundColor Blue
npx prisma migrate deploy

# Seed the database if needed
Write-Host "🌱 Seeding database with sample data..." -ForegroundColor Blue
npm run seed:projects

# Build the application
Write-Host "🔨 Building Next.js application..." -ForegroundColor Blue
npm run build

# Deploy to Vercel
Write-Host "🚀 Deploying to Vercel..." -ForegroundColor Blue
vercel --prod

Write-Host "✅ Deployment completed successfully!" -ForegroundColor Green
Write-Host "Your portfolio is now live on Vercel with PostgreSQL database!" -ForegroundColor Blue
