/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  // Static export for GitHub Pages
  output: process.env.VERCEL ? undefined : 'export',
  trailingSlash: true,
  distDir: 'dist',
}

export default nextConfig 