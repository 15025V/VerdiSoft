/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      // 🔐 Seguridad global para todo el sitio
      {
        source: '/(.*)', // Aplica a todas las rutas
        headers: [
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Content-Security-Policy', value: "default-src 'self'; script-src 'self'; object-src 'none'; style-src 'self'; img-src 'self' data:;" },
          { key: 'Referrer-Policy', value: 'no-referrer-when-downgrade' },
        ],
      },

      // 🗺️ Headers específicos para sitemap.xml (ya lo tenías)
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