/** @type {import('next').NextConfig} */
const nextConfig = {
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
