const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const isVercel = process.env.VERCEL === '1';

const defaultBasePath = isGithubActions && !isVercel ? '/Portfolio' : '';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH !== undefined 
  ? process.env.NEXT_PUBLIC_BASE_PATH 
  : defaultBasePath;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
