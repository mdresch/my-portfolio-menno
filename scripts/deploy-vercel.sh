#!/bin/bash

# Vercel Deployment Script for Portfolio with PostgreSQL
set -e

echo "🚀 Starting Vercel deployment process..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

log_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

log_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

log_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

log_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    log_error "Vercel CLI is not installed. Installing now..."
    npm install -g vercel
fi

# Check if user is logged in to Vercel
if ! vercel whoami &> /dev/null; then
    log_warning "Not logged in to Vercel. Please log in:"
    vercel login
fi

# Check if DATABASE_URL is set
if [ -z "$DATABASE_URL" ]; then
    log_error "DATABASE_URL environment variable is not set!"
    log_info "Please set your PostgreSQL connection string:"
    log_info "export DATABASE_URL='postgresql://username:password@host:port/database?schema=public'"
    exit 1
fi

log_info "Database URL configured: ${DATABASE_URL:0:20}..."

# Generate Prisma client
log_info "Generating Prisma client..."
npx prisma generate

# Run database migrations
log_info "Running database migrations..."
npx prisma migrate deploy

# Seed the database if needed
log_info "Seeding database with sample data..."
npm run seed:projects

# Build the application
log_info "Building Next.js application..."
npm run build

# Deploy to Vercel
log_info "Deploying to Vercel..."
vercel --prod

log_success "Deployment completed successfully!"
log_info "Your portfolio is now live on Vercel with PostgreSQL database!"
