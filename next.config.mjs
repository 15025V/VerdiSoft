/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval'
                https://www.googletagmanager.com
                https://www.google-analytics.com
                https://cdn.botpress.cloud
                https://*.vercel-insights.com
                https://maps.googleapis.com
                https://maps.gstatic.com
                https://files.botpress.cloud
                https://files.bpcontent.cloud
                https://*.bpcontent.cloud;
              style-src 'self' 'unsafe-inline'
                https://fonts.googleapis.com
                https://files.bpcontent.cloud;
              img-src 'self' data: https:;
              font-src 'self' https://fonts.gstatic.com;
              connect-src 'self' https://www.google-analytics.com https://*.vercel-insights.com https://*.botpress.cloud https://api.emailjs.com;
              frame-src 'self' https://www.google.com https://www.google.com/maps https://cdn.botpress.cloud;
              worker-src 'self' blob:;
            `.replace(/\n/g, '').replace(/\s{2,}/g, ' ').trim()
          },
          { key: 'Referrer-Policy', value: 'no-referrer-when-downgrade' },
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          { key: 'Content-Type', value: 'application/xml; charset=utf-8' },
          { key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' },
        ],
      },
    ];
  },
};

export default nextConfig;
