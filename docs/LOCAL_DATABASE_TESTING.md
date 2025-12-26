# Local Database Testing Guide

This guide covers all the ways to test your PostgreSQL database connection in local development.

## ✅ Quick Test

The fastest way to test your database connection:

```bash
npm run test:db
```

This runs a comprehensive test that checks:
- ✅ Database connection
- ✅ Database version
- ✅ Schema existence
- ✅ Data access
- ✅ Prisma queries

## 🧪 Testing Methods

### 1. Connection Test Script

**Command:**
```bash
npm run test:db
# or
node scripts/test-database-connection.js
```

**What it tests:**
- Basic connection to PostgreSQL
- Database version query
- Schema validation (Project table)
- Data count and retrieval
- Prisma client functionality

**Expected output:**
```
✅ All connection tests passed!
📊 Connection Summary:
   - Database: Connected
   - Schema: Initialized
   - Projects: 7
```

### 2. Prisma Studio (Visual Database Browser)

**Command:**
```bash
npx prisma studio
```

**What it does:**
- Opens a web interface at `http://localhost:5555`
- Visual database browser
- View, edit, and delete records
- Test queries interactively

**Usage:**
1. Run `npx prisma studio`
2. Open `http://localhost:5555` in your browser
3. Click on "Project" table to view/edit projects
4. Use the interface to test CRUD operations

### 3. Test API Endpoints

**Start your development server:**
```bash
npm run dev
```

**Test the projects API:**

```bash
# Get all projects
curl http://localhost:3000/api/projects

# Get limited projects
curl http://localhost:3000/api/projects?limit=3

# Test with PowerShell
Invoke-WebRequest -Uri http://localhost:3000/api/projects | Select-Object -ExpandProperty Content
```

**Expected response:**
```json
[
  {
    "id": 1,
    "title": "Project Name",
    "description": "Project description",
    "technologies": ["React", "Next.js"],
    ...
  }
]
```

### 4. Test Health Endpoint

**Command:**
```bash
curl http://localhost:3000/api/health
```

**What it checks:**
- Overall application health
- Backend API status (if configured)
- Database connectivity (indirect)
- Chat service status

### 5. Prisma CLI Commands

**Check database status:**
```bash
# View database schema
npx prisma db pull

# Open Prisma Studio
npx prisma studio

# Generate Prisma client
npx prisma generate

# Check migration status
npx prisma migrate status
```

**Run migrations:**
```bash
# Apply pending migrations
npx prisma migrate deploy

# Create a new migration
npx prisma migrate dev --name your_migration_name
```

**Seed the database:**
```bash
# Seed projects from markdown files
npm run seed:projects
```

## 🔍 Advanced Testing

### Test CRUD Operations

Create a test script to verify all database operations:

```bash
# Run the CRUD test script
node scripts/test-database-crud.js
```

### Test with Different Environments

**Test with explicit DATABASE_URL:**
```bash
DATABASE_URL="your-connection-string" npm run test:db
```

**Test with .env.local:**
```bash
# .env.local takes precedence over .env
# Create .env.local with your connection string
npm run test:db
```

## 🐛 Troubleshooting

### Connection Fails

**Error: `P1001: Can't reach database server`**
- Check if `DATABASE_URL` is set correctly
- Verify the host/port in connection string
- Check firewall/network settings
- Try direct connection (non-pooler) if pooler fails

**Error: `P1000: Authentication failed`**
- Verify username and password
- Check if credentials are correct in connection string
- Ensure database user has proper permissions

**Error: `P1003: Database does not exist`**
- Verify database name in connection string
- Check if database was created in Neon console

### Schema Issues

**Error: `Table 'Project' does not exist`**
```bash
# Run migrations
npx prisma migrate deploy
```

**Error: `Migration out of sync`**
```bash
# Check migration status
npx prisma migrate status

# Reset if needed (⚠️ deletes all data)
npx prisma migrate reset
```

### SSL Errors

**Error: `SSL connection required`**
- Ensure `?sslmode=require` is in your connection string
- Neon requires SSL connections

## 📊 Testing Checklist

Use this checklist to verify your database setup:

- [ ] `npm run test:db` passes all tests
- [ ] `npx prisma studio` opens successfully
- [ ] API endpoint `/api/projects` returns data
- [ ] Can view projects in Prisma Studio
- [ ] Can create new project via API
- [ ] Health endpoint shows database as connected
- [ ] Migrations are up to date
- [ ] Database contains expected data

## 🚀 Quick Start Testing

**Complete test sequence:**
```bash
# 1. Test connection
npm run test:db

# 2. Start dev server (in another terminal)
npm run dev

# 3. Test API endpoint
curl http://localhost:3000/api/projects

# 4. Open Prisma Studio (in another terminal)
npx prisma studio
```

## 💡 Tips

1. **Keep Prisma Studio open** while developing to see changes in real-time
2. **Use the test script** before committing changes
3. **Check API responses** to verify data is being returned correctly
4. **Monitor connection pool** if you see connection errors
5. **Use `.env.local`** for local development (not committed to git)

## 📝 Example Test Session

```bash
# Terminal 1: Start dev server
npm run dev

# Terminal 2: Test database
npm run test:db
# ✅ All tests pass

# Terminal 3: Open Prisma Studio
npx prisma studio
# Opens at http://localhost:5555

# Browser: Test API
# Visit: http://localhost:3000/api/projects
# Should see JSON with projects
```

---

**Need help?** Check the [Database Review](./DATABASE_REVIEW.md) for more details on configuration.

