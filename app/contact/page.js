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