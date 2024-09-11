/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    /* domains: ["localhost", "127.0.0.1"], */
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1338",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "b9cd-59-153-103-141.ngrok-free.app",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
