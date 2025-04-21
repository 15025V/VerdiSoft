'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Navbar from '../components/navBar';
import Footer from '../components/footer';
import WhatsAppButton from '../components/Chatboot/whatsAppButton';
import BotpressChatbot from '../components/Chatboot/bootpress';

// 🔄 Carga diferida de secciones (lazy loading)
const HeroSection = dynamic(() => import('../sections/acercaDe/heroSection'), { loading: () => <p>Cargando...</p> });
const HistoriaSection = dynamic(() => import('../sections/acercaDe/historiaSection'), { loading: () => <p>Cargando...</p> });
const MisionSection = dynamic(() => import('../sections/acercaDe/misionSection'), { loading: () => <p>Cargando...</p> });
const VisionSection = dynamic(() => import('../sections/acercaDe/visionSection'), { loading: () => <p>Cargando...</p> });
const ValoresSection = dynamic(() => import('../sections/acercaDe/valoresSection'), { loading: () => <p>Cargando...</p> });

export default function ClientAboutPage() {
  return (
    <>
      <WhatsAppButton />
      <BotpressChatbot />
      <Navbar />
      <HeroSection />
      <HistoriaSection />
      <MisionSection />
      <VisionSection />
      <ValoresSection />
      <Footer />
    </>
  );
}
