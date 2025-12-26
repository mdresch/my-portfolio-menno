# Quick script to add DATABASE_URL to Vercel
# Usage: .\scripts\add-vercel-db-env.ps1

param(
    [Parameter(Mandatory=$false)]
    [string]$DatabaseUrl = ""
)

Write-Host "🔐 Adding DATABASE_URL to Vercel" -ForegroundColor Blue
Write-Host "=================================" -ForegroundColor Blue
Write-Host ""

# Check if logged in
try {
    $whoami = vercel whoami 2>$null
    Write-Host "✅ Logged in as: $whoami" -ForegroundColor Green
} catch {
    Write-Host "❌ Not logged in. Please run: vercel login" -ForegroundColor Red
    exit 1
}

# Get DATABASE_URL if not provided
if ([string]::IsNullOrEmpty($DatabaseUrl)) {
    # Try to read from .env.local
    if (Test-Path ".env.local") {
        $envContent = Get-Content ".env.local"
        $dbLine = $envContent | Where-Object { $_ -match "^DATABASE_URL=" }
        if ($dbLine) {
            $DatabaseUrl = $dbLine -replace "^DATABASE_URL=", "" -replace '"', ''
            Write-Host "📋 Found DATABASE_URL in .env.local" -ForegroundColor Green
        }
    }
    
    # If still empty, prompt user
    if ([string]::IsNullOrEmpty($DatabaseUrl)) {
        Write-Host "Enter your Neon PostgreSQL connection string:" -ForegroundColor Yellow
        Write-Host "Format: postgresql://user:password@host:port/database?sslmode=require" -ForegroundColor Gray
        $DatabaseUrl = Read-Host "DATABASE_URL"
    }
}

if ([string]::IsNullOrEmpty($DatabaseUrl)) {
    Write-Host "❌ DATABASE_URL cannot be empty!" -ForegroundColor Red
    exit 1
}

# Validate format
if (-not $DatabaseUrl.StartsWith("postgresql://")) {
    Write-Host "❌ Invalid connection string format!" -ForegroundColor Red
    Write-Host "Must start with 'postgresql://'" -ForegroundColor Yellow
    exit 1
}

Write-Host ""
Write-Host "📤 Adding DATABASE_URL to Vercel..." -ForegroundColor Blue
Write-Host ""

# Add to all environments
$environments = @("production", "preview", "development")

foreach ($env in $environments) {
    Write-Host "Adding to $env environment..." -ForegroundColor Cyan
    try {
        $DatabaseUrl | vercel env add DATABASE_URL $env 2>&1 | Out-Null
        Write-Host "  ✅ Added to $env" -ForegroundColor Green
    } catch {
        Write-Host "  ⚠️  Error adding to $env (may already exist)" -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "✅ Environment variables added!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Verify with: vercel env ls" -ForegroundColor Blue
Write-Host "🚀 Redeploy with: vercel --prod" -ForegroundColor Blue
Write-Host ""

