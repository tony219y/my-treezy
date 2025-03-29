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
    ], // เพิ่ม hostname ที่ใช้โหลดภาพ
  },
};

export default nextConfig;
