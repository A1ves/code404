/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Aplica basePath apenas em produção (GitHub Pages)
  basePath: isProd ? '/code404' : '',
  assetPrefix: isProd ? '/code404' : '',
}

export default nextConfig
