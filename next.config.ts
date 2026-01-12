import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Exclude Python venv from Turbopack to avoid symlink issues
  turbopack: {
    rules: {
      '*.py': {
        loaders: [],
      },
    },
  },

  // Ignore Python service files during watch
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.watchOptions = {
        ...config.watchOptions,
        ignored: ['**/services/transcription/venv/**', '**/node_modules/**'],
      }
    }
    return config
  },
};

export default nextConfig;
