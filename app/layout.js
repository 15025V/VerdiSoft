import Script from "next/script";
import { LanguageProvider } from "./context/languageContext";
import "./globals.css";

export const metadata = {
  title: 'Flores Sons Farms - Exportadora Agrícola de México',
  description: 'Productos agrícolas frescos y de alta calidad cultivados en el Valle de Palmarito. Exportamos cilantro, cebollín, calabacita, brócoli y más a todo el mundo.',
  keywords: [
    'Flores Sons Farms', 'agricultural exporter', 'exportadora agrícola',
    'not flower shop', 'no floristería', 'empresa agrícola no decorativa',

    'packing house', 'empacadora de vegetales', 'fresh vegetables', 'hortalizas frescas',
    'fresh coriander export', 'exportación de cilantro', 'organic cilantro bulk', 'cilantro orgánico al mayoreo',
    'Mexican coriander supplier', 'proveedor mexicano de cilantro', 'washed cilantro for export', 'cilantro lavado para exportación',
    'green onions export', 'exportación de cebollín', 'fresh scallions supplier', 'proveedor de cebollita fresca',
    'Mexican zucchini exporter', 'exportador de calabacita mexicana',
    'organic broccoli supplier', 'proveedor de brócoli orgánico', 'baby carrots export', 'exportación de zanahorias baby',
    'washed carrots packing', 'empaque de zanahoria lavada', 'organic beets exporter', 'exportador de betabel orgánico',
    'vacuum-packed beets', 'betabel al vacío', 'cabbage for export', 'repollo para exportación',
    'shredded cabbage packing', 'empaque de repollo rallado', 'banana leaves export', 'exportación de hojas de plátano',
    'plant leaves for tamales', 'hojas para tamales', 'cactus pads exporter', 'exportador de nopales',
    'cleaned nopal packing', 'empaque de nopal limpio', 'prickly pear fruit export', 'exportación de tuna',
    'red cactus fruit supplier', 'proveedor de tuna roja', 'yellow pitaya exporter', 'exportador de tuna amarilla',
    'radish bunch export', 'exportación de rábanos en manojos', 'washed radish packing', 'empaque de rábano lavado',
    'Mexican tea herb export', 'exportación de epazote', 'fresh epazote leaves', 'hojas frescas de epazote',
    'Mexican husk tomato export', 'exportación de tomatillo', 'green husk tomatoes', 'tomate verde para salsas'
  ],
  openGraph: {
    title: 'Flores Sons Farms - Exportadora Agrícola ',
    description: 'Productos agrícolas frescos mexicanos de la más alta calidad para mercados internacionales.',
    siteName: 'Flores Sons Farms',
    url: 'https://www.floressonsfarms.com',
    images: [
      {
        url: 'https://res.cloudinary.com/dguinjztv/image/upload/v1744336833/logoo_gm49ee.jpg',
        width: 1200,
        height: 630,
        alt: 'Logo Flores Sons Farms',
      },
      {
        url: 'https://res.cloudinary.com/dguinjztv/image/upload/v1742924917/galeria_6_pacikz.jpg',
        width: 1200,
        height: 627,
        alt: 'Campos agrícolas Flores Sons Farms',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flores Sons Farms - Productos Agrícolas Premium',
    description: 'Exportamos lo mejor de la agricultura mexicana a todo el mundo',
    images: ['https://res.cloudinary.com/dguinjztv/image/upload/v1744336834/logoo_gm49ee.jpg'],
    site: '@floressonsfarms',
    creator: '@floressonsfarms',
  },
  alternates: {
    canonical: 'https://www.floressonsfarms.com',
    //languages: {
    //  'es-MX': 'https://www.floressonsfarms.com/es',
    //  'en-US': 'https://www.floressonsfarms.com/en',
    //},
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" translate="no">
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body>
        <LanguageProvider>
          {/* Google Analytics */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-CYMCBRPS98"
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CYMCBRPS98', {
                page_path: window.location.pathname,
              });
            `}
          </Script>

          {/* JSON-LD Global Structured Data */}
          <Script id="json-ld-global" type="application/ld+json" strategy="afterInteractive">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["AgriculturalBusiness", "Organization", "LocalBusiness"],
              "name": "Flores Sons Farms",
              "alternateName": ["FSF", "Flores Sons"],
              "description": {
                "es": "Exportadora líder de productos agrícolas frescos desde México",
                "en": "Leading exporter of fresh agricultural products from Mexico"
              },
              "url": "https://www.floressonsfarms.com",
              "logo": "https://res.cloudinary.com/dguinjztv/image/upload/v1744336833/logoo_gm49ee.jpg",
              "foundingDate": "2010",
              /*"founders": [
                {
                  "@type": "Person",
                  "name": "Juan Flores"
                }
              ],*/
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Carretera Palmarito Km 12.5 ",
                "addressLocality": "Froylán C. Manjarrez",
                "addressRegion": "Puebla",
                "postalCode": "75470",
                "addressCountry": "MX"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "18.4516",
                "longitude": "-97.9268"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                //"email": "",
                //"telephone": "",
                "availableLanguage": ["Spanish", "English"]
              },
              "sameAs": [
                "https://www.facebook.com/floressonsfarms",
                "https://www.instagram.com/floressonsfarms",
                "https://www.linkedin.com/company/floressonsfarms",
                "https://twitter.com/floressonsfarms"
              ],
              "areaServed": ["North America", "Europe", "Asia"]

            })}
          </Script>

          {/* Breadcrumb Schema */}
          <Script id="breadcrumb-schema" type="application/ld+json" strategy="afterInteractive">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Inicio",
                  "item": "https://www.floressonsfarms.com/"
                },
                {
                  "@type": "ListItem",
                  "position":2 ,
                  "name": "Sobre Nosotros",
                  "item": "https://www.floressonsfarms.com/about"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Productos",
                  "item": "https://www.floressonsfarms.com/products"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Contacto",
                  "item": "https://www.floressonsfarms.com/contact"
                },
                
                {
                  "@type": "ListItem",
                  "position": 5,
                  "name": "Políticas",
                  "item": "https://www.floressonsfarms.com/legal/politicas"
                }
              ]
            })}
          </Script>


          {/* Product Schemas */}


          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}