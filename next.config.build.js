/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    // Enable TypeScript build errors for production builds
    ignoreBuildErrors: process.env.NODE_ENV !== 'production',
  },
  eslint: {
    // Enable ESLint checks for production builds
    ignoreDuringBuilds: process.env.NODE_ENV !== 'production',
  },
  // Disable any non-essential features
  poweredByHeader: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable any non-essential features
  poweredByHeader: false,
  compress: false,
  // Reduce memory usage during build
  experimental: {
    typedRoutes: false,
  },
  webpack: (config, { isServer }) => {
    // Disable webpack optimizations that consume memory
    config.optimization = {
      ...config.optimization,
      minimize: false,
    };
    
    return config;
  },
};

module.exports = nextConfig;
