import ClientHomePage from './clientHome';
import Script from 'next/script';



export default function HomePage() {
  return (
    <>
      {/* <Script id="json-ld-home" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Flores Sons Farms",
          "description": "Exportadora de hortalizas frescas desde México.",
          "url": "https://www.floressonsfarms.com",
          "logo": "https://res.cloudinary.com/dguinjztv/image/upload/v1744336833/logoo_gm49ee.jpg"
        })}
      </Script> */}
      
      <ClientHomePage />
    </>
  );
}
