'use client';

import dynamic from 'next/dynamic';
import WhatsAppButton from '../components/Chatboot/whatsAppButton';
import BotpressChatbot from '../components/Chatboot/bootpress';
import Navbar from '../components/navBar';
import Footer from '../components/footer';

// Carga diferida de secciones
const HeroSection = dynamic(() => import('../sections/contacto/heroSection'), { loading: () => <p>Cargando...</p> });
const InfSection = dynamic(() => import('../sections/contacto/infSection'), { loading: () => <p>Cargando...</p> });
const HrSection = dynamic(() => import('../sections/contacto/hr.Section'), { loading: () => <p>Cargando...</p> });
const UbiSection = dynamic(() => import('../sections/contacto/ubiSection'), { loading: () => <p>Cargando...</p> });
const FormSection = dynamic(() => import('../sections/contacto/formSection'), { loading: () => <p>Cargando...</p> });

export default function ClientContactPage() {
  return (
    <>
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
