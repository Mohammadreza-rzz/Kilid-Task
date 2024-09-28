/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.free-css.com",
      },
    ],
  },
};

export default nextConfig;
