/** @type {import('next').NextConfig} */
const nextConfig = {
        eslint: {
        ignoreDuringBuilds: true
    },
    images: {
        remotePatterns: [{
                protocol: "https",
                hostname: 'icons8.com',
                port: '',
                pathname: '**'

            }, {
                protocol: "https",
                hostname: 'img.icons8.com',
                port: '',
                pathname: '**'

            },
            {
                protocol: "https",
                hostname: 's3-alpha-sig.figma.com',
                port: '',
                pathname: '**'

            },
        ]
    }
}

module.exports = nextConfig