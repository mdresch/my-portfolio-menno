/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: [
      '@opentelemetry/winston-transport',
      '@opentelemetry/exporter-jaeger',
      '@genkit-ai/core',
      '@genkit-ai/dotprompt',
      'genkit',
      'handlebars',
    ],
  },
  swcMinify: false,
  productionBrowserSourceMaps: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
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
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        'fs': false,
      };
    }
    
    config.ignoreWarnings = [
      ...(config.ignoreWarnings || []),
      { message: /require\.extensions is not supported by webpack/ },
      { message: /Critical dependency: the request of a dependency is an expression/ },
    ];
    
    return config;
  },
};

module.exports = nextConfig;
