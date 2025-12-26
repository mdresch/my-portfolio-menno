# Database Configuration & Integration Review

**Date:** January 2025  
**Project:** my-portfolio-menno  
**Review Scope:** Database settings, configurations, and integrations

---

## Executive Summary

This portfolio project uses **multiple database systems** with different purposes:

1. **Primary Database:** PostgreSQL with Prisma ORM (Next.js frontend)
2. **Firebase Data Connect:** Configured but not actively used
3. **ASP.NET Core API Database:** Referenced in documentation but API directory not found in repository
4. **SQLite:** Referenced for local .NET API development

---

## 1. Primary Database: PostgreSQL with Prisma

### Configuration

**Location:** `prisma/schema.prisma`

```1:26:prisma/schema.prisma
// Prisma schema for Neon Postgres
// Run: npx prisma generate && npx prisma migrate dev

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model Project {
  id           Int      @id @default(autoincrement())
  title        String
  description  String?
  technologies String[]
  link         String?
  datePublished DateTime?
  category     String?
  screenshots  String[]
  outcomes     String[]
  challenges   String[]
  caseStudy    String?
  slug         String   @unique
}
```

### Connection Management

**Location:** `src/lib/prisma.ts`

```1:11:src/lib/prisma.ts
import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
```

**Analysis:**
- ✅ Proper singleton pattern for Prisma client
- ✅ Connection pooling handled by Prisma
- ✅ Development mode caching to prevent multiple instances
- ⚠️ Logging enabled in production (consider reducing to 'error' only)

### Database Schema

**Current Model:** `Project`
- Single table with comprehensive project information
- Uses PostgreSQL array types for `technologies`, `screenshots`, `outcomes`, `challenges`
- Unique constraint on `slug` for URL-friendly identifiers

**Migration Status:**
- Migration file exists: `prisma/migrations/20250915153841_my_portfolio_menno/migration.sql`
- Migration lock confirms PostgreSQL provider

### Environment Configuration

**Required Environment Variable:**
```env
DATABASE_URL="postgresql://username:password@host:port/database?schema=public"
```

**Deployment Targets:**
- **Vercel:** Uses `DATABASE_URL` from environment variables
- **Local Development:** Requires `.env.local` or `.env` file
- **Production:** Should use connection pooling (e.g., Neon, Supabase)

### Usage in Application

**API Routes Using Database:**
- `src/app/api/projects/route.ts` - GET and POST endpoints for projects
- Uses Prisma client for all database operations

**Seeding:**
- Script: `scripts/seed-projects.ts`
- Reads from `content/project/*.md` files
- Upserts projects by slug to prevent duplicates
- Command: `npm run seed:projects`

---

## 2. Firebase Data Connect

### Configuration

**Location:** `dataconnect/dataconnect.yaml`

```1:12:dataconnect/dataconnect.yaml
specVersion: "v1"
serviceId: "my-portfolio-menno"
location: "europe-west1"
schema:
  source: "./schema"
  datasource:
    postgresql:
      database: "postgres"
      cloudSql:
        instanceId: "my-portfolio-menno-fdc"
      # schemaValidation: "COMPATIBLE"
connectorDirs: ["./connector"]
```

### Schema Status

**Location:** `dataconnect/schema/schema.gql`

**Status:** ⚠️ **NOT ACTIVELY USED**
- All schema definitions are commented out
- Example schema for movie review app is present but inactive
- No actual tables or queries defined

### Connector Configuration

**Location:** `dataconnect/connector/connector.yaml`

```1:7:dataconnect/connector/connector.yaml
connectorId: default
generate:
  javascriptSdk:
    outputDir: ..\..\dataconnect-generated\js\default-connector
    package: "@firebasegen/default-connector"
    packageJsonDir: ..\..\dataconnect-generated
    react: true
```

**Queries & Mutations:**
- `dataconnect/connector/queries.gql` - All commented out
- `dataconnect/connector/mutations.gql` - All commented out

**Analysis:**
- ⚠️ Firebase Data Connect is configured but not implemented
- ⚠️ Cloud SQL instance configured but no schema defined
- 💡 Consider removing if not planning to use, or implement if needed

---

## 3. ASP.NET Core API Database

### Documentation References

**Startup.md** mentions:
- LocalDB for local development
- API running on `http://localhost:5154/api`
- SQL Server LocalDB requirement

**GitHub Actions Workflow:**
- `.github/workflows/database-seed.yml` references:
  - `./api/PortfolioApi.csproj`
  - Entity Framework Core migrations
  - Azure SQL Database connection strings
  - `PortfolioContext` DbContext

**Setup Scripts:**
- `setup-friends-contact-db.sh` and `.bat` reference:
  - `api/api.ApiService` directory
  - EF Core migrations for `FriendContact` table

### Current Status

**⚠️ ISSUE:** API directory not found in repository
- Documentation references `./api/` directory
- Scripts reference `api/api.ApiService/`
- No `.csproj` files found in repository
- No C# source files found

**Possible Scenarios:**
1. API is in a separate repository
2. API directory was removed/not committed
3. API is planned but not yet implemented
4. API exists but is gitignored

### Database Types Referenced

1. **LocalDB (SQL Server):**
   - Mentioned in `Startup.md`
   - For local development

2. **Azure SQL Database:**
   - Referenced in GitHub Actions
   - Production/staging environments
   - Connection strings stored in GitHub Secrets

3. **SQLite:**
   - Referenced in `check-database.js`
   - Path: `api/api.ApiService/PortfolioDb.db`
   - For local development alternative

---

## 4. Integration Points

### Health Check Endpoint

**Location:** `src/app/api/health/route.ts`

The health check endpoint monitors:
- Backend API availability (via `NEXT_PUBLIC_API_BASE_URL`)
- Database connectivity (indirectly through backend)
- Chat service status

**Database Health Check:**
- Attempts to fetch `/projects` from backend API
- Does NOT directly check Prisma/PostgreSQL connection
- ⚠️ **Gap:** No direct database health check for Prisma connection

### API Routes

**Projects API:** `src/app/api/projects/route.ts`
- ✅ Uses Prisma client directly
- ✅ Proper error handling
- ✅ Supports GET (list) and POST (create)

**Friends Contact API:** `src/app/api/friends-contact/route.ts`
- ⚠️ Currently only logs to console
- ⚠️ No database persistence implemented
- Comment indicates: "Removed .NET API dependency - using local storage only"

---

## 5. Deployment Configuration

### Vercel Configuration

**Location:** `vercel.json`

```1:12:vercel.json
{
  "framework": "nextjs",
  "buildCommand": "npx prisma generate && npx prisma migrate deploy && npm run build",
  "installCommand": "npm install",
  "devCommand": "npm run dev",
  "regions": ["iad1"],
  "functions": {
    "src/app/api/**/*.ts": {
      "maxDuration": 30
    }
  }
}
```

**Analysis:**
- ✅ Prisma client generation in build
- ✅ Database migrations run during deployment
- ✅ Proper function timeout configuration

### Package.json Scripts

**Database-related scripts:**
```json
"seed:projects": "tsx scripts/seed-projects.ts",
"postinstall": "npx prisma generate",
"build:vercel": "npx prisma generate && npx prisma migrate deploy && next build",
"build:production": "npx prisma generate && next build",
"deploy:db": "npx prisma migrate deploy",
"deploy:seed": "npm run deploy:db && npm run seed:projects"
```

**Analysis:**
- ✅ Comprehensive database setup scripts
- ✅ Automatic Prisma client generation on install
- ✅ Separate scripts for different deployment scenarios

---

## 6. Issues & Recommendations

### Critical Issues

1. **Missing API Directory**
   - ⚠️ Documentation references `.NET API` but directory not found
   - **Action:** Clarify if API is separate repository or needs to be added
   - **Action:** Update documentation if API is deprecated

2. **Firebase Data Connect Not Used**
   - ⚠️ Configured but no active schema
   - **Action:** Either implement or remove configuration
   - **Action:** Clean up unused generated files if not using

3. **Friends Contact Form**
   - ⚠️ No database persistence
   - **Action:** Implement Prisma model for friend contacts
   - **Action:** Add database persistence to API route

### Recommendations

1. **Database Health Check**
   - Add direct Prisma connection health check
   - Implement connection retry logic
   - Add connection pool monitoring

2. **Environment Variable Management**
   - Document all required environment variables
   - Create `.env.example` file
   - Add validation for missing `DATABASE_URL`

3. **Database Migrations**
   - Consider adding migration rollback strategy
   - Add migration status check endpoint
   - Document migration workflow

4. **Connection Pooling**
   - Verify connection pooling is configured for production
   - Consider using connection pooler (e.g., PgBouncer) for Neon/Supabase
   - Monitor connection pool usage

5. **Error Handling**
   - Add database connection error recovery
   - Implement graceful degradation when database is unavailable
   - Add logging for database operations

