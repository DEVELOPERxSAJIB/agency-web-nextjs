/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.ryrob.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
