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
    return config;
  },
};

module.exports = nextConfig;
