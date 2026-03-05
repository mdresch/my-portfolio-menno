/** @type {import('next').NextConfig} */
const webpack = require('webpack');

const nextConfig = {
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  // Declare Turbopack config to silence the webpack/Turbopack conflict error in Next.js 16
  turbopack: {},
  images: {
    unoptimized: true,
    // Use remotePatterns instead of the deprecated `domains`
    remotePatterns: [
      { protocol: 'http', hostname: 'localhost' },
      { protocol: 'https', hostname: 'my-portfolio-menno.vercel.app', pathname: '/**' },
    ],
  },
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
