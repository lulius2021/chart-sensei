/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Redirect Vercel preview URLs to production domain
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "(?!chart-sensei\\.com|localhost).*\\.vercel\\.app",
          },
        ],
        destination: "https://chart-sensei.com/:path*",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
