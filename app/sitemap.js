export default async function sitemap() {
    const baseUrl = 'https://flores-sonsfarms.vercel.app';
  
    // Rutas estáticas
    const staticRoutes = [
      {
        url: `${baseUrl}/`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1,
      },
      {
        url: `${baseUrl}/about`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: `${baseUrl}/products`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: `${baseUrl}/contact`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      // Agrega más rutas aquí
    ];
  
    // Rutas dinámicas (ejemplo con API)
    // const products = await fetch('...').then(res => res.json());
    // const dynamicRoutes = products.map(...);
  
    return [...staticRoutes /*, ...dynamicRoutes */];
  }