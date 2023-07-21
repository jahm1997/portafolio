/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  images: {
    domains: [
      "https://drive.google.com",
      "images.unsplash.com",
      "drive.google.com",
    ],
  },
};
module.exports = nextConfig;
