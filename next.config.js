/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: [
      '/',
      '/tests/',
      '/news/'
    ],
  },
}

module.exports = nextConfig
