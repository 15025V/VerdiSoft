import ClientHomePage from './clientHome';
import Script from 'next/script';

export const metadata = {
  //title: 'Flores Sons Farms - Exportadora de Productos Agrícolas',
  description: 'Exportadora de hortalizas frescas desde México. Cultivadas con pasión en el Valle de Palmarito.',
  keywords: [
    'Flores Sons Farms',
    'exportadora agrícola',
    'cilantro fresco',
    'vegetales orgánicos',
    'hortalizas mexicanas',
    'empaque de verduras',
    'exportación de vegetales',
    'proveedor de cilantro',
    
  ],
  authors: [{ name: 'Flores Sons Farms' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Flores Sons Farms',
    description: 'Exportadora de productos agrícolas frescos desde México. ',
    url: 'https://www.floressonsfarms.com',
    siteName: 'Flores Sons Farms',
    images: [
      {
        url: 'https://res.cloudinary.com/dguinjztv/image/upload/v1744336833/logoo_gm49ee.jpg',
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
  return (
    <>
      <Script id="json-ld-home" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Flores Sons Farms",
          "description": "Exportadora de hortalizas frescas desde México.",
          "url": "https://www.floressonsfarms.com",
          "logo": "https://res.cloudinary.com/dguinjztv/image/upload/v1744336833/logoo_gm49ee.jpg"
        })}
      </Script>
      <ClientHomePage />
    </>
  );
}
