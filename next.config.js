/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'uploads-ssl.webflow.com',
      'upload.wikimedia.org',
      'freepngimg.com',
      'eshop.macsales.com',
    ],
  },
}

module.exports = nextConfig
