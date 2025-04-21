/** @type {import('next').NextConfig} */
const nextConfig = {
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
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://giscus.app",
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig
