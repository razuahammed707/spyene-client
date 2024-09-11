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
<<<<<<< HEAD
        hostname: "aa27-59-153-103-142.ngrok-free.app",
=======
        hostname: "b9cd-59-153-103-141.ngrok-free.app",
>>>>>>> 1fa0616 (upadated)
        port: "",
        pathname: "/**",
        
      },
    ],
  },
};

export default nextConfig;
