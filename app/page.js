import Head from 'next/head';
import ClientHomePage from './clientHome';
import Script from 'next/script';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Flores Sons Farms - Exportadora de Hortalizas Frescas</title>
        <meta name="description" content="Exportadora de hortalizas frescas desde México al mundo. Calidad, frescura y compromiso con la agricultura sustentable." />
      </Head>

      <Script id="json-ld-home" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Inicio - Flores Sons Farms",
          "description": "Exportadora de hortalizas frescas desde México.",
          "url": "https://www.floressonsfarms.com",
          
        })}
      </Script>

      <ClientHomePage />
    </>
  );
}
