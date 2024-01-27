/** @type {import('next').NextConfig} */
const nextConfig={
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

        },]
    }
}

module.exports=nextConfig