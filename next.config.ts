import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Sentry pulls OpenTelemetry, which uses require-in-the-middle; webpack warns
  // about dynamic require even though this is fine at runtime on the server.
  serverExternalPackages: ["require-in-the-middle", "@opentelemetry/instrumentation"],

  webpack: (config) => {
    config.ignoreWarnings = [
      ...(Array.isArray(config.ignoreWarnings) ? config.ignoreWarnings : []),
      { message: /Critical dependency: require function is used in a way/ },
      { module: /[\\/]node_modules[\\/]require-in-the-middle[\\/]/ },
    ];
    return config;
  },
};

export default nextConfig;
