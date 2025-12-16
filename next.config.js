/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  // Static export only for GitHub Pages, not Vercel
  ...(process.env.VERCEL ? {} : { output: 'export', distDir: 'dist' }),
  trailingSlash: true,
}

export default nextConfig 