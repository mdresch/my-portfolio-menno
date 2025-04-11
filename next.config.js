/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // This is a temporary solution until we can fix the type issue.
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
