import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    // Next's image optimizer isn't available on Cloudflare without the paid
    // Images binding; the site only renders a local logo, so serve it as-is.
    unoptimized: true,
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

initOpenNextCloudflareForDev();
