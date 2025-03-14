'use client';

import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic'; // Importar dynamic para lazy loading

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
      <HeroSection />
      <SomosSection />
      <CategorySection />
      <ElegirnosSection />
      <GalerySection />
      <CertiSection />
      <UbicationSection />
      <ServicesSection />
    </>
  );
}