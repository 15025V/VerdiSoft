import ClientHomePage from './clientHome';

export const metadata = {
  title: 'Flores Sons Farms - Exportadora de Productos Agrícolas',
  description: 'Explora la riqueza de productos agrícolas frescos y de alta calidad de Flores Sons Farms. Cultivados con pasión en el Valle de Palmarito.',
  keywords: [
    'Flores Sons Farms',
    'exportadora agrícola',
    'cilantro fresco',
    'vegetales orgánicos',
    'hortalizas mexicanas',
    'empaque de verduras',
    'exportación de vegetales',
    'proveedor de cilantro',
    'hortalizas para exportación'
  ],
  authors: [{ name: 'Flores Sons Farms' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Flores Sons Farms',
    description: 'Productos agrícolas frescos, cultivados con calidad y pasión en México para el mundo.',
    url: 'https://www.floressonsfarms.com',
    siteName: 'Flores Sons Farms',
    images: [
      {
        url: 'https://www.floressonsfarms.com/logo.png',
        width: 800,
        height: 600,
        alt: 'Flores Sons Farms Logo',
      },
    ],
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://www.floressonsfarms.com',
  },
};

export default function HomePage() {
  return <ClientHomePage />;
}
