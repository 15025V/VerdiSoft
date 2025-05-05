import Script from "next/script";
import ClientCatalogoPage from './ClientCatalogoPage';

export const metadata = {
  title: 'Catálogo Agrícola | Flores Sons Farms - Productos Agrícolas Frescos',
  description: 'Explora nuestro catálogo de productos agrícolas frescos y de alta calidad cultivados en el Valle de Palmarito.',
  keywords: [
    'catálogo agrícola',
    'productos frescos',
    'hortalizas de exportación',
    'cilantro fresco',
    'vegetales premium México'
  ],
  openGraph: {
    title: 'Catálogo de Productos | Flores Sons Farms',
    description: 'Descubre nuestra selección de productos agrícolas para exportación',
    images: [
      {
        url: 'https://res.cloudinary.com/dguinjztv/image/upload/v1744336833/logoo_gm49ee.jpg',
        width: 800,
        height: 600,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Catálogo | Flores Sons Farms',
    description: 'Explora nuestro catálogo de productos agrícolas frescos y de alta calidad cultivados en el Valle de Palmarito.',
    image: 'https://res.cloudinary.com/dguinjztv/image/upload/v1744336833/logoo_gm49ee.jpg',
  },
};

export default function CatalogoPage() {
  return (
    <>
      <Script id="json-ld-catalogo" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "OfferCatalog",
          "name": "Catálogo de Productos Agrícolas - Flores Sons Farms",
          "description": "Catálogo de hortalizas frescas listas para exportación desde México. ",
          "url": "https://www.floressonsfarms.com/catalogo",
          "provider": {
            "@type": "Organization",
            "name": "Flores Sons Farms",
            "url": "https://www.floressonsfarms.com",
            "logo": "https://res.cloudinary.com/dguinjztv/image/upload/v1744336833/logoo_gm49ee.jpg"
          },
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Cilantro fresco lavado",
                "description": "Cilantro de exportación lavado y empacado, alta calidad.",
                "image": "https://www.floressonsfarms.com/images/cilantro.jpg"
              }
            },
           {/* {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Cebollín fresco",
                "description": "Cebollín mexicano de exportación, limpio y empacado.",
                "image": "https://www.floressonsfarms.com/images/cebollin.jpg"
              }
            }*/}
            // Puedes seguir agregando más productos aquí
          ]
        })}
      </Script>
      <ClientCatalogoPage />
    </>
  );
}
