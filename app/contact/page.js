// app/contact/page.js
import Script from "next/script";
import ClientContactPage from './clientContactPage';

export const metadata = {
  title: 'Contacto - Flores Sons Farms',
  description: 'Ponte en contacto con Flores Sons Farms, exportadora de hortalizas frescas de calidad desde México.',
  robots: 'index, follow',
  openGraph: {
    title: 'Contacto - Flores Sons Farms',
    description: 'Ponte en contacto con Flores Sons Farms, exportadora de hortalizas frescas de calidad desde México.',
    url: 'https://www.floressonsfarms.com/contact',
    type: 'website',
    images: [
      {
        url: 'https://res.cloudinary.com/dguinjztv/image/upload/v1744336833/logoo_gm49ee.jpg',
        width: 800,
        height: 600,
      },
    ],
    site_name: 'Flores Sons Farms',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contacto - Flores Sons Farms',
    description: 'Ponte en contacto con Flores Sons Farms, exportadora de hortalizas frescas de calidad desde México.',
    images: ['https://res.cloudinary.com/dguinjztv/image/upload/v1744336833/logoo_gm49ee.jpg'],
  },
};

export default function ContactPage() {
  return (
    <>
      <Script id="json-ld-contact" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "mainEntity": {
            "@type": "Organization",
            "name": "Flores Sons Farms",
            "url": "https://www.floressonsfarms.com",
            "logo": "https://res.cloudinary.com/dguinjztv/image/upload/v1744336833/logoo_gm49ee.jpg",
            "description": "Exportadora de hortalizas frescas desde México. ",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+52-249-147-6519",
              "contactType": "customer service",
              "areaServed": "MX, US, CA, EU",
              "availableLanguage": ["es", "en"]
            }
          }
        })}
      </Script>
      <Script id="breadcrumb-contact" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Flores Sons Farms",
              "item": "https://www.floressonsfarms.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Contacto",
              "item": "https://www.floressonsfarms.com/contact"
            }
          ]
        })}
      </Script>

      <ClientContactPage />
    </>
  );
}
