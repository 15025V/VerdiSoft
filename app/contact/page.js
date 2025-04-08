'use client';
import Head from 'next/head';
import dynamic from 'next/dynamic'; // Importar dynamic para lazy loading
import Navbar from '../components/navBar';
import Footer from '../components/footer';
import WhatsAppButton from '../components/Chatboot/whatsAppButton';
import BotpressChatbot from '../components/Chatboot/bootpress';

// Carga diferida de secciones
const HeroSection = dynamic(() => import('../sections/contacto/heroSection'), { loading: () => <p>Cargando...</p> });
const InfSection = dynamic(() => import('../sections/contacto/infSection'), { loading: () => <p>Cargando...</p> });
const HrSection = dynamic(() => import('../sections/contacto/hr.Section'), { loading: () => <p>Cargando...</p> });
const UbiSection = dynamic(() => import('../sections/contacto/ubiSection'), { loading: () => <p>Cargando...</p> });
const FormSection = dynamic(() => import('../sections/contacto/formSection'), { loading: () => <p>Cargando...</p> });

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
 


      {/* Secciones de la página */}
      <WhatsAppButton/>
      <BotpressChatbot/>
      <Navbar/>
      <HeroSection />
      <InfSection />
      <HrSection />
      <UbiSection />
      <FormSection /> 
      <Footer/>
    </>
  );
}