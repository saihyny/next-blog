/** @type {import('next').NextConfig} */
const nextConfig = {
   
    images: {
        domains: ['lh3.googleusercontent.com', 'firebasestorage.googleapis.com'],
    },
    async headers() {
        return [
          {
            source: "/_next/static/(.*)",
            headers: [
              { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
            ],
          },
        ];
      },
    
};

module.exports = nextConfig;