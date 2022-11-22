const pathPrefix = process.env.NODE_ENV === 'production'
  ? '/kmkstroy-nextjs-app-gh-pages'
  : '';
const nextConfig = {
  basePath: pathPrefix,
  assetPrefix: pathPrefix,
  trailingSlash: true,
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  }
}

module.exports = nextConfig