6. **Security**
   - Ensure `DATABASE_URL` is not exposed in client-side code
   - Use connection string with SSL in production
   - Rotate database credentials regularly

7. **Documentation**
   - Update `Startup.md` to reflect current database setup
   - Document local development database setup
   - Add troubleshooting guide for database issues

---

## 7. Database Architecture Summary

### Current State

```
┌─────────────────────────────────────────┐
│         Next.js Application             │
│                                         │
│  ┌──────────────────────────────────┐  │
│  │   Prisma Client (PostgreSQL)    │  │
│  │   - Projects table               │  │
│  │   - Connection: DATABASE_URL    │  │
│  └──────────────────────────────────┘  │
│                                         │
│  ┌──────────────────────────────────┐  │
│  │   Firebase Data Connect          │  │
│  │   - Configured but unused        │  │
│  └──────────────────────────────────┘  │
└─────────────────────────────────────────┘
           │
           │ (if backend exists)
           ▼
┌─────────────────────────────────────────┐
│      ASP.NET Core API (Missing?)       │
│                                         │
│  ┌──────────────────────────────────┐  │
│  │   Entity Framework Core          │  │
│  │   - Azure SQL / LocalDB          │  │
│  │   - FriendContact table          │  │
│  └──────────────────────────────────┘  │
└─────────────────────────────────────────┘
```

### Recommended Architecture

```
┌─────────────────────────────────────────┐
│         Next.js Application             │
│                                         │
│  ┌──────────────────────────────────┐  │
│  │   Prisma Client (PostgreSQL)     │  │
│  │   - Projects                     │  │
│  │   - FriendContacts (to add)      │  │
│  │   - Connection pooling enabled   │  │
│  └──────────────────────────────────┘  │
└─────────────────────────────────────────┘
           │
           │ DATABASE_URL
           ▼
┌─────────────────────────────────────────┐
│      PostgreSQL (Neon/Supabase)        │
│      - Production database              │
│      - Connection pooling               │
│      - SSL enabled                     │
└─────────────────────────────────────────┘
```

---

## 8. Action Items

### Immediate Actions

- [ ] Verify if `.NET API` directory exists elsewhere or needs to be created
- [ ] Update `Startup.md` to reflect current database setup (PostgreSQL, not LocalDB)
- [ ] Add `.env.example` with required environment variables
- [ ] Implement database persistence for Friends Contact form

### Short-term Actions

- [ ] Add direct database health check to health endpoint
- [ ] Create Prisma model for FriendContact
- [ ] Add database connection error handling
- [ ] Document local development database setup

### Long-term Actions

- [ ] Decide on Firebase Data Connect: implement or remove
- [ ] Add database migration rollback strategy
- [ ] Implement connection pool monitoring
- [ ] Add database backup strategy documentation

---

## 9. Environment Variables Checklist

### Required for Next.js (Prisma)

```env
# Database
DATABASE_URL="postgresql://user:password@host:port/database?schema=public"

# Optional - API Configuration
NEXT_PUBLIC_API_BASE_URL="https://your-domain.vercel.app/api"
```

### Optional - Firebase

```env
NEXT_PUBLIC_FIREBASE_API_KEY="..."
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="..."
NEXT_PUBLIC_FIREBASE_PROJECT_ID="..."
# ... other Firebase config
```

### Optional - Google Cloud (Vertex AI)

```env
GOOGLE_CLOUD_PROJECT_ID="..."
VERTEX_AI_PROJECT_ID="..."
GOOGLE_CLOUD_LOGGING_DISABLED="true"
```

---

## 10. Testing Recommendations

1. **Database Connection Tests**
   - Test Prisma client initialization
   - Test connection pooling
   - Test connection retry logic

2. **Migration Tests**
   - Test migration up/down
   - Test migration on fresh database
   - Test migration on existing database

3. **API Integration Tests**
   - Test project CRUD operations
   - Test error handling
   - Test concurrent requests

4. **Health Check Tests**
   - Test health endpoint with database available
   - Test health endpoint with database unavailable
   - Test health endpoint response times

---

## Conclusion

The project has a **solid foundation** with Prisma and PostgreSQL, but there are **inconsistencies** between documentation and actual implementation:

- ✅ Prisma/PostgreSQL setup is well-configured
- ⚠️ Firebase Data Connect is configured but unused
- ⚠️ .NET API references exist but API directory is missing
- ⚠️ Friends Contact form lacks database persistence

**Priority:** Address the missing API directory clarification and implement database persistence for the Friends Contact form.

