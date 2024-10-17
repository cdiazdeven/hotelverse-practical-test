/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*', // Permitir imágenes desde este dominio
      },
      {
        protocol: 'http',
        hostname: '*', // Permitir imágenes desde este dominio
      }
    ],
},
}

module.exports = nextConfig
