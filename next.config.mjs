/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Se for publicar em subdiretório (ex: username.github.io/code404)
  // descomente a linha abaixo e ajuste o nome do repositório:
  // basePath: '/code404',
}

export default nextConfig
