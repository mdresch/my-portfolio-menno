/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    domains: ['localhost', 'vercel.app', 'my-portfolio-menno.vercel.app'],
  },
  webpack: (config, { isServer }) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    
    // Ensure Prisma works with Vercel
    if (isServer) {
      config.externals.push('@prisma/client');
    }
    
    return config;
  },
};

module.exports = nextConfig;
