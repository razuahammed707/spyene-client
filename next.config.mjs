/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "127.0.0.1"],
    remotePatterns: [
      {
        protocol: "https",
<<<<<<< HEAD
        hostname: "invoiceflow.s3.us-east-1.amazonaws.com",
=======
        hostname: "b9cd-59-153-103-141.ngrok-free.app",
        port: "",
>>>>>>> 3371f3d (upadated)
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
