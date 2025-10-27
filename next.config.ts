import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc", 
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "randomuser.me", 
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
