/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.cointelegraph.com",
      },
    ],
  },
};

export default nextConfig;
