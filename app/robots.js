export default function robots() {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 
                   'https://www.floressonsfarms.com';
    
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        // disallow: ['/admin'], // Opcional
      },
      sitemap: `${baseUrl}/sitemap.xml`,
    };
  }