/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["bcrypt", "bcryptjs"],
  },
  images: {
    domains: ["utfs.io", "uploadthing.com"],
  },
};

module.exports = nextConfig;
