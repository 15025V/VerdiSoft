import ClientAboutPage from './clientAbout';

export const metadata = {
  title: 'Flores Sons Farms - Productos Agrícolas Frescos y de Calidad',
  description: 'Explora la riqueza de productos agrícolas frescos y de alta calidad de Flores Sons Farms. Cultivados con pasión y dedicación en el Valle de Palmarito.',
  keywords: [
    'productos agrícolas',
    'frescos',
    'calidad',
    'sostenibilidad',
    'Flores Sons Farms'
  ],
  alternates: {
    canonical: 'https://www.floressonsfarms.com/about',
  },
  openGraph: {
    title: 'Flores Sons Farms - Productos Agrícolas Frescos y de Calidad',
    description: 'Explora la riqueza de productos agrícolas frescos y de alta calidad de Flores Sons Farms. Cultivados con pasión y dedicación en el Valle de Palmarito.',
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
    title: 'Flores Sons Farms - Productos Agrícolas Frescos y de Calidad',
    description: 'Explora la riqueza de productos agrícolas frescos y de alta calidad de Flores Sons Farms. Cultivados con pasión y dedicación en el Valle de Palmarito.',
    images: ['https://res.cloudinary.com/tu-cuenta/image/upload/v1710000000/logoo_gm49ee.png'],
  },
};

export default function AboutPage() {
  return <ClientAboutPage />;
}
