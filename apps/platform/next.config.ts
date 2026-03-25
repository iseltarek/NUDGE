import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  // Support for monorepo workspace packages
  typescript: {
    // Enable type checking across workspace packages
    tsconfigPath: './tsconfig.json',
  },
};

export default nextConfig;
