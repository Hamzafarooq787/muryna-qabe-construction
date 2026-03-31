/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Recommended for Next.js 13+ instead of 'domains'
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;