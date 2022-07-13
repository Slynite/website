/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cloud.slynite.com'],
  },
  experimental: {
    outputStandalone: true,
  },
}

module.exports = nextConfig;