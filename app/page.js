'use client';

import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic'; // Importar dynamic para lazy loading
import Navbar from './components/navBar';
import Footer from './components/footer';
import WhatsAppButton from './components/Chatboot/whatsAppButton';
import BotpressChatbot from './components/Chatboot/bootpress';

// Carga diferida de secciones

const HeroSection = dynamic(() => import('./sections/inicio/heroSection'), { loading: () => <p>Cargando...</p> });
const SomosSection = dynamic(() => import('./sections/inicio/somosSection'), { loading: () => <p>Cargando...</p> });
const CategorySection = dynamic(() => import('./sections/inicio/categorySection'), { loading: () => <p>Cargando...</p> });
const ElegirnosSection = dynamic(() => import('./sections/inicio/elegirnosSection'), { loading: () => <p>Cargando...</p> });
const GalerySection = dynamic(() => import('./sections/inicio/galerySection'), { loading: () => <p>Cargando...</p> });
const CertiSection = dynamic(() => import('./sections/inicio/certiSection'), { loading: () => <p>Cargando...</p> });
const UbicationSection = dynamic(() => import('./sections/inicio/ubicationSection'), { loading: () => <p>Cargando...</p> });
const ServicesSection = dynamic(() => import('./sections/inicio/servicesSection'), { loading: () => <p>Cargando...</p> });

export default function Hero() {
  return (
    <>
      {/* Metadatos para SEO */}
      
    

      {/* Secciones de la página */}
      <WhatsAppButton/>
      <BotpressChatbot/>
      <Navbar/>
      <HeroSection />
      <SomosSection />
      <CategorySection />
      <ElegirnosSection />
      <GalerySection />
      <UbicationSection />
      <CertiSection />
      <ServicesSection />
      <Footer/>
    </>
  );
}