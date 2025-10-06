# Vercel Deployment Guide

This guide explains how to deploy your portfolio to Vercel with PostgreSQL database.

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **PostgreSQL Database**: Set up a Neon, Supabase, or other PostgreSQL database
3. **Vercel CLI**: Install with `npm install -g vercel`

## Environment Variables

### Required Variables

Set these in your Vercel dashboard under Project Settings > Environment Variables:

#### Database
```env
DATABASE_URL="postgresql://username:password@host:port/database?schema=public"
```

#### API Configuration
```env
NEXT_PUBLIC_API_BASE_URL="https://your-domain.vercel.app/api"
```

#### Firebase (Optional - if using Firebase Auth)
```env
NEXT_PUBLIC_FIREBASE_API_KEY="your-firebase-api-key"
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="your-project.firebaseapp.com"
NEXT_PUBLIC_FIREBASE_PROJECT_ID="your-project-id"
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="your-project.appspot.com"
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="123456789"
NEXT_PUBLIC_FIREBASE_APP_ID="1:123456789:web:your-app-id"
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID="G-XXXXXXXXXX"
```

#### Google Cloud (for Vertex AI)
```env
GOOGLE_CLOUD_PROJECT_ID="your-project-id"
VERTEX_AI_PROJECT_ID="your-project-id"
GOOGLE_CLOUD_LOGGING_DISABLED="true"
```

## Deployment Steps

### 1. Manual Deployment

```bash
# Install dependencies
npm install

# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate deploy

# Seed database
npm run seed:projects

# Deploy to Vercel
vercel --prod
```

### 2. Automatic Deployment with GitHub Actions

1. **Set up GitHub Secrets**:
   - Go to your GitHub repository
   - Navigate to Settings > Secrets and variables > Actions
   - Add the following secrets:
     - `DATABASE_URL`: Your PostgreSQL connection string
     - `VERCEL_TOKEN`: Your Vercel token (get from Vercel dashboard)
     - `ORG_ID`: Your Vercel organization ID
     - `PROJECT_ID`: Your Vercel project ID

2. **Push to main branch**: The GitHub Action will automatically deploy

### 3. Using the Deployment Script

```bash
# Make script executable
chmod +x scripts/deploy-vercel.sh

# Set environment variables
export DATABASE_URL="your-postgresql-connection-string"

# Run deployment script
./scripts/deploy-vercel.sh
```

## Database Setup

### Using Neon PostgreSQL (Recommended)

1. Sign up at [neon.tech](https://neon.tech)
2. Create a new project
3. Copy the connection string
4. Set as `DATABASE_URL` in Vercel

### Using Supabase

1. Sign up at [supabase.com](https://supabase.com)
2. Create a new project
3. Go to Settings > Database
4. Copy the connection string
5. Set as `DATABASE_URL` in Vercel

## Troubleshooting

### Common Issues

1. **Database Connection Errors**:
   - Verify `DATABASE_URL` is correctly set
   - Ensure database allows connections from Vercel IPs
   - Check if SSL is required in connection string

2. **Build Failures**:
   - Ensure all environment variables are set
   - Check if Prisma migrations are up to date
   - Verify Node.js version compatibility

3. **Runtime Errors**:
   - Check Vercel function logs
   - Verify API routes are working
   - Test database connectivity

### Debugging Commands

```bash
# Check Prisma connection
npx prisma db pull

# View database schema
npx prisma studio

# Reset database (development only)
npx prisma migrate reset

# Generate Prisma client
npx prisma generate
```

## Performance Optimization

1. **Database Connection Pooling**: Use connection pooling for better performance
2. **Caching**: Implement Redis or Vercel KV for caching
3. **CDN**: Vercel automatically provides global CDN
4. **Image Optimization**: Use Next.js Image component with Vercel's image optimization

## Monitoring

1. **Vercel Analytics**: Enable in Vercel dashboard
2. **Database Monitoring**: Use your database provider's monitoring tools
3. **Error Tracking**: Consider integrating Sentry or similar service

## Security

1. **Environment Variables**: Never commit sensitive data to git
2. **Database Security**: Use strong passwords and enable SSL
3. **API Security**: Implement proper authentication and rate limiting
4. **CORS**: Configure CORS properly for production

## Cost Optimization

1. **Database**: Choose appropriate database tier
2. **Vercel**: Monitor function execution time and bandwidth
3. **CDN**: Optimize image and asset sizes
4. **Caching**: Reduce database queries with proper caching
