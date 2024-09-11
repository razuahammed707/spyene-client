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
        hostname: "6818-59-153-103-138.ngrok-free.app",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
