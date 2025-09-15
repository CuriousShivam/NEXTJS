import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
    webpack: (config) => {
        config.module.rules.push({
            test: /\.html$/,
            use: 'ignore-loader', // ignore HTML files
        })
        return config
    },

};

export default nextConfig;
