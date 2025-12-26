# Setting Up Database Environment Variables

## Quick Setup for Neon PostgreSQL

### 1. Create `.env.local` file

Create a `.env.local` file in the root of your project:

```env
# Neon PostgreSQL Database Connection
# Format: postgresql://username:password@host:port/database?sslmode=require&channel_binding=require
DATABASE_URL="postgresql://neondb_owner:npg_6T4HAmIRGDct@ep-crimson-brook-a9nl7ha6-pooler.gwc.azure.neon.tech/neondb?sslmode=require&channel_binding=require"
```

### 2. Important Notes

⚠️ **Security:**
- Never commit `.env.local` to git (it's already in `.gitignore`)
- The connection string contains sensitive credentials
- For production, use environment variables in your hosting platform (Vercel, etc.)

### 3. Test the Connection

After setting up the environment variable, test the connection:

```bash
# Test database connection
node scripts/test-database-connection.js

# Or using npm script (if added to package.json)
npm run test:db
```

### 4. Initialize Database Schema

If this is a fresh database, run migrations:

```bash
# Generate Prisma client
npx prisma generate

# Run migrations to create tables
npx prisma migrate deploy

# Seed the database with projects
npm run seed:projects
```

### 5. Verify Setup

```bash
# Open Prisma Studio to view your database
npx prisma studio
```

This will open a web interface at `http://localhost:5555` where you can view and edit your database.

## Connection String Format

Your Neon connection string includes:
- **Host:** `ep-crimson-brook-a9nl7ha6-pooler.gwc.azure.neon.tech`
- **Database:** `neondb`
- **SSL Mode:** `require` (required for Neon)
- **Channel Binding:** `require` (additional security)
- **Pooler:** Using Neon's connection pooler (recommended for serverless)

## For Vercel Deployment

1. Go to your Vercel project settings
2. Navigate to **Environment Variables**
3. Add `DATABASE_URL` with your connection string
4. Select environments: Production, Preview, Development
5. Redeploy your application

## Troubleshooting

### Connection Timeout
- Check if your IP is allowed (Neon allows all IPs by default)
- Verify the connection string is correct
- Try using the direct connection (non-pooler) if pooler fails

### SSL Errors
- Ensure `?sslmode=require` is in your connection string
- Neon requires SSL connections

### Authentication Errors
- Verify username and password are correct
- Check if the database user has proper permissions

### Migration Errors
- Ensure the database exists
- Check if migrations have already been applied
- Try: `npx prisma migrate reset` (⚠️ This will delete all data!)

