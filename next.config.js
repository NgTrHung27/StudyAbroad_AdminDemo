/** @type {import('next').NextConfig} */

// "utfs.io", "uploadthing.com"
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "uploadthing.com",
      },
      {
        protocol: "https",
        hostname: "utfs.io",
      },
      {
        protocol: "https",
        hostname: "admin-duhocsinhcanada.vercel.app",
      },
    ],
  },
};

module.exports = nextConfig;
