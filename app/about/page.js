'use client';

import dynamic from 'next/dynamic';
import Navbar from '../components/navBar';
import Footer from '../components/footer';
import WhatsAppButton from '../components/Chatboot/whatsAppButton';
import BotpressChatbot from '../components/Chatboot/bootpress';

// Carga diferida de secciones
const HeroSection = dynamic(() => import('../sections/acercaDe/heroSection'), { 
  loading: () => <p className="text-center py-10">Cargando sección principal...</p> 
});
const HistoriaSection = dynamic(() => import('../sections/acercaDe/historiaSection'), { 
  loading: () => <p className="text-center py-10">Cargando historia...</p> 
});
const MisionSection = dynamic(() => import('../sections/acercaDe/misionSection'), { 
  loading: () => <p className="text-center py-10">Cargando misión...</p> 
});
const VisionSection = dynamic(() => import('../sections/acercaDe/visionSection'), { 
  loading: () => <p className="text-center py-10">Cargando visión...</p> 
});
const ValoresSection = dynamic(() => import('../sections/acercaDe/valoresSection'), { 
  loading: () => <p className="text-center py-10">Cargando valores...</p> 
});

export default function AboutPage() {
  return (
    <>
      {/* Componentes fijos */}
      <WhatsAppButton />
      <BotpressChatbot />
      <Navbar />
      
      {/* Secciones dinámicas */}
      <main>
        <HeroSection />
        <HistoriaSection />
        <MisionSection />
        <VisionSection />
        <ValoresSection />
      </main>
      
      <Footer />
    </>
  );
}