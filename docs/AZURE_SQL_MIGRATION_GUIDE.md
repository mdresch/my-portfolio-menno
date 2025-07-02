# Azure SQL Database Migration Guide

This guide helps you migrate your Portfolio application from SQLite (development) to Azure SQL Database (production).

## Overview

Your Portfolio application currently uses:
- **Development**: SQLite database (`PortfolioDb.db`)
- **Production**: Will use Azure SQL Database

## Migration Options

### Option 1: Azure SQL Database (Recommended)
- **Best for**: .NET applications, Enterprise features
- **Cost**: ~$5/month (Basic tier) or FREE with Azure credits
- **Pros**: Best .NET integration, automatic scaling, built-in security
- **Cons**: Microsoft-specific
- **Free Option**: Basic tier (5 DTU, 2GB) - approximately $4.90/month

### Option 2: Azure Database for PostgreSQL
- **Best for**: Cost-conscious, open-source preference
- **Cost**: ~$20-100/month
- **Pros**: Open source, excellent performance, JSON support
- **Cons**: Requires code changes

### Option 3: Azure Database for MySQL
- **Best for**: Familiar with MySQL, cost-effective
- **Cost**: ~$15-80/month
- **Pros**: Popular, cost-effective
- **Cons**: Limited advanced features

## Step-by-Step Migration (Azure SQL)

### Step 1: Infrastructure Setup

1. **Ensure Prerequisites**:
   ```powershell
   # Install Azure Developer CLI
   winget install Microsoft.AzureDeveloperCLI
   
   # Login to Azure
   azd auth login
   ```

2. **Deploy Infrastructure**:
   ```powershell
   cd api
   azd init --template minimal
   azd provision
   ```

   This creates:
   - Azure SQL Server (with Azure AD authentication)
   - Azure SQL Database (Basic tier - lowest cost ~$5/month)
   - Container Apps environment
   - Application Insights

### Step 2: Database Migration

1. **Backup Current Data**:
   ```powershell
   cd api/api.ApiService
   Copy-Item "PortfolioDb.db" "backup/PortfolioDb_backup_$(Get-Date -Format 'yyyyMMdd_HHmmss').db"
   ```

2. **Update Configuration**:
   The Azure SQL connection string will be automatically configured during deployment.

3. **Create SQL Server Migrations**:
   ```powershell
   # Set environment to Production to use SQL Server provider
   $env:ASPNETCORE_ENVIRONMENT = "Production"
   
   # Create new migrations for SQL Server
   dotnet ef migrations add InitialAzureSQL --output-dir Migrations/AzureSQL
   
   # Apply to Azure SQL Database
   dotnet ef database update
   
   # Reset environment
   $env:ASPNETCORE_ENVIRONMENT = "Development"
   ```

### Step 3: Data Transfer

Since you mentioned your current data is minimal (mainly friend contact submissions), you have two options:

**Option A: Manual Data Transfer (Recommended for small datasets)**:
1. Export SQLite data:
   ```powershell
   sqlite3 PortfolioDb.db ".dump" > portfolio_export.sql
   ```

2. Import key data manually through your API endpoints or admin interface.

**Option B: Programmatic Migration** (if you have significant data):
1. Create a simple console app that reads from SQLite and writes to Azure SQL
2. Use Entity Framework to handle both connections
3. Transfer data table by table

### Step 4: Deploy Application

1. **Deploy to Azure Container Apps**:
   ```powershell
   azd deploy
   ```

2. **Verify Deployment**:
   ```powershell
   # Check deployment status
   azd show
   
   # View application logs
   azd logs
   ```

### Step 5: Update Frontend Configuration

Update your Next.js application to use the new Azure API endpoint:

```typescript
// Update your API configuration
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-api.azurecontainerapps.io'  // From azd output
  : 'http://localhost:5000';
```

## Database Schema Differences

The migration handles these differences automatically:

| Feature | SQLite | Azure SQL |
|---------|--------|-----------|
| Primary Keys | INTEGER AUTOINCREMENT | int IDENTITY(1,1) |
| Text Fields | TEXT | nvarchar(max) |
| Dates | TEXT | datetime2 |
| Indexes | CREATE INDEX | CREATE INDEX with SQL Server options |

## Security Configuration

Azure SQL Database is configured with:
- **Azure AD Authentication**: Integrated with your Azure account
- **TLS 1.2 Encryption**: All connections encrypted
- **Firewall Rules**: Only Azure services can connect
- **Basic Tier**: 5 DTU, 2GB storage - lowest cost option (~$5/month)

## Monitoring and Maintenance

### Application Insights
- Automatic performance monitoring
- Error tracking and diagnostics
- Custom telemetry for business metrics

### Cost Optimization
- **Basic Tier Database**: 5 DTU, 2GB storage
- **Local Backup Storage**: Reduces redundancy costs
- **No Auto-Scaling**: Fixed performance keeps costs predictable

### Regular Maintenance
```powershell
# Check database performance
azd logs --service api

# Monitor costs
az consumption usage list --subscription "your-subscription"

# Update application
azd deploy
```

## Troubleshooting

### Common Issues

1. **Connection String Issues**:
   - Verify Azure AD authentication is enabled
   - Check firewall rules allow Azure services
   - Ensure Managed Identity is configured

2. **Migration Errors**:
   - Check that both SQLite and SQL Server providers are installed
   - Verify connection strings in both environments
   - Review Entity Framework migration logs

3. **Deployment Issues**:
   - Check Azure Container Registry authentication
   - Verify resource quotas in your subscription
   - Review container startup logs

### Rollback Plan

If migration fails:
1. **Keep SQLite**: Continue using SQLite for development
2. **Restore Backup**: Use the backup file created in Step 2
3. **Revert Configuration**: Reset connection strings to SQLite
4. **Redeploy**: Use original configuration

## Cost Estimates

### Azure SQL Database (Basic Tier)
- **Base Cost**: ~$4.90/month (Basic tier - 5 DTU, 2GB)
- **Storage**: Included in basic tier (up to 2GB)
- **Backup**: ~$0.05/GB/month for additional backup storage
- **Total Estimate**: ~$5-8/month for typical portfolio app

### Getting it FREE or Nearly Free
- **Azure Free Account**: $200 credit covers several months
- **Visual Studio Subscription**: Monthly Azure credits included
- **Student Account**: Additional free credits available
- **MSDN Subscription**: Includes monthly Azure credits

### Alternative: PostgreSQL
- **Base Cost**: ~$20-40/month
- **Storage**: Included in base cost
- **Total Estimate**: ~$20-40/month

## Database Tier Comparison

| Tier | Monthly Cost | Storage | Performance | Best For |
|------|-------------|---------|-------------|----------|
| **Basic** (Configured) | ~$5 | 2GB | 5 DTU | Portfolio, small apps |
| Standard S0 | ~$15 | 250GB | 10 DTU | Small business apps |
| Serverless | ~$10-50 | 32GB+ | 0.5-4 vCore | Variable workloads |

**Why Basic Tier?**
- ✅ Lowest cost option for production
- ✅ Perfect for portfolio applications
- ✅ 2GB storage is plenty for contact forms and blog data
- ✅ 5 DTU handles typical portfolio traffic easily
- ✅ Can upgrade later if needed

**Free Tier Alternatives:**
- **Azure Cosmos DB**: Has a permanent free tier (1000 RU/s, 25GB)
- **Azure Database for PostgreSQL**: Free tier available (Burstable B1ms)
- **SQLite**: Continue using for production (file-based, $0 cost)

## Next Steps

1. **Review Infrastructure Code**: Check the Bicep files in `api/infra/`
2. **Test Migration Script**: Run the PowerShell script in test mode
3. **Plan Downtime**: Coordinate migration during low-traffic period
4. **Monitor Performance**: Set up alerts and monitoring post-migration

## Support Resources

