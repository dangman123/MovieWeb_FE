import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.galaxycine.vn",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.galaxycine.vn",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
