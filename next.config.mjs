/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "ariamed.ai" }],
        destination: "https://www.ariamed.ai/:path*",
        permanent: true,
      },
    ];
  },
}

export default nextConfig