- [Azure SQL Database Documentation](https://docs.microsoft.com/en-us/azure/azure-sql/)
- [Entity Framework Core Migrations](https://docs.microsoft.com/en-us/ef/core/managing-schemas/migrations/)
- [Azure Developer CLI](https://docs.microsoft.com/en-us/azure/developer/azure-developer-cli/)

---

**Ready to proceed?** Run the migration script:
```powershell
.\scripts\migrate-to-azure-sql.ps1 -Action setup
```

## PostgreSQL vs Azure SQL: RAG and AI Features Comparison

**Important Note**: Your current Azure SQL implementation already includes:
- ✅ Vector search functionality
- ✅ RAG Chat AI features  
- ✅ Vertex AI chat integration
- ✅ Regular search capabilities
- ✅ AI-enabled application features

### Current Implementation Advantages (Azure SQL)

**Your Existing RAG/AI Features:**
- ✅ **Custom vector search**: Already implemented and working
- ✅ **RAG Chat AI**: Integrated with your application
- ✅ **Vertex AI integration**: Production-ready AI chat
- ✅ **Dual search modes**: Both vector and traditional search
- ✅ **Proven stability**: Currently working in your environment
- ✅ **Zero migration risk**: No need to rebuild existing features

### Azure Database for PostgreSQL - What You'd Gain vs Lose

**Potential PostgreSQL Advantages:**
- ✅ **Native pgvector**: Built-in vector operations (vs your custom implementation)
- ✅ **JSONB optimization**: Better JSON handling than SQL Server
- ✅ **FREE tier**: Burstable B1ms (1 vCore, 2GB RAM, 32GB storage)
- ✅ **Open source**: No vendor lock-in

**What You'd Lose/Risk:**
- ❌ **Working RAG implementation**: Would need to be rebuilt
- ❌ **Vertex AI integration**: Would need to be ported/tested
- ❌ **Custom vector search**: Would need PostgreSQL-specific rewrite
- ❌ **Production stability**: Risk of breaking working features
- ❌ **Development time**: Weeks of migration work

**Code Changes Required for PostgreSQL:**
```csharp
// RISK: Your existing RAG/AI features would need to be rebuilt:

// 1. Rebuild vector search implementation
// From: Your current Azure SQL vector search
// To: PostgreSQL pgvector implementation

// 2. Port Vertex AI integration  
// From: Working Vertex AI chat with Azure SQL
// To: Vertex AI chat with PostgreSQL (testing required)

// 3. Migrate RAG document storage
// From: Your current working RAG system
// To: PostgreSQL-native vector storage

// 4. Update all AI-related queries
// From: SQL Server-optimized queries
// To: PostgreSQL-specific syntax

// Example of what you'd need to rebuild:
public class RagDocument
{
    // Your current implementation works with Azure SQL
    // Would need complete rewrite for PostgreSQL vector types
    [Column(TypeName = "vector(1536)")]     
    public float[] ContentVector { get; set; }
    
    [Column(TypeName = "jsonb")]
    public string MetadataJson { get; set; }
}
```

### Current Azure SQL vs PostgreSQL Comparison

| Feature | Azure SQL (Your Current Setup) | PostgreSQL (Alternative) |
|---------|-------------------------------|-------------------------|
| **Cost** | ~$5/month (Basic) | FREE (Burstable B1ms) |
| **Storage** | 2GB | 32GB |
| **Performance** | 5 DTU | 1 vCore, 2GB RAM |
| **Vector Search** | ✅ **Already implemented** | ✅ Native pgvector |
| **RAG Features** | ✅ **Working RAG Chat AI** | ⚠️ Would need rebuilding |
| **Vertex AI Integration** | ✅ **Production ready** | ⚠️ Needs porting/testing |
| **AI Chat Features** | ✅ **Currently functional** | ⚠️ Risk of breaking |
| **JSON Support** | ✅ Working for your use case | ✅ Better JSONB support |
| **Code Changes** | ❌ **None needed** | ⚠️ **Major refactoring required** |
| **Migration Risk** | ❌ **No risk** | ⚠️ **High risk to working features** |

### PostgreSQL RAG Benefits for Your Portfolio

**1. Enhanced Blog Search:**
```sql
-- Semantic search across blog posts
SELECT title, content, 
       embedding <-> query_embedding AS similarity
FROM blog_posts 
ORDER BY similarity 
LIMIT 5;
```

**2. Intelligent Content Recommendations:**
```sql
-- Find related content based on vector similarity
SELECT p1.title as current_post, p2.title as related_post
FROM blog_posts p1, blog_posts p2
WHERE p1.id != p2.id
ORDER BY p1.embedding <-> p2.embedding
LIMIT 3;
```

**3. Advanced RAG Document Storage:**
```csharp
// Store with vector embeddings for fast similarity search
public class RagDocument
{
    public string Content { get; set; }
    public float[] Embedding { get; set; }     // 1536-dim OpenAI embedding
    public JsonDocument Metadata { get; set; } // Rich metadata
    public Vector<float> SearchVector { get; set; } // PostgreSQL vector type
}
```

### Migration Effort: Azure SQL → PostgreSQL

**Low Effort (95% compatible):**
- ✅ Basic CRUD operations
- ✅ Entity relationships
- ✅ Most LINQ queries
- ✅ Connection pooling

**Medium Effort (requires updates):**
- ⚠️ Database provider change
- ⚠️ Connection string format
- ⚠️ Some SQL-specific queries
- ⚠️ Migration scripts

**High Effort (new features):**
- 🔥 Implementing vector search
- 🔥 RAG document processing
- 🔥 AI integration setup
- 🔥 Full-text search optimization

### When to Choose PostgreSQL Over Azure SQL

**Choose PostgreSQL if you want:**
- 🎯 **Advanced RAG features** for your blog/portfolio
- 🎯 **Vector similarity search** for content recommendations
- 🎯 **FREE hosting** (vs $5/month for SQL)
- 🎯 **Future AI/ML features** in your portfolio
- 🎯 **Better JSON handling** for complex data
- 🎯 **Open source** database preference

**Stick with Azure SQL if you prefer:**
- ✅ **Zero code changes** (current working solution)
- ✅ **Familiar .NET integration** 
- ✅ **SQL Server expertise**
- ✅ **Simple deployment** (already configured)
- ✅ **Proven stability** for your use case

## Cloud RAG Services Comparison: Azure vs Google

Since your portfolio already implements custom RAG with vector search and Vertex AI, here's how cloud-native RAG services compare:

### Azure RAG Services Portfolio

**1. Azure AI Search (Cognitive Search)**
- ✅ **Native vector search**: Built-in vector indexing and similarity search
- ✅ **Semantic ranking**: AI-powered result ranking
- ✅ **Multi-modal search**: Text, images, documents
- ✅ **Integrated embeddings**: Built-in Azure OpenAI embedding generation
- ✅ **Hybrid search**: Combines keyword + vector search
- **Cost**: ~$250/month (Standard tier), Free tier available (50MB, 3 indexes)

**2. Azure OpenAI Service**
- ✅ **GPT-4 integration**: Direct access to OpenAI models
- ✅ **Embedding models**: text-embedding-ada-002, text-embedding-3-small/large
- ✅ **RAG patterns**: Built-in retrieval augmentation
- ✅ **Private deployment**: Models in your Azure tenant
- **Cost**: Pay-per-token (~$0.0001-0.03 per 1K tokens)

**3. Azure AI Studio**
- ✅ **RAG orchestration**: End-to-end RAG pipeline management
- ✅ **Prompt flow**: Visual RAG workflow designer
- ✅ **Model evaluation**: Built-in RAG performance metrics
- ✅ **Integration hub**: Connects all Azure AI services
- **Cost**: ~$50-200/month depending on usage

**4. Azure Cosmos DB (Vector Search)**
- ✅ **Native vector storage**: Built-in vector indexing
- ✅ **Global distribution**: Multi-region vector search
- ✅ **NoSQL flexibility**: JSON documents with vectors
- ✅ **Real-time updates**: Live vector index updates
- **Cost**: ~$25-100/month (serverless), Free tier (1000 RU/s)

### Google RAG Services Portfolio

**1. Vertex AI Search (Enterprise Search)**
- ✅ **Unstructured data search**: Documents, websites, databases
- ✅ **Multi-modal search**: Text, images, video
- ✅ **Enterprise connectors**: BigQuery, Cloud Storage, Drive
- ✅ **Conversational search**: Natural language queries
- **Cost**: ~$300-500/month (depends on data volume)

**2. Vertex AI Embeddings**
- ✅ **Multimodal embeddings**: Text, image, video embeddings
- ✅ **Language support**: 100+ languages
- ✅ **Fine-tuning**: Custom embedding models
- ✅ **Batch processing**: Large-scale embedding generation
- **Cost**: ~$0.0001-0.001 per embedding

**3. Vertex AI Generative AI**
- ✅ **Gemini models**: Google's latest LLM family
- ✅ **RAG integration**: Built-in retrieval patterns
- ✅ **Grounding**: Fact-checking against knowledge bases
- ✅ **Code generation**: Specialized for coding tasks
- **Cost**: ~$0.001-0.03 per 1K tokens

**4. AlloyDB for PostgreSQL**
- ✅ **pgvector integration**: Native vector search
- ✅ **Columnar engine**: Optimized for analytics
- ✅ **ML integration**: Built-in ML functions
- ✅ **Real-time insights**: Fast vector similarity search
- **Cost**: ~$100-300/month

### Service-by-Service Comparison

| Feature | Azure AI Search | Vertex AI Search | Your Current Implementation |
|---------|----------------|------------------|---------------------------|
| **Vector Search** | ✅ Native | ✅ Native | ✅ Custom built |
| **Embedding Generation** | ✅ Built-in (OpenAI) | ✅ Built-in (PaLM/Gemini) | ✅ External API calls |
| **Document Processing** | ✅ OCR, PDF parsing | ✅ Multi-format parsing | ⚠️ Manual processing |
| **Semantic Ranking** | ✅ AI-powered | ✅ LLM-based | ⚠️ Basic similarity |
| **Multi-modal** | ✅ Text, images | ✅ Text, images, video | ❌ Text only |
| **Enterprise Connectors** | ✅ 100+ data sources | ✅ Google Workspace | ❌ Manual integration |
| **Cost (Monthly)** | ~$250+ | ~$300+ | ~$50 (API costs) |
| **Setup Complexity** | Medium | Medium | High (custom code) |
| **Customization** | Medium | Medium | ✅ Full control |

### Integration Comparison with Your Portfolio

**Current Implementation Benefits:**
```csharp
// Your existing setup with full control
public async Task<List<RagDocument>> SearchAsync(string query)
{
    // Custom vector search implementation
    var embedding = await _embeddingService.GetEmbeddingAsync(query);
    var results = await _vectorSearch.FindSimilarAsync(embedding);
    
    // Custom RAG chat with Vertex AI
    var context = string.Join("\n", results.Select(r => r.Content));
    var response = await _vertexAI.GenerateResponseAsync(query, context);
    
    return results; // Full control over the pipeline
}
```

**Azure AI Search Integration:**
```csharp
// Simplified with Azure AI Search
public async Task<SearchResults> SearchAsync(string query)
{
    var searchClient = new SearchClient(endpoint, indexName, credential);
    
    // Single call handles vector + keyword search
    var results = await searchClient.SearchAsync<RagDocument>(query, new SearchOptions
    {
        VectorSearch = new VectorSearchOptions
        {
            Queries = { new VectorizedQuery(await GetEmbeddingAsync(query)) }
        },
        SemanticSearch = new SemanticSearchOptions
        {
            SemanticConfigurationName = "semantic-config",
            QueryCaption = new QueryCaption(QueryCaptionType.Extractive)
        }
    });
    
    return results; // Less control, but less code
}
```

**Vertex AI Search Integration:**
```csharp
// Google's managed approach
public async Task<SearchResponse> SearchAsync(string query)
{
    var client = SearchServiceClient.Create();
    
    var request = new SearchRequest
    {
        ServingConfig = "projects/your-project/locations/global/collections/default_collection/engines/your-engine/servingConfigs/default_serving_config",
        Query = query,
        PageSize = 10
    };
    
    var response = await client.SearchAsync(request);
    return response; // Google handles everything
}
```

### Cost Analysis: Custom vs Cloud RAG

| Solution | Monthly Cost | Setup Time | Maintenance | Scalability |
|----------|-------------|------------|-------------|-------------|
| **Your Current** | ~$50 | ✅ Already done | High (custom code) | Manual scaling |
| **Azure AI Search** | ~$250+ | 2-3 weeks | Low (managed) | Automatic |
| **Vertex AI Search** | ~$300+ | 2-3 weeks | Low (managed) | Automatic |
| **Hybrid Approach** | ~$100 | 1 week | Medium | Semi-automatic |

### Recommended Migration Strategy

**Option 1: Keep Current Custom Implementation (Recommended)**
- ✅ **Already working** with Vertex AI integration
- ✅ **Low cost** (~$50/month vs $250-300+)
- ✅ **Full control** over RAG pipeline
- ✅ **Proven stability** in your environment
- ✅ **Perfect for portfolio** demonstration of custom AI skills

**Option 2: Hybrid Approach (Future Enhancement)**
```csharp
// Keep your custom RAG but add Azure AI Search for enhanced features
public class HybridRagService
{
    private readonly CustomVectorSearch _customSearch;      // Your current implementation
    private readonly SearchClient _azureAISearch;          // Azure AI Search for advanced features
    
    public async Task<RagResults> SearchAsync(string query, SearchMode mode)
    {
        return mode switch
        {
            SearchMode.Custom => await _customSearch.SearchAsync(query),     // Your implementation
            SearchMode.Enhanced => await _azureAISearch.SearchAsync(query),  // Azure AI features
            SearchMode.Hybrid => await CombineResultsAsync(query)            // Best of both
        };
    }
}
```

**Option 3: Full Cloud Migration (Consider Later)**
- ⚠️ **High cost** increase ($50 → $250-300/month)
- ⚠️ **Loss of customization** and learning value
- ⚠️ **Vendor lock-in** to specific cloud provider
- ✅ **Enterprise features** for large-scale applications

### Feature Comparison: What You'd Gain vs Lose

**Cloud RAG Advantages:**
- 🎯 **Managed scaling**: Automatic capacity management
- 🎯 **Advanced features**: Multi-modal search, semantic ranking
- 🎯 **Enterprise connectors**: Easy integration with business systems
- 🎯 **Compliance**: Built-in security and compliance features
- 🎯 **Reduced maintenance**: No custom code to maintain

**Your Custom Implementation Advantages:**
- 🎯 **Cost efficiency**: ~$50 vs $250-300/month
- 🎯 **Skill demonstration**: Shows AI engineering capabilities
- 🎯 **Full control**: Custom business logic and optimizations
- 🎯 **Flexibility**: Can integrate any AI model or service
- 🎯 **Portfolio value**: Shows hands-on AI implementation experience

### Recommendation for Your Portfolio

**Stick with your custom implementation because:**
1. **Cost-effective**: Significant savings for portfolio use
2. **Skill demonstration**: Shows AI engineering capabilities
3. **Already working**: Proven with Vertex AI integration
4. **Full control**: Can showcase custom optimizations
5. **Learning platform**: Better for experimenting with new AI techniques

**Consider cloud RAG services when:**
- Building enterprise applications with large teams
- Need compliance and enterprise features
- Want to focus on business logic over AI infrastructure
- Have budget for managed services ($250-300+/month)

The Azure SQL Basic tier migration we've planned will work perfectly with your existing custom RAG implementation!

## SQLite in Production with Vercel: Complete Guide

### **SQLite + Vercel Deployment Options**

Since your Azure subscription is read-only, let's explore using SQLite in production with Vercel:

### **Option 1: Vercel + Separate API Hosting (Recommended)**

**Architecture:**
- **Frontend**: Next.js on Vercel (free)
- **API**: .NET API on Railway/Render/Fly.io with SQLite (free/cheap)
- **Database**: SQLite file stored with API service

```yaml
# Deployment Architecture
Frontend (Vercel):
  - Next.js app
  - Static files
  - API calls to external API

API Service (Railway/Render):
  - .NET API with SQLite
  - File-based database
  - ~$0-5/month
```

**Pros:**
- ✅ **Free frontend hosting** on Vercel
- ✅ **Cheap API hosting** ($0-5/month)
- ✅ **No database costs** (SQLite is free)
- ✅ **Your existing code works** unchanged
- ✅ **All RAG features preserved**

**Cons:**
- ⚠️ **Two deployment targets** (frontend + API)
- ⚠️ **CORS configuration** needed
- ⚠️ **File backups** manual process

### **Option 2: Vercel Functions + External Database**

Vercel doesn't support persistent file storage, so SQLite files get wiped. You'd need:

```typescript
// Vercel API route example - requires external DB
// api/friends-contact/route.ts on Vercel
export async function POST(request: Request) {
  // Cannot use SQLite file on Vercel - no persistent storage
  // Must use external database (PostgreSQL, MySQL, etc.)
  
  const data = await request.json();
  
  // Option A: Forward to external .NET API
  const response = await fetch('https://your-api.railway.app/api/friends-contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  
  return Response.json(await response.json());
}
```

### **Option 3: Full Migration to Vercel-Compatible Stack**

**Complete Next.js + Vercel Postgres:**
```typescript
// This would require rewriting your .NET API in Node.js/TypeScript
import { sql } from '@vercel/postgres';

export async function POST(request: Request) {
  const { name, email, message } = await request.json();
  
  // Vercel Postgres (paid service)
  await sql`
    INSERT INTO friend_contacts (name, email, message, created_at)
    VALUES (${name}, ${email}, ${message}, NOW())
  `;
  
  return Response.json({ success: true });
}
```

**Migration Required:**
- ❌ **Rewrite .NET API** in TypeScript/Node.js
- ❌ **Rebuild RAG features** in JavaScript
- ❌ **Port Vertex AI integration** to Vercel
- ❌ **Lose existing working code**

### **Recommended Approach: Vercel + Railway API**

**Step 1: Deploy API to Railway (Free Tier)**
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and deploy
railway login
railway new --template 
railway up
```

**Step 2: Update Next.js for Production**
```typescript
// Update your API configuration
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-api.railway.app'  // Railway API endpoint
  : 'http://localhost:5000';        // Local development

// Update friend contact API route
export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    const response = await fetch(`${API_BASE_URL}/api/friends-contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    
    if (!response.ok) {
      throw new Error('API request failed');
    }
    
    const result = await response.json();
    return Response.json(result);
  } catch (error) {
    console.error('Error forwarding to API:', error);
    return Response.json({ error: 'Failed to submit' }, { status: 500 });
  }
}
```

**Step 3: Deploy to Vercel**
```bash
# Deploy frontend to Vercel
vercel --prod
```

### **Cost Comparison: Production Options**

| Option | Frontend | API/Database | Total/Month | Complexity |
|--------|----------|--------------|-------------|------------|
| **Vercel + Railway** | FREE | $0-5 | $0-5 | Low |
| **Vercel + Render** | FREE | $0-7 | $0-7 | Low |
| **Vercel + Supabase** | FREE | $0-25 | $0-25 | Medium |
| **Azure (when fixed)** | $10+ | $5+ | $15+ | Medium |
| **All Vercel** | FREE | $20+ | $20+ | High (rewrite) |

### **Railway Deployment Configuration**

**railway.json** (for your .NET API):
```json
{
  "build": {
    "builder": "NIXPACKS"
  },
  "deploy": {
    "startCommand": "dotnet api.ApiService.dll",
    "healthcheckPath": "/health"
  }
}
```

**Environment Variables for Railway:**
```bash
ASPNETCORE_ENVIRONMENT=Production
ASPNETCORE_URLS=http://0.0.0.0:$PORT
ConnectionStrings__DefaultConnection=Data Source=PortfolioDb.db
```

### **SQLite Backup Strategy for Production**

**Automated Backup Script:**
```bash
#!/bin/bash
# backup-sqlite.sh
DATE=$(date +%Y%m%d_%H%M%S)
cp PortfolioDb.db "backups/PortfolioDb_$DATE.db"

# Upload to cloud storage (optional)
# railway volume backup or similar
```

### **CORS Configuration for Cross-Origin API**

**Update your .NET API Program.cs:**
```csharp
// Add CORS for Vercel domain
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowVercelFrontend", policy =>
    {
        policy.WithOrigins(
            "http://localhost:3000",                    // Local dev
            "https://your-portfolio.vercel.app",        // Vercel production
            "https://*.vercel.app"                      // Vercel preview deployments
        )
        .AllowAnyHeader()
        .AllowAnyMethod();
    });
});

// Use CORS
app.UseCors("AllowVercelFrontend");
```

### **Final Recommendation**

**Best approach for your situation:**

1. ✅ **Keep your .NET API with SQLite** (working, includes RAG features)
2. ✅ **Deploy API to Railway** (free tier, SQLite support)
3. ✅ **Deploy frontend to Vercel** (free)
4. ✅ **Total cost: $0-5/month**
5. ✅ **All existing features preserved**

This gives you:
- Production-ready deployment
- Minimal costs
- Your RAG/AI features intact
- Professional hosting
- Easy to maintain

**Want to proceed with the Railway + Vercel approach?** This avoids the Azure subscription issues completely while keeping your costs near zero!
