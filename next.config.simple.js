// Updated Next.js configuration for Next.js 15.3.0
const { withSentryConfig } = require('@sentry/nextjs');

const ContentSecurityPolicy = [
  "default-src 'self';",
  "script-src 'self' 'unsafe-eval' 'unsafe-inline' blob: https://giscus.app https://va.vercel-scripts.com https://vercel.live https://static.hotjar.com https://script.hotjar.com https://www.googletagmanager.com https://www.google-analytics.com https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/ https://www.google.com/ https://www.gstatic.com/;",
  "child-src 'self' blob:;",
  "style-src 'self' 'unsafe-inline' https://giscus.app;", 
  "img-src * blob: data:;",
  "media-src 'none';",
  "connect-src * https://*.hotjar.com;",
  "font-src 'self';",
  "worker-src 'self' blob:;",  
  "frame-src 'self' https://vars.hotjar.com https://giscus.app https://vercel.live https://www.google.com https://www.gstatic.com;"
].join(' ');

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, ''),
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()'
  }
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next.js 15.3.0 compatible configuration
  experimental: {
    // New features and settings
    clientTraceMetadata: true,
  },
  // Moved from experimental to root in Next.js 15
  serverExternalPackages: [
    '@opentelemetry/api',
    '@opentelemetry/core',
    '@opentelemetry/sdk-trace-base',
    '@opentelemetry/resources',
    '@genkit-ai/core',
    'genkit',
    'dotprompt',
    'handlebars',
  ],
  // Build optimizations
  productionBrowserSourceMaps: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
  images: {
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
    // Exclude certain server-only modules from client bundles
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        'fs': false,
        '@opentelemetry/winston-transport': false,
        '@opentelemetry/exporter-jaeger': false,
      };
      // Null-loader for handlebars in client bundle
      config.module.rules.push({
        test: /handlebars\/lib\/index\.js$/,
        use: 'null-loader',
      });
    }
    // Suppress warnings about require.extensions and critical dependencies
    config.ignoreWarnings = [
      ...(config.ignoreWarnings || []),
      { message: /require\.extensions is not supported by webpack/ },
      { message: /Critical dependency: the request of a dependency is an expression/ },
    ];
    // Exclude heavy instrumentation modules from server bundles
    if (isServer) {
      const externalRegexes = [
        /^@opentelemetry\//,
        /^@genkit-ai\//,
        /^genkit\//,
        /^dotprompt/, 
        /^handlebars/,
      ];
      config.externals = Array.isArray(config.externals)
        ? config.externals.concat(externalRegexes)
        : [config.externals, ...externalRegexes];
    }
    return config;
  },
};

// Basic config without Sentry for troubleshooting
module.exports = nextConfig;

// Uncomment to enable Sentry once basic build is working
/*
module.exports = withSentryConfig(nextConfig, {
  org: "cba-og",
  project: "my-portfolio-menno",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  tunnelRoute: "/monitoring",
  disableLogger: true,
  automaticVercelMonitors: true,
});
*/
