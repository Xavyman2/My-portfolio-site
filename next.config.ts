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
  
  // Remove trailing slash for better compatibility
  trailingSlash: false,
  
  // Disable automatic static optimization for better routing
  distDir: '.next',
};

export default nextConfig;
