import ClientAboutPage from './clientAbout';

export const metadata = {
  title: 'Flores Sons Farms - Exportación de Hortalizas Frescas desde México',
  description: 'Empresa exportadora de productos agrícolas frescos y de alta calidad. Cultivamos y exportamos desde el Valle de Palmarito, México.',
  keywords: [
    'exportación agrícola',
    'hortalizas frescas',
    'productos agrícolas',
    'Flores Sons Farms',
    'Valle de Palmarito',
    'no vendemos flores'
  ],
  
  openGraph: {
    title: 'Flores Sons Farms - Exportación de Hortalizas Frescas',
    description: 'Empresa exportadora de hortalizas frescas desde el Valle de Palmarito.',
    url: 'https://www.floressonsfarms.com/about',
    siteName: 'Flores Sons Farms',
    images: [
      {
        url: 'https://res.cloudinary.com/dguinjztv/image/upload/v1744336833/logoo_gm49ee.jpg',
        width: 800,
        height: 600,
        alt: 'Flores Sons Farms Logo',
      }
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flores Sons Farms - Exportación de Hortalizas Frescas',
    description: 'Exportadora de hortalizas desde México. Productos de calidad del campo mexicano.',
    images: ['https://res.cloudinary.com/dguinjztv/image/upload/v1710000000/logoo_gm49ee.png'],
  },
};


export default function AboutPage() {
  return <ClientAboutPage />;
}
