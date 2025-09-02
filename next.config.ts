/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',
  trailingSlash: true,   // ✅ ensures /page/ -> /page/index.html
  images: {
    unoptimized: true,   // ✅ required for static export if using <Image>
  },
}

module.exports = nextConfig;
