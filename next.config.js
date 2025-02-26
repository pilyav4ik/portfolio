/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/djsx9wdej/**',
      },
      {
        protocol: 'https',
        hostname: 'asset.cloudinary.com',
        port: '',
        pathname: '/djsx9wdej/**',
      }
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  }
}

module.exports = nextConfig
