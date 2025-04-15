export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // disallow: ['/admin'], // Opcional
    },
    sitemap: 'https://flores-sonsfarms.vercel.app/sitemap.xml',
  };
}