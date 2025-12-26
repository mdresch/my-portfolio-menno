#!/bin/bash

# Vercel Environment Variables Setup Script
# This script helps you set up environment variables in Vercel for Neon PostgreSQL

set -e

echo "🚀 Vercel + Neon PostgreSQL Environment Setup"
echo "=============================================="
echo ""

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
    log_error "Vercel CLI is not installed."
    log_info "Install it with: npm install -g vercel"
    exit 1
fi

log_success "Vercel CLI found: $(vercel --version)"

# Check if user is logged in
if ! vercel whoami &> /dev/null; then
    log_warning "Not logged in to Vercel. Please log in:"
    vercel login
fi

log_success "Logged in as: $(vercel whoami)"

# Check if project is linked
if [ ! -f ".vercel/project.json" ]; then
    log_warning "Project not linked to Vercel. Linking now..."
    vercel link
fi

log_success "Project linked to Vercel"

# Get DATABASE_URL
echo ""
log_info "Enter your Neon PostgreSQL connection string:"
log_info "Format: postgresql://user:password@host:port/database?sslmode=require"
log_info "Use the pooler connection string for better performance on Vercel"
echo ""
read -p "DATABASE_URL: " DATABASE_URL

if [ -z "$DATABASE_URL" ]; then
    log_error "DATABASE_URL cannot be empty!"
    exit 1
fi

# Validate connection string format
if [[ ! "$DATABASE_URL" =~ ^postgresql:// ]]; then
    log_error "Invalid connection string format. Must start with 'postgresql://'"
    exit 1
fi

log_success "Connection string format validated"

# Ask which environments to set
echo ""
log_info "Which environments should this variable be set for?"
echo "1) Production only"
echo "2) Preview only"
echo "3) Development only"
echo "4) All environments (Recommended)"
read -p "Choice [1-4] (default: 4): " env_choice
env_choice=${env_choice:-4}

# Set environment variables
echo ""
log_info "Setting DATABASE_URL in Vercel..."

case $env_choice in
    1)
        echo "$DATABASE_URL" | vercel env add DATABASE_URL production
        log_success "Set for Production environment"
        ;;
    2)
        echo "$DATABASE_URL" | vercel env add DATABASE_URL preview
        log_success "Set for Preview environment"
        ;;
    3)
        echo "$DATABASE_URL" | vercel env add DATABASE_URL development
        log_success "Set for Development environment"
        ;;
    4)
        echo "$DATABASE_URL" | vercel env add DATABASE_URL production
        echo "$DATABASE_URL" | vercel env add DATABASE_URL preview
        echo "$DATABASE_URL" | vercel env add DATABASE_URL development
        log_success "Set for all environments (Production, Preview, Development)"
        ;;
    *)
        log_error "Invalid choice"
        exit 1
        ;;
esac

echo ""
log_success "Environment variables configured successfully!"
echo ""
log_info "Next steps:"
log_info "1. Verify variables in Vercel dashboard: Project → Settings → Environment Variables"
log_info "2. Redeploy your project to apply changes"
log_info "3. Check deployment logs to verify database connection"
log_info "4. Test API endpoint: https://your-project.vercel.app/api/projects"
echo ""

