/** @type {import('next').NextConfig} */
const webpack = require('webpack');

const nextConfig = {
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: false, // Enable image optimization for better performance
    domains: ['localhost', 'vercel.app', 'my-portfolio-menno.vercel.app'],
    formats: ['image/webp', 'image/avif'], // Modern image formats
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Performance optimizations
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@heroicons/react', 'lucide-react'],
  },
  // Compression and caching
  compress: true,
  poweredByHeader: false,
  webpack: (config, { isServer }) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      process: require.resolve('process/browser'),
    };
    
    // Add process polyfill for client-side
    if (!isServer) {
      config.plugins.push(
        new webpack.ProvidePlugin({
          process: 'process/browser',
        })
      );
      
      // Improve chunk loading for html2pdf.js
      // Prevent aggressive code-splitting that can cause chunk loading errors
      if (config.optimization && config.optimization.splitChunks) {
        const existingCacheGroups = config.optimization.splitChunks.cacheGroups || {};
        config.optimization.splitChunks = {
          ...config.optimization.splitChunks,
          cacheGroups: {
            ...existingCacheGroups,
            html2pdf: {
              test: /[\\/]node_modules[\\/]html2pdf\.js[\\/]/,
              name: 'html2pdf',
              chunks: 'async',
              priority: 20,
              enforce: true,
            },
          },
        };
      }
    }
    
    // Ensure Prisma works with Vercel
    if (isServer) {
      config.externals.push('@prisma/client');
    }
    
    return config;
  },
};

module.exports = nextConfig;
