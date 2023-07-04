/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate');
const nextConfig = {
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextTranslate({ nextConfig })
