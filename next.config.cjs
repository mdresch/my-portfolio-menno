// const ContentSecurityPolicy = [
//   "default-src 'self';",
//   "script-src 'self' 'unsafe-eval' 'unsafe-inline' blob: https://giscus.app https://va.vercel-scripts.com https://vercel.live https://static.hotjar.com https://script.hotjar.com https://www.googletagmanager.com https://www.google-analytics.com https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/;", // Added reCAPTCHA domains for Firebase App Check
//   "child-src 'self' blob:;",
// ];

const { withSentryConfig } = require('@sentry/nextjs');

const ContentSecurityPolicy = [
  "default-src 'self';",
  "script-src 'self' 'unsafe-eval' 'unsafe-inline' blob: https://giscus.app https://va.vercel-scripts.com https://vercel.live https://static.hotjar.com https://script.hotjar.com https://www.googletagmanager.com https://www.google-analytics.com https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/ https://www.google.com/ https://www.gstatic.com/;",
  "child-src 'self' blob:;",
  "style-src 'self' 'unsafe-inline' https://giscus.app;", // Allow giscus styles
  "img-src * blob: data:;",
  "media-src 'none';",
  "connect-src * https://*.hotjar.com;",
  "font-src 'self';",
  "worker-src 'self' blob:;",  
  "frame-src 'self' https://vars.hotjar.com https://giscus.app https://vercel.live https://www.google.com https://www.gstatic.com;" // Allow giscus frames and reCAPTCHA frames
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
  experimental: {
    // Exclude these heavy packages from server component bundling to reduce build memory
    serverComponentsExternalPackages: [
      /^@opentelemetry\//,
      /^@genkit-ai\//,
      'genkit',
      'dotprompt',
      'handlebars',
    ],
  },
  // Disable SWC minification to lower memory usage during build
  swcMinify: false,
  // Disable source maps for production bundles
  productionBrowserSourceMaps: false,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // This is a temporary solution until we can fix the type issue.
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning instead of error for ESLint
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

module.exports = withSentryConfig(nextConfig, {
  // For all available options, see:
  // https://www.npmjs.com/package/@sentry/webpack-plugin#options

  org: "cba-og",
  project: "my-portfolio-menno",

  // Only print logs for uploading source maps in CI
  silent: !process.env.CI,

  // For all available options, see:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  // Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
  // This can increase your server load as well as your hosting bill.
  // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
  // side errors will fail.
  tunnelRoute: "/monitoring",

  // Automatically tree-shake Sentry logger statements to reduce bundle size
  disableLogger: true,

  // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
  // See the following for more information:
  // https://docs.sentry.io/product/crons/
  // https://vercel.com/docs/cron-jobs
  automaticVercelMonitors: true,
});
