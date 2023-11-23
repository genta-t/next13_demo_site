/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: [
      '/',
      '/tests'
    ],
  },
}

module.exports = nextConfig
