import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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

export default nextConfig;