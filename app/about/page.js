'use client';
import Head from 'next/head';
import dynamic from 'next/dynamic'; // Importar dynamic para lazy loading
import Navbar from '../components/navBar';
import Footer from '../components/footer';
import WhatsAppButton from '../components/Chatboot/whatsAppButton';
import BotpressChatbot from '../components/Chatboot/bootpress';

// Carga diferida de secciones
const HeroSection = dynamic(() => import('../sections/acercaDe/heroSection'), { loading: () => <p>Cargando...</p> });
const HistoriaSection = dynamic(() => import('../sections/acercaDe/historiaSection'), { loading: () => <p>Cargando...</p> });
const MisionSection = dynamic(() => import('../sections/acercaDe/misionSection'), { loading: () => <p>Cargando...</p> });
const VisionSection = dynamic(() => import('../sections/acercaDe/visionSection'), { loading: () => <p>Cargando...</p> });
const ValoresSection = dynamic(() => import('../sections/acercaDe/valoresSection'), { loading: () => <p>Cargando...</p> });

export default function Hero() {
  return (
    <>
      {/* Metadatos para SEO */}
      <Head>
  <title>Flores Sons Farms</title>
  <meta property="og:site_name" content="Flores Sons Farms" />

  <meta name="description" content="Explora la riqueza de productos agrícolas frescos y de alta calidad de Flores Sons Farms. Cultivados con pasión y dedicación en el Valle de Palmarito." />
  <meta name="keywords" content="productos agrícolas, frescos, calidad, sostenibilidad, Flores Sons Farms" />
  <link rel="canonical" href="https://www.floressonsfarms.com/about" />
  <meta property="og:title" content="Flores Sons Farms - Productos Agrícolas Frescos y de Calidad" />
  <meta property="og:description" content="Explora la riqueza de productos agrícolas frescos y de alta calidad de Flores Sons Farms. Cultivados con pasión y dedicación en el Valle de Palmarito." />
  <meta property="og:image" content="https://res.cloudinary.com/dguinjztv/image/upload/v1744336833/logoo_gm49ee.jpg" />
  <meta property="og:url" content="https://www.floressonsfarms.com/about" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Flores Sons Farms - Productos Agrícolas Frescos y de Calidad" />
  <meta name="twitter:description" content="Explora la riqueza de productos agrícolas frescos y de alta calidad de Flores Sons Farms. Cultivados con pasión y dedicación en el Valle de Palmarito." />
  <meta name="twitter:image" content="https://res.cloudinary.com/tu-cuenta/image/upload/v1710000000/logoo_gm49ee.png" />
</Head>

  

      {/* Secciones de la página */}
      <WhatsAppButton/>
      <BotpressChatbot/>
      <Navbar/>
      <HeroSection />
      <HistoriaSection />
      <MisionSection />
      <VisionSection />
      <ValoresSection /> 
      <Footer/>
    </>
  );
}