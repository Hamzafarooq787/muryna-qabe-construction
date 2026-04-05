import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mileengineersltd.co.uk",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
