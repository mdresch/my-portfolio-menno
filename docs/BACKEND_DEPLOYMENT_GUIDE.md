# Backend Services Deployment & Integration Guide

## 🎯 Overview

This guide provides a comprehensive plan to deploy the .NET backend services and connect them to the Vercel frontend deployment.

## 📋 Current Architecture

### **Frontend (Vercel)**
- **Platform**: Next.js 15 deployed on Vercel
- **Domain**: https://my-portfolio-menno.vercel.app
- **API Client**: Configured to connect to backend services
- **Fallback**: Local Next.js API routes when backend unavailable

### **Backend (.NET API)**
- **Framework**: ASP.NET Core 8.0
- **Database**: Azure SQL Database (configured but not deployed)
- **Infrastructure**: Azure Container Apps (Bicep templates ready)
- **Features**: Projects, Blog Posts, Skills, Contact Messages, Authentication

## 🚀 Deployment Strategy

### **Phase 1: Azure Infrastructure Setup**

#### **1.1 Deploy Azure Resources**
```bash
# Navigate to API directory
cd api

# Login to Azure
az login

# Set subscription (replace with your subscription ID)
az account set --subscription "your-subscription-id"

# Deploy infrastructure
azd up
```

#### **1.2 Configure Environment Variables**
```bash
# Set required environment variables
azd env set AZURE_SQL_CONNECTION_STRING "your-connection-string"
azd env set JWT_SECRET_KEY "your-jwt-secret-key"
azd env set ALLOWED_ORIGINS "https://my-portfolio-menno.vercel.app,http://localhost:3000"
```

### **Phase 2: Database Migration**

#### **2.1 Azure SQL Database Setup**
```sql
-- Connect to Azure SQL Database
-- Run migration scripts from api/Scripts/
```

#### **2.2 Data Seeding**
```bash
# Run data seeding for production
dotnet run --project api.ApiService --environment Production
```

### **Phase 3: API Deployment**

#### **3.1 Container Build & Deploy**
```bash
# Build and deploy API container
azd deploy api
```

#### **3.2 Verify Deployment**
```bash
# Test API endpoints
curl https://your-api-url.azurecontainerapps.io/api/health
curl https://your-api-url.azurecontainerapps.io/api/projects
```

### **Phase 4: Frontend Integration**

#### **4.1 Update Vercel Environment Variables**
```bash
# Set in Vercel dashboard or CLI
vercel env add NEXT_PUBLIC_API_BASE_URL "https://your-api-url.azurecontainerapps.io/api"
```

#### **4.2 Deploy Frontend Updates**
```bash
# Redeploy frontend with new API URL
vercel --prod
```

## 🔧 Configuration Files

### **Environment Variables Required**

#### **Backend (Azure Container Apps)**
```env
ASPNETCORE_ENVIRONMENT=Production
ConnectionStrings__AzureSqlConnection=Server=tcp:...
Jwt__Key=your-secret-key
Jwt__Issuer=PortfolioApi
Jwt__Audience=PortfolioFrontend
AllowedOrigins__0=https://my-portfolio-menno.vercel.app
AllowedOrigins__1=http://localhost:3000
ApplicationInsights__ConnectionString=your-app-insights-connection
```

#### **Frontend (Vercel)**
```env
NEXT_PUBLIC_API_BASE_URL=https://your-api-url.azurecontainerapps.io/api
GITHUB_TOKEN=your-github-token (for chat AI)
REQUIREMENTS_AGENT_TOKEN=your-agent-token (alternative for chat AI)
```

## 🏗️ Infrastructure Components

### **Azure Resources Created**
1. **Resource Group**: `rg-portfolio-{environment}`
2. **Container Apps Environment**: For hosting the API
3. **Azure SQL Server & Database**: For data persistence
4. **Application Insights**: For monitoring and logging
5. **Azure Container Registry**: For container images
6. **Managed Identity**: For secure resource access

### **Networking & Security**
- **HTTPS Only**: All endpoints secured with TLS
- **CORS Configuration**: Restricted to allowed origins
- **JWT Authentication**: For admin operations
- **Azure AD Integration**: For enhanced security (optional)

## 📊 Monitoring & Health Checks

### **Health Check Endpoints**
```csharp
// Already implemented in the API
GET /api/health - Basic health check
GET /api/health/ready - Readiness probe
GET /api/health/live - Liveness probe
```

### **Application Insights Integration**
- **Request Tracking**: All API calls logged
- **Performance Monitoring**: Response times and errors
- **Custom Metrics**: Business-specific metrics
- **Alerts**: Automated notifications for issues

## 🔄 CI/CD Pipeline

### **Automated Deployment**
```yaml
# GitHub Actions workflow (to be created)
name: Deploy Backend
on:
  push:
    branches: [main]
    paths: ['api/**']
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to Azure
        run: azd deploy api
```

## 🧪 Testing Strategy

### **API Testing**
```bash
# Health check
curl https://your-api-url.azurecontainerapps.io/api/health

# Projects endpoint
curl https://your-api-url.azurecontainerapps.io/api/projects

# Skills endpoint
curl https://your-api-url.azurecontainerapps.io/api/skills

# Contact form
curl -X POST https://your-api-url.azurecontainerapps.io/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","subject":"Test","message":"Test message"}'
```

### **Integration Testing**
```bash
# Test frontend-backend integration
npm run test:integration
```

## 🚨 Troubleshooting

### **Common Issues**

#### **CORS Errors**
```csharp
// Verify CORS configuration in Program.cs
app.UseCors("AllowLocalFrontend");
```

#### **Database Connection Issues**
```bash
# Check connection string in Azure
az containerapp show --name api --resource-group rg-portfolio
```

#### **Authentication Problems**
```bash
# Verify JWT configuration
curl -X POST https://your-api-url.azurecontainerapps.io/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"Portfolio@2025"}'
```

## 📈 Performance Optimization

### **Database Optimization**
- **Connection Pooling**: Already configured
- **Query Optimization**: EF Core best practices
- **Caching**: Redis integration (future enhancement)

### **API Performance**
- **Response Compression**: Enabled
- **Async Operations**: All endpoints use async/await
- **Pagination**: Implemented for large datasets

## 🔐 Security Best Practices

### **Current Security Measures**
- **HTTPS Enforcement**: All traffic encrypted
- **JWT Authentication**: Secure token-based auth
- **Input Validation**: Data annotations and model validation
- **SQL Injection Protection**: EF Core parameterized queries

### **Additional Security (Recommended)**
- **Rate Limiting**: Prevent API abuse
- **API Key Authentication**: For service-to-service calls
- **Azure Key Vault**: For secrets management
- **WAF Integration**: Web Application Firewall

## 🎯 Next Steps

1. **Deploy Infrastructure**: Run `azd up` to create Azure resources
2. **Configure Database**: Set up Azure SQL and run migrations
3. **Deploy API**: Build and deploy container to Azure Container Apps
4. **Update Frontend**: Configure Vercel with new API URL
5. **Test Integration**: Verify all endpoints work correctly
6. **Set up Monitoring**: Configure alerts and dashboards
7. **Implement CI/CD**: Automate future deployments

## 📞 Support

For deployment assistance or troubleshooting:
1. Check Azure Container Apps logs
2. Review Application Insights telemetry
3. Verify environment variable configuration
4. Test API endpoints individually
5. Check CORS and authentication settings
