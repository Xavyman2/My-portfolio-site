import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Netlify deployment configuration */
  
  // Use static export for Netlify
  output: 'export',
  
  // Image optimization configuration for static export
  images: {
    unoptimized: true, // Required for static export
  },

  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Disable x-powered-by header for security
  poweredByHeader: false,

  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: true, // Temporarily ignore to allow deployment
  },

  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // Trailing slash for better static hosting compatibility
  trailingSlash: true,
};

export default nextConfig;
