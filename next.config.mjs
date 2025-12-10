/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
// Use GITHUB_PAGES=true para GitHub Pages, ou deixe vazio para hospedagem própria
const useGitHubPages = process.env.GITHUB_PAGES === 'true'

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Aplica basePath apenas para GitHub Pages
  basePath: isProd && useGitHubPages ? '/code404' : '',
  assetPrefix: isProd && useGitHubPages ? '/code404' : '',
}

export default nextConfig
