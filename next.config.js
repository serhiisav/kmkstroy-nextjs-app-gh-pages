/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');
const nextConfig = {
  basePath: '/kmkstroy-nextjs-app-gh-pages',
  assetPrefix: '/kmkstroy-nextjs-app-gh-pages',
  i18n,
  // trailingSlash: true,
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  }
}

module.exports = nextConfig
