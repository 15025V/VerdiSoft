/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://flores-sons-farms.vercel.app', // tu URL sin "/" al final
    generateRobotsTxt: true,
    outDir: './public',
    transform: async (config, path) => {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      };
    },
    additionalPaths: async (config) => {
      return [
        { loc: '/', lastmod: new Date().toISOString() },
        { loc: '/acerca-de-nosotros', lastmod: new Date().toISOString() },
        { loc: '/catalogo-de-productos', lastmod: new Date().toISOString() },
        { loc: '/contacto', lastmod: new Date().toISOString() },
      ];
    },
  };
  