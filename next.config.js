/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ibb.co'
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com'
      },
    ]
  }
}

module.exports = nextConfig