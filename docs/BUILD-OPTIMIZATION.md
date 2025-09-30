# Build Optimization Guide

This document provides guidance on building the portfolio site with different optimization strategies to address memory issues during the build process.

## Available Build Scripts

The following build scripts are available to help with different build scenarios:

### Standard Builds
- `npm run build` - Standard build with 3GB memory limit
- `npm run build:prod` - Standard build with 4GB memory limit using the full configuration

### Optimized Builds
- `npm run build:simple` - Build with simplified configuration (fewer features)
- `npm run build:ultra-simple` - Build with ultra-simplified configuration (minimal features)
- `npm run build:minimal` - Build with minimal configuration optimized for memory usage

### Progressive Builds
- `npm run build:progressive` - Attempts multiple build strategies in sequence until one succeeds
- `npm run build:incremental` - Builds the site incrementally with minimal pages
- `npm run build:deployable` - Creates a static placeholder site that can be deployed immediately

### Analysis Tools
- `npm run analyze:pages` - Analyzes pages to identify those causing memory issues

## Build Strategy Recommendations

### For Development
Use the standard build:
```
npm run build
```

### For CI/CD Deployment
Use the progressive build to try different strategies automatically:
```
npm run build:progressive
```

### When Facing Memory Issues
If you encounter memory issues, try these approaches in order:

1. **Analyze problematic pages**:
   ```
   npm run analyze:pages
   ```

2. **Try simplified builds**:
   ```
   npm run build:simple
   ```
   or
   ```
   npm run build:ultra-simple
   ```

3. **Create a deployable static version**:
   ```
   npm run build:deployable
   ```

## Troubleshooting Build Issues

Common build issues and solutions:

### Memory Issues
- Increase NODE_OPTIONS memory allocation: `NODE_OPTIONS="--max_old_space_size=8192"`
- Use `--v8-pool-size=0` to disable pool allocation
- Try using the progressive build: `npm run build:progressive`

### Configuration Issues
- Ensure `next.config.js` has CommonJS format (not ES modules)
- Check that all imports are correct in pages
- Verify that `serverComponentsExternalPackages` is updated to `serverExternalPackages` for Next.js 15

### TypeScript Errors
- TypeScript errors are ignored during builds but can cause other issues
- Run `npx tsc --noEmit` to find TypeScript errors
- Focus on fixing errors in problematic pages identified by `analyze:pages`

## Recommended Approach for Production

For production deployments, the recommended approach is:

1. Run page analysis: `npm run analyze:pages`
2. Fix identified problematic pages
3. Try standard build: `npm run build`
4. If standard build fails, use progressive build: `npm run build:progressive`
5. Deploy the resulting build artifacts
