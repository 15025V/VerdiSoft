'use client';

import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
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
      <Head>
        <title>Flores Sons Farms - Exportadora de Productos Agrícolas</title>
        <meta name="description" content="Explora la riqueza de productos agrícolas frescos y de alta calidad de Flores Sons Farms. Cultivados con pasión en el Valle de Palmarito." />
        <meta name="keywords" content="Flores Sons Farms, exportadora agrícola, cilantro fresco, vegetales orgánicos, hortalizas mexicanas, empaque de verduras, exportación de vegetales, proveedor de cilantro, hortalizas para exportación" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Flores Sons Farms" />
        <meta property="og:title" content="Flores Sons Farms" />
        <meta property="og:description" content="Productos agrícolas frescos, cultivados con calidad y pasión en México para el mundo." />
        <meta property="og:image" content="https://www.floressonsfarms.com/logo.png" />
        <meta property="og:url" content="https://www.floressonsfarms.com/" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.floressonsfarms.com/" />
        <meta property="og:site_name" content="Flores Sons Farms" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <WhatsAppButton />
      <BotpressChatbot />
      <Navbar />
      <HeroSection />
      <SomosSection />
      <CategorySection />
      <ElegirnosSection />
      <GalerySection />
      <UbicationSection />
      <CertiSection />
      <ServicesSection />
      <Footer />
    </>
  );
}
