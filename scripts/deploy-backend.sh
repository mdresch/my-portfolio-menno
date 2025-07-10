#!/bin/bash

# Backend Deployment Script for Azure Container Apps
# This script deploys the .NET API backend to Azure and configures it for Vercel frontend integration

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
RESOURCE_GROUP_PREFIX="rg-portfolio"
LOCATION="East US"
SUBSCRIPTION_ID=""
API_NAME="portfolio-api"
FRONTEND_URL="https://my-portfolio-menno.vercel.app"

# Functions
log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

check_prerequisites() {
    log_info "Checking prerequisites..."
    
    # Check if Azure CLI is installed
    if ! command -v az &> /dev/null; then
        log_error "Azure CLI is not installed. Please install it first."
        exit 1
    fi
    
    # Check if azd is installed
    if ! command -v azd &> /dev/null; then
        log_error "Azure Developer CLI (azd) is not installed. Please install it first."
        exit 1
    fi
    
    # Check if dotnet is installed
    if ! command -v dotnet &> /dev/null; then
        log_error ".NET SDK is not installed. Please install it first."
        exit 1
    fi
    
    log_success "All prerequisites are installed"
}

azure_login() {
    log_info "Checking Azure login status..."
    
    if ! az account show &> /dev/null; then
        log_info "Not logged in to Azure. Starting login process..."
        az login
    else
        log_success "Already logged in to Azure"
    fi
    
    # Get current subscription
    CURRENT_SUB=$(az account show --query id -o tsv)
    log_info "Current subscription: $CURRENT_SUB"
    
    if [ -n "$SUBSCRIPTION_ID" ] && [ "$SUBSCRIPTION_ID" != "$CURRENT_SUB" ]; then
        log_info "Setting subscription to: $SUBSCRIPTION_ID"
        az account set --subscription "$SUBSCRIPTION_ID"
    fi
}

setup_environment() {
    log_info "Setting up deployment environment..."
    
    # Navigate to API directory
    cd "$(dirname "$0")/../api" || exit 1
    
    # Initialize azd if not already done
    if [ ! -f ".azure/config.json" ]; then
        log_info "Initializing Azure Developer CLI..."
        azd init --template minimal
    fi
    
    # Set environment variables
    log_info "Configuring environment variables..."
    
    # Generate JWT secret if not provided
    JWT_SECRET=$(openssl rand -base64 32)
    
    azd env set AZURE_LOCATION "$LOCATION"
    azd env set ALLOWED_ORIGINS "$FRONTEND_URL,http://localhost:3000"
    azd env set JWT_SECRET_KEY "$JWT_SECRET"
    azd env set ASPNETCORE_ENVIRONMENT "Production"
    
    log_success "Environment configured"
}

deploy_infrastructure() {
    log_info "Deploying Azure infrastructure..."
    
    # Deploy using azd
    azd up --no-prompt
    
    if [ $? -eq 0 ]; then
        log_success "Infrastructure deployed successfully"
    else
        log_error "Infrastructure deployment failed"
        exit 1
    fi
}

configure_database() {
    log_info "Configuring database..."
    
    # Get the deployed API URL
    API_URL=$(azd env get-values | grep AZURE_CONTAINER_APPS_ENDPOINT | cut -d'=' -f2 | tr -d '"')
    
    if [ -n "$API_URL" ]; then
        log_info "API deployed at: $API_URL"
        
        # Test database connection
        log_info "Testing database connection..."
        curl -f "$API_URL/api/health" || log_warning "Health check failed - database might need initialization"
        
        # Run database migrations (if needed)
        log_info "Database migrations will run automatically on first startup"
    else
        log_error "Could not determine API URL"
        exit 1
    fi
}

test_deployment() {
    log_info "Testing deployment..."
    
    API_URL=$(azd env get-values | grep AZURE_CONTAINER_APPS_ENDPOINT | cut -d'=' -f2 | tr -d '"')
    
    if [ -z "$API_URL" ]; then
        log_error "API URL not found"
        exit 1
    fi
    
    # Test health endpoint
    log_info "Testing health endpoint..."
    if curl -f -s "$API_URL/api/health" > /dev/null; then
        log_success "Health check passed"
    else
        log_error "Health check failed"
        exit 1
    fi
    
    # Test projects endpoint
    log_info "Testing projects endpoint..."
    if curl -f -s "$API_URL/api/projects" > /dev/null; then
        log_success "Projects endpoint working"
    else
        log_warning "Projects endpoint failed - might need data seeding"
    fi
    
    # Test CORS
    log_info "Testing CORS configuration..."
    CORS_TEST=$(curl -s -H "Origin: $FRONTEND_URL" -H "Access-Control-Request-Method: GET" -H "Access-Control-Request-Headers: Content-Type" -X OPTIONS "$API_URL/api/projects")
    if echo "$CORS_TEST" | grep -q "Access-Control-Allow-Origin"; then
        log_success "CORS configured correctly"
    else
        log_warning "CORS might not be configured correctly"
    fi
}

update_vercel_config() {
    log_info "Generating Vercel configuration..."
    
    API_URL=$(azd env get-values | grep AZURE_CONTAINER_APPS_ENDPOINT | cut -d'=' -f2 | tr -d '"')
    
    if [ -n "$API_URL" ]; then
        cat > ../vercel-env-update.txt << EOF
# Add these environment variables to your Vercel project:
# 1. Go to https://vercel.com/dashboard
# 2. Select your project: my-portfolio-menno
# 3. Go to Settings > Environment Variables
# 4. Add the following:

NEXT_PUBLIC_API_BASE_URL=${API_URL}/api

# Optional: For chat AI functionality
GITHUB_TOKEN=your-github-token-here
REQUIREMENTS_AGENT_TOKEN=your-agent-token-here
EOF
        
        log_success "Vercel configuration saved to ../vercel-env-update.txt"
        log_info "Please update your Vercel environment variables with the API URL above"
    else
        log_error "Could not generate Vercel configuration - API URL not found"
    fi
}

show_summary() {
    log_info "Deployment Summary"
    echo "===================="
    
    API_URL=$(azd env get-values | grep AZURE_CONTAINER_APPS_ENDPOINT | cut -d'=' -f2 | tr -d '"' 2>/dev/null || echo "Not found")
    RESOURCE_GROUP=$(azd env get-values | grep AZURE_RESOURCE_GROUP_NAME | cut -d'=' -f2 | tr -d '"' 2>/dev/null || echo "Not found")
    
    echo "API URL: $API_URL"
    echo "Resource Group: $RESOURCE_GROUP"
    echo "Frontend URL: $FRONTEND_URL"
    echo ""
    echo "Next Steps:"
    echo "1. Update Vercel environment variables (see vercel-env-update.txt)"
    echo "2. Redeploy frontend: vercel --prod"
    echo "3. Test integration between frontend and backend"
    echo "4. Monitor logs: az containerapp logs show --name $API_NAME --resource-group $RESOURCE_GROUP"
    echo ""
    echo "API Endpoints:"
    echo "- Health: $API_URL/api/health"
    echo "- Projects: $API_URL/api/projects"
    echo "- Skills: $API_URL/api/skills"
    echo "- Contact: $API_URL/api/contact"
    echo "- Blog Posts: $API_URL/api/blogposts"
}

# Main execution
main() {
    log_info "Starting backend deployment process..."
    
    check_prerequisites
    azure_login
    setup_environment
    deploy_infrastructure
    configure_database
    test_deployment
    update_vercel_config
    show_summary
    
    log_success "Backend deployment completed successfully!"
}

# Handle script arguments
case "${1:-}" in
    --help|-h)
        echo "Backend Deployment Script"
        echo ""
        echo "Usage: $0 [options]"
        echo ""
        echo "Options:"
        echo "  --help, -h          Show this help message"
        echo "  --subscription, -s  Set Azure subscription ID"
        echo "  --location, -l      Set Azure location (default: East US)"
        echo ""
        echo "Environment Variables:"
        echo "  SUBSCRIPTION_ID     Azure subscription ID"
        echo "  LOCATION           Azure location"
        echo ""
        exit 0
        ;;
    --subscription|-s)
        SUBSCRIPTION_ID="$2"
        shift 2
        ;;
    --location|-l)
        LOCATION="$2"
        shift 2
        ;;
esac

# Run main function
main "$@"
