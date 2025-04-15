export default async function sitemap() {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 
                   'https://www.floressonsfarms.com';
  
    // URLs estáticas (prioriza las importantes)
    const staticUrls = [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1.0,
      },
      {
        url: `${baseUrl}/about`,
        lastModified: new Date(),
        priority: 0.8,
      },
      {
        url: `${baseUrl}/products`,
        lastModified: new Date(),
        priority: 0.8,
      },
      {
        url: `${baseUrl}/contact`,
        lastModified: new Date(),
        priority: 0.8,
      },
    ];
  
    // URLs dinámicas (ejemplo con API)
    /* const products = await fetch('...').then(res => res.json());
    const dynamicUrls = products.map(product => ({
      url: `${baseUrl}/products/${product.slug}`,
      lastModified: new Date(product.updatedAt),
    })); */
  
    return [...staticUrls /*, ...dynamicUrls */];
  }