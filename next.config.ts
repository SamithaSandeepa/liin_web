import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", // ✅ add this

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "randomuser.me" },
      { protocol: "https", hostname: "directus.zigma99.com" },
      { protocol: "https", hostname: "cms.liin.lk" },
    ],
  },
};

export default nextConfig;
