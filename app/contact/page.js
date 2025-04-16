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
        <title>Contacto - Flores Sons Farms</title>
        <meta name="description" content="Ponte en contacto con Flores Sons Farms para obtener más información sobre nuestros productos agrícolas frescos y servicios de exportación." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Contacto - Flores Sons Farms" />
        <meta property="og:description" content="Ponte en contacto con Flores Sons Farms para obtener más información sobre nuestros productos agrícolas frescos y servicios de exportación." />
        <meta property="og:url" content="https://www.floressonsfarms.com/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://res.cloudinary.com/dguinjztv/image/upload/v1744336833/logoo_gm49ee.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contacto - Flores Sons Farms" />
        <meta name="twitter:description" content="Ponte en contacto con Flores Sons Farms para obtener más información sobre nuestros productos agrícolas frescos y servicios de exportación." />
        <meta name="twitter:image" content="https://res.cloudinary.com/dguinjztv/image/upload/v1744336833/logoo_gm49ee.jpg" />
      </Head>

      {/* Secciones de la página */}
      <WhatsAppButton />
      <BotpressChatbot />
      <Navbar />
      <HeroSection />
      <InfSection />
      <HrSection />
      <UbiSection />
      <FormSection />
      <Footer />
    </>
  );
}
