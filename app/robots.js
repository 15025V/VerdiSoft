// app/robots.js
export default function robots() {
    return {
      rules: [
        {
          userAgent: '*',
          allow: '/',
          // Opcional: bloquear rutas específicas
          // disallow: ['/admin', '/private'],
        }
      ],
      sitemap: 'https://flores-sonsfarms.vercel.app/sitemap.xml',
    };
  }