const nextConfig = {
  reactStrictMode: true,

  webpack: (config) => {
    return config;
  },

  env: {
    API_URL: process.env.API_URL,
  },

  images: {
    domains: ['example.com', 'raw.githubusercontent.com'],
  },

  async redirects() {
    return [
      {
        source: '/old-route',
        destination: '/new-route',
        permanent: true,
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.example.com/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
