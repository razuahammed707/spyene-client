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
        hostname: "aa27-59-153-103-142.ngrok-free.app",
        port: "",
        pathname: "/**",
        
      },
    ],
  },
};

export default nextConfig;
