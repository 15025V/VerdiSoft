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
        <title>Flores Sons Farms - Productos Agrícolas Frescos y de Calidad</title>
        <meta name="description" content="Explora la riqueza de productos agrícolas frescos y de alta calidad de Flores Sons Farms. Cultivados con pasión y dedicación en el Valle de Palmarito." />
        <meta name="keywords" content="productos agrícolas, frescos, calidad, sostenibilidad, Flores Sons Farms" />
        <link rel="canonical" href="https://www.floressonsfarms.com" />
        <meta property="og:title" content="Flores Sons Farms - Productos Agrícolas Frescos y de Calidad" />
        <meta property="og:description" content="Explora la riqueza de productos agrícolas frescos y de alta calidad de Flores Sons Farms. Cultivados con pasión y dedicación en el Valle de Palmarito." />
        <meta property="og:image" content="https://www.floressonsfarms.com/logo.png" />
        <meta property="og:url" content="https://www.floressonsfarms.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Flores Sons Farms - Productos Agrícolas Frescos y de Calidad" />
        <meta name="twitter:description" content="Explora la riqueza de productos agrícolas frescos y de alta calidad de Flores Sons Farms. Cultivados con pasión y dedicación en el Valle de Palmarito." />
        <meta name="twitter:image" content="https://www.floressonsfarms.com/logo.png" />
      </Head>
<<<<<<< HEAD
  

      {/* Secciones de la página */}
      <WhatsAppButton/>
      <BotpressChatbot/>
=======
       {/*<script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>
      <script src="https://files.bpcontent.cloud/2025/02/23/04/20250223044823-TC06RID3.js"></script>

      {/* Chatbot de WhatsApp 
      <script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>
      <script src="https://files.bpcontent.cloud/2025/02/23/04/20250223044823-TC06RID3.js"></script>

      {/* Icono de WhatsApp (puedes personalizar el estilo)
      <a href="https://wa.me/2491387526" target="_blank" rel="noopener noreferrer" style={{ position: 'fixed', bottom: '110px', right: '25px', zIndex: 1000 }}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/240px-WhatsApp.svg.png" alt="WhatsApp" width="50" height="50" />
      </a> */}


      {/* Secciones de la página */}
      <BotpressChatbot />
      <WhatsAppButton />
>>>>>>> origin/front
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