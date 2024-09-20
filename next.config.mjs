/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'reqres.in',
                port: '',
                pathname: '/img/**',
            },
        ],
    },

};

export default nextConfig;
