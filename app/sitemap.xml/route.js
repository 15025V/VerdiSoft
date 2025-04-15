// app/sitemap.xml/route.ts

export const dynamic = 'force-static'; // o 'force-dynamic' si quieres regenerarlo cada vez

export async function GET() {
  const baseUrl = 'https://flores-sonsfarms.vercel.app';

  const routes = [
    '',        // Home page
    'about',   // Acerca de nosotros
    'products',// Catálogo
    'contact'  // Contacto
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${routes.map(route => `
      <url>
        <loc>${baseUrl}/${route}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>${route === '' ? '1.0' : '0.8'}</priority>
      </url>
    `).join('')}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
