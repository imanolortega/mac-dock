/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['uploads-ssl.webflow.com'],
  },
}

module.exports = nextConfig
