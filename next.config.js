/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Allow specific remote hosts with patterns
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
      },
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
      },
    ],
    // Explicit domain allowlist (what Next/Image checks for)
    domains: [
      "images.unsplash.com",
      "fakestoreapi.com",
      "cdn.dummyjson.com",
    ],
  },
};

module.exports = nextConfig;
