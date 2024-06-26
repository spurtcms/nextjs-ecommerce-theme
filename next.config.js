/** @type {import('next').NextConfig} */

module.exports = {
  // reactStrictMode: true, avoid double time api call
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  }
}

// module.exports = {
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
// }

// module.exports = {
//   reactStrictMode: false,
// }

// require("dotenv").config({ path: `${process.env.ENVIRONMENT}` });
// module.exports = nextConfig


// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https/manage.owndesk.in',
//         hostname: '/manage.owndesk.in',
//         // port: '8080',
//         // pathname: '/storage/media/***',
//         // pathname: '/image-resize/***',
        
//       },
//     ],
//   },
// }

