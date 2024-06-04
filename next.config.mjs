/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'cps-static.rovicorp.com',
      }
    ]
  }
};

export default nextConfig;
