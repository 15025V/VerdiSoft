'use client';
import React from 'react';
import { CldImage } from 'next-cloudinary';
import { useTranslation } from '@/app/hooks/useTranslation';
import Head from 'next/head';

export default function HeroSection() {
  const translations = useTranslation();
  
  // Configuración de la imagen de Cloudinary
  const heroImage = {
    publicId: 'galeria_2_dfb2nj', // Reemplaza con tu publicId en Cloudinary
    alt: translations.anuncio3?.title || 'Imagen de fondo heroica',
    transformations: {
      crop: 'fill',
      quality: 'auto',
      gravity: 'auto'
    }
  };

  return (
    <>
      <Head>
        <title>{translations.anuncio3?.title || 'Página principal'} - Flores Sons Farms</title>
        <meta name="description" content={translations.anuncio3?.description || 'Descripción de la página'} />
      </Head>
      
      <section
        className="w-full h-screen flex flex-col items-center justify-center text-center px-6 md:px-12 lg:px-20 relative"
        role="img"
        aria-label={heroImage.alt}
      >
        {/* Imagen de fondo con Cloudinary */}
        <div className="absolute inset-0 z-0">
          <CldImage
            src={heroImage.publicId}
            alt={heroImage.alt}
            fill
            sizes="100vw"
            loading='lazy'
            className="object-cover"
            {...heroImage.transformations}
          />
        </div>

        {/* Contenido del hero */}
        <div className="relative z-10 text-white max-w-4xl p-8 rounded-lg">
        
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white font-serif italic mb-6 leading-tight">
            {translations.anuncio3?.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 italic mb-8 font-serif">
            {translations.anuncio3?.description}
          </p>
        </div>
      </section>
    </>
  );
}
