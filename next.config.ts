import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Netlify deployment configuration */
  
  // Image optimization configuration
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Netlify automatically handles image optimization
    unoptimized: false,
  },

  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Disable x-powered-by header for security
  poweredByHeader: false,

  // Compress responses
  compress: true,

  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: false,
  },

  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
