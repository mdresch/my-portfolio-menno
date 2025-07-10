# 🚀 Complete Deployment Guide: Connecting Vercel Frontend to Azure Backend

## 📋 Overview

This guide provides step-by-step instructions to deploy the .NET backend to Azure and connect it to the Vercel frontend deployment, creating a fully integrated portfolio application.

## 🏗️ Architecture Overview

```
┌─────────────────┐    HTTPS/API     ┌──────────────────┐
│                 │ ◄──────────────► │                  │
│ Vercel Frontend │                  │ Azure Backend    │
│ (Next.js)       │                  │ (Container Apps) │
│                 │                  │                  │
└─────────────────┘                  └──────────────────┘
         │                                     │
         │                                     │
         ▼                                     ▼
┌─────────────────┐                  ┌──────────────────┐
│ Browser Storage │                  │ Azure SQL        │
│ (localStorage)  │                  │ Database         │
└─────────────────┘                  └──────────────────┘
```

## 🎯 Current Status & Improvements

### ✅ **What's Working**
- **Frontend**: Deployed on Vercel with enhanced chat widget
- **Fallback System**: Chat works with intelligent responses when backend unavailable
- **Local Development**: Full integration between Next.js and .NET API
- **Infrastructure**: Azure Bicep templates ready for deployment

### 🚀 **What We're Adding**
- **Production Backend**: Deploy .NET API to Azure Container Apps
- **Database Integration**: Azure SQL Database with automatic migrations
- **Environment Configuration**: Seamless connection between frontend and backend
- **Monitoring**: Health checks and Application Insights integration
- **CI/CD Pipeline**: Automated deployment and testing

## 📦 Prerequisites

### **Required Tools**
```bash
# Azure CLI
curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash

# Azure Developer CLI
curl -fsSL https://aka.ms/install-azd.sh | bash

# .NET 8 SDK
wget https://packages.microsoft.com/config/ubuntu/20.04/packages-microsoft-prod.deb
sudo dpkg -i packages-microsoft-prod.deb
sudo apt-get update && sudo apt-get install -y dotnet-sdk-8.0

# Vercel CLI
npm install -g vercel
```

### **Required Accounts & Permissions**
- **Azure Subscription** with Contributor access
- **Vercel Account** with project access
- **GitHub Repository** with Actions enabled

## 🚀 Deployment Steps

### **Step 1: Prepare Azure Environment**

```bash
# Clone repository
git clone https://github.com/mdresch/my-portfolio-menno.git
cd my-portfolio-menno

# Login to Azure
az login

# Set subscription (replace with your subscription ID)
az account set --subscription "your-subscription-id"

# Verify login
az account show
```

### **Step 2: Deploy Backend Infrastructure**

```bash
# Navigate to API directory
cd api

# Initialize Azure Developer CLI
azd init

# Set environment variables
azd env set AZURE_LOCATION "East US"
azd env set ALLOWED_ORIGINS "https://my-portfolio-menno.vercel.app,http://localhost:3000"
azd env set ASPNETCORE_ENVIRONMENT "Production"

# Deploy infrastructure and application
azd up
```

### **Step 3: Configure Database**

The database will be automatically configured during deployment. The system includes:
- **Azure SQL Database** with optimized connection pooling
- **Automatic Migrations** on first startup
- **Data Seeding** with sample portfolio content
- **Connection Resilience** with retry policies

### **Step 4: Update Vercel Configuration**

```bash
# Get the deployed API URL
API_URL=$(azd env get-values | grep AZURE_CONTAINER_APPS_ENDPOINT | cut -d'=' -f2 | tr -d '"')
echo "API URL: $API_URL"

# Update Vercel environment variables
vercel env add NEXT_PUBLIC_API_BASE_URL "$API_URL/api" production

# Optional: Add AI chat tokens
vercel env add GITHUB_TOKEN "your-github-token" production
vercel env add REQUIREMENTS_AGENT_TOKEN "your-agent-token" production

# Redeploy frontend
vercel --prod
```

### **Step 5: Test Integration**

```bash
# Run comprehensive integration tests
cd scripts
node test-integration.js

# Test specific endpoints
curl https://your-api-url.azurecontainerapps.io/api/health
curl https://your-api-url.azurecontainerapps.io/api/projects
curl https://my-portfolio-menno.vercel.app/api/health
```

## 🔧 Configuration Details

### **Environment Variables**

#### **Backend (Azure Container Apps)**
```env
ASPNETCORE_ENVIRONMENT=Production
ConnectionStrings__AzureSqlConnection=Server=tcp:...
Jwt__Key=auto-generated-secret
Jwt__Issuer=PortfolioApi
Jwt__Audience=PortfolioFrontend
AllowedOrigins__0=https://my-portfolio-menno.vercel.app
AllowedOrigins__1=http://localhost:3000
ApplicationInsights__ConnectionString=InstrumentationKey=...
```

#### **Frontend (Vercel)**
```env
NEXT_PUBLIC_API_BASE_URL=https://your-api-url.azurecontainerapps.io/api
GITHUB_TOKEN=ghp_... (optional, for AI chat)
REQUIREMENTS_AGENT_TOKEN=... (optional, for AI chat)
NODE_ENV=production
```

### **API Endpoints**

Once deployed, the following endpoints will be available:

```
GET  /api/health              - Health check
GET  /api/projects            - List all projects
GET  /api/projects/{id}       - Get project by ID
GET  /api/skills              - List all skills
GET  /api/skills/categories   - Get skill categories
GET  /api/blogposts           - List all blog posts
POST /api/contact             - Submit contact message
POST /api/auth/login          - Admin authentication
```

## 📊 Monitoring & Health Checks

### **Health Check Endpoints**
```bash
# Frontend health (includes backend status)
curl https://my-portfolio-menno.vercel.app/api/health

# Backend health
curl https://your-api-url.azurecontainerapps.io/api/health

# Database connectivity
curl https://your-api-url.azurecontainerapps.io/api/projects
```

### **Application Insights**
- **Request Tracking**: All API calls logged
- **Performance Monitoring**: Response times and errors
- **Custom Metrics**: Business-specific metrics
- **Alerts**: Automated notifications for issues

## 🔄 CI/CD Pipeline

### **Automated Deployment**
The GitHub Actions workflow automatically:
1. **Builds and tests** the .NET API
2. **Deploys infrastructure** to Azure
3. **Deploys application** to Container Apps
4. **Runs integration tests**
5. **Updates Vercel** environment variables
6. **Triggers frontend** redeployment

### **Manual Deployment**
```bash
# Deploy backend only
cd api && azd deploy

# Deploy frontend only
vercel --prod

# Run tests
node scripts/test-integration.js
```

## 🚨 Troubleshooting

### **Common Issues**

#### **CORS Errors**
```bash
# Check CORS configuration
curl -H "Origin: https://my-portfolio-menno.vercel.app" \
     -H "Access-Control-Request-Method: GET" \
     -X OPTIONS \
     https://your-api-url.azurecontainerapps.io/api/projects
```

#### **Database Connection Issues**
```bash
# Check database connectivity
az containerapp logs show \
  --name api \
  --resource-group rg-portfolio-production
```

#### **Environment Variable Issues**
```bash
# Verify Vercel environment variables
vercel env ls

# Verify Azure environment variables
azd env get-values
```

## 📈 Performance Optimization

### **Backend Optimizations**
- **Connection Pooling**: Configured for Azure SQL
- **Response Compression**: Enabled for all endpoints
- **Async Operations**: All database operations use async/await
- **Caching**: EF Core query caching enabled

### **Frontend Optimizations**
- **API Fallbacks**: Graceful degradation when backend unavailable
- **Request Timeouts**: Prevent hanging requests
- **Health Checks**: Automatic backend availability detection
- **Error Boundaries**: Comprehensive error handling

## 🔐 Security Features

### **Current Security Measures**
- **HTTPS Enforcement**: All traffic encrypted
- **JWT Authentication**: Secure admin access
- **CORS Configuration**: Restricted to allowed origins
- **Input Validation**: Comprehensive data validation
- **SQL Injection Protection**: EF Core parameterized queries

### **Additional Security (Recommended)**
- **Rate Limiting**: Prevent API abuse
- **Azure Key Vault**: Secrets management
- **WAF Integration**: Web Application Firewall
- **API Versioning**: Future-proof API design

## 🎯 Success Criteria

### **Deployment Success Indicators**
- ✅ Backend API responds to health checks
- ✅ Frontend can fetch data from backend
- ✅ Chat widget works (with AI or fallback)
- ✅ Contact form submissions work
- ✅ All integration tests pass
- ✅ No CORS errors in browser console

### **Performance Targets**
- **API Response Time**: < 500ms for most endpoints
- **Frontend Load Time**: < 3 seconds
- **Database Queries**: < 100ms average
- **Uptime**: > 99.9%

## 📞 Support & Next Steps

### **Immediate Next Steps**
1. **Run deployment script**: `./scripts/deploy-backend.sh`
2. **Update Vercel environment**: Add backend URL
3. **Test integration**: Run test suite
4. **Monitor deployment**: Check health endpoints
5. **Verify functionality**: Test all features

### **Future Enhancements**
- **Redis Caching**: Improve performance
- **CDN Integration**: Faster static content delivery
- **Advanced Monitoring**: Custom dashboards
- **Auto-scaling**: Handle traffic spikes
- **Backup Strategy**: Automated database backups

---

**🎉 Once deployed, you'll have a fully integrated, production-ready portfolio application with seamless frontend-backend communication!**
