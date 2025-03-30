import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      'down-th.img.susercontent.com', 
      'www.luckyworm.net', 
      'media.istockphoto.com', 
      'www.bumbleplants.com', 
      'images.pexels.com'
    ], 
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:8080/api/:path*",
      },
    ];
  },
};

export default nextConfig;
