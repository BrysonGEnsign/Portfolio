import dotenv from 'dotenv';
dotenv.config();

const env = process.env.NODE_ENV || 'development';

/** @type {import('next').NextConfig} */
const nextConfigProd = {
  output: 'export',
  basePath: '/Portfolio',
  assetPrefix: '/Portfolio/',
  images: {
    loader: 'custom',
    loaderFile: './src/lib/image.loader.js',
  },
};

/** @type {import('next').NextConfig} */
const nextConfigDev = {};

const nextConfig = env === 'development' ? nextConfigDev : nextConfigProd;

export default nextConfig;
