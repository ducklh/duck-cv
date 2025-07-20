/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure proper image optimization
  images: {
    domains: ['media.licdn.com'],
    unoptimized: false,
  },
  // Output configuration for Vercel
  output: 'standalone',
  // Ensure proper TypeScript handling
  typescript: {
    ignoreBuildErrors: false,
  },
  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: false,
  },
};

module.exports = nextConfig;
