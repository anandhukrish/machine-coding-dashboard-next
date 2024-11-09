/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/dashboard/weather-news",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
