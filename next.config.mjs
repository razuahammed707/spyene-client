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
        hostname: "e38c-103-180-245-255.ngrok-free.app",
        port: "",
        pathname: "/**",
        
      },
    ],
  },
};

export default nextConfig;
