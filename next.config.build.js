/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
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
