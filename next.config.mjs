let userConfig = undefined
try {
  userConfig = await import('./v0-user-next.config')
} catch (e) {
  // ignore error
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance optimizations
  experimental: {
    // Optimize package imports to reduce bundle size
    optimizePackageImports: [
      'react-syntax-highlighter',
      'lucide-react',
      '@radix-ui/react-avatar',
      '@radix-ui/react-dialog',
      'react-markdown'
    ],
    // Enable optimized CSS
    optimizeCss: true,
  },
  
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000, // 1 year cache
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Compiler optimizations
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Enable gzip compression
  compress: true,

  // Turbopack handles bundling, no need for webpack config
  async rewrites() {
    return [
      {
        source: '/cms-images/:path*',
        destination: process.env.STRAPI_API_URL + '/:path*',
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/tarifs',
        destination: '/prix',
        permanent: true,
      },
      {
        source: '/bien-choisir-son-encodeur',
        destination: '/blog/comment-bien-choisir-son-encodeur-pour-la-diffusion-en-direct',
        permanent: true,
      },
      {
        source: '/ere-numerique-des-archives-audiovisuelles',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/pourquoi-creer-votre-propre-webtv',
        destination: '/blog/web-tv-pourquoi-creer-la-votre',
        permanent: true,
      },
      {
        source: '/streaming-live-vs-visioconference',
        destination: '/blog/live-streaming-vs-visioconference-bien-comprendre-les-differences',
        permanent: true,
      },
      {
        source: '/emergence-des-videos-en-direct',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/comprendre-la-compression-video-et-ses-enjeux',
        destination: '/blog',
        permanent: true,
      },
    ]
  },
}

if (userConfig) {
  // ESM imports will have a "default" property
  const config = userConfig.default || userConfig

  for (const key in config) {
    if (typeof nextConfig[key] === 'object' && !Array.isArray(nextConfig[key])) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...config[key],
      }
    } else {
      nextConfig[key] = config[key]
    }
  }
}

export default nextConfig
