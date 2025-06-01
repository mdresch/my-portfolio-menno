/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Extreme optimization for minimal build mode
    serverComponentsExternalPackages: [
      /^@opentelemetry\//,
      /^@genkit-ai\//,
      'genkit',
      'dotprompt',
      'handlebars',
      '@sentry/nextjs',
      'firebase',
      'firebase-admin',
      'd3',
      'recharts',
      '@vercel/analytics',
      '@vercel/speed-insights',
      '@mdx-js/react',
      '@radix-ui',
      '@azure-rest',
      '@google-cloud',
      '@hotjar',
      'next-recaptcha-v3',
    ],
  },
  // Disable SWC minification to lower memory usage during build
  swcMinify: false,
  // Disable source maps for production bundles
  productionBrowserSourceMaps: false,
  output: 'standalone', // Creates a standalone build that's easier to deploy
  typescript: {
    // Allow production builds to succeed with type errors
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ignore ESLint during builds
    ignoreDuringBuilds: true,
  },
  // Disable image optimization during build to save memory
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.ecb.europa.eu',
        port: '',
        pathname: '/**',
      },
    ],
  },
  webpack(config, { isServer }) {
    // Disable source maps to reduce memory usage
    config.devtool = false;
    
    // Extreme minimal build mode
    if (process.env.NEXT_MINIMAL_BUILD === 'true') {
      // Remove most optimizations and plugins
      config.optimization = {
        ...config.optimization,
        minimize: false,
        splitChunks: {
          cacheGroups: {
            default: false,
          },
        },
        runtimeChunk: {
          name: false,
        },
      };
      
      // Disable non-critical features
      if (!isServer) {
        config.resolve.fallback = {
          ...config.resolve.fallback,
          fs: false,
          path: false,
          os: false,
          crypto: false,
          stream: false,
          http: false,
          https: false,
          zlib: false,
          net: false,
          tls: false,
          child_process: false,
          '@opentelemetry/winston-transport': false,
          '@opentelemetry/exporter-jaeger': false,
        };
      }
    }

    // Include externals for server build
    if (isServer) {
      // List of packages to externalize
      const externalModules = [
        '@opentelemetry',
        '@genkit-ai',
        'genkit',
        'dotprompt',
        'handlebars',
        'd3',
        'recharts',
        '@sentry/nextjs',
        '@vercel/analytics',
        '@vercel/speed-insights',
        'firebase',
        'firebase-admin',
        '@mdx-js/react',
        '@radix-ui',
        '@azure-rest',
        '@google-cloud',
        '@hotjar',
        'next-recaptcha-v3',
      ];
      
      // Create externals pattern
      const externalsPatterns = externalModules.map(mod => 
        new RegExp(`^${mod.replace(/\//g, '\\/')}(?!\\.css$).*$`)
      );
      
      config.externals = Array.isArray(config.externals)
        ? [...config.externals, ...externalsPatterns]
        : [config.externals || {}, ...externalsPatterns];
    }
    
    // Aggressively suppress all warnings
    config.ignoreWarnings = [];
    
    return config;
  },
};

module.exports = nextConfig;
