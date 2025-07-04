// Next.js config with only the bare essentials
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable all non-essential features
  reactStrictMode: true,
  // Disable type checking during build (we'll handle this separately)
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disable ESLint during builds
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Add logging for debugging
  onDemandEntries: {
    // Keep pages in memory for longer
    maxInactiveAge: 60 * 60 * 1000, // 1 hour
  },
  logging: {
    fullUrl: true,
    fetches: {
      fullUrl: true,
    },
  },
  // Basic image configuration
  images: {
    unoptimized: true, // For static exports
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allow all domains - we can restrict this later
      },
    ],
  },
  // Minimal webpack configuration
  webpack(config) {
    config.ignoreWarnings = [
      (warning) =>
        warning.message.includes("Critical dependency: the request of a dependency is an expression"),
    ];
    return config;
  },
};

module.exports = nextConfig;
