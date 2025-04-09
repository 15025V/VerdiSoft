'use client';
import React from 'react';
import { CldImage } from 'next-cloudinary';
import { useTranslation } from '@/app/hooks/useTranslation';
import Head from 'next/head';

export default function AnunciSection() {
  const translations = useTranslation();

  // Configuración de la imagen de Cloudinary
  const backgroundImage = {
    publicId: 'galeria_6_pacikz', // Reemplaza con tu publicId en Cloudinary
    alt: translations.anuncio0?.title || 'Imagen de fondo',
    transformations: {
      width: 1920,
      height: 1080,
      crop: 'fill',
      gravity: 'auto',
      quality: 'auto',
      overlay: 'text:playfair-bold_64:Flores_Sons_Farms', // Opcional: texto como overlay
      opacity: 30 // Opcional: opacidad para el texto
    }
  };

  return (
    <>
      <Head>
        <title>{translations.anuncio0?.title || 'Anuncio'} - Flores Sons Farms</title>
        <meta name="description" content={translations.anuncio0?.description || 'Sección de anuncios'} />
      </Head>

      <section className="relative w-full h-screen flex  items-center justify-between px-4 md:px-25 pt-28">
        {/* Imagen de fondo con Cloudinary */}
        <div className="absolute inset-0 z-0">
          <CldImage
            src={backgroundImage.publicId}
            alt={backgroundImage.alt}
            fill
            sizes="100vw"
            loading='lazy'
            className="object-cover object-top"
            crop={backgroundImage.transformations.crop}
            gravity={backgroundImage.transformations.gravity}
            quality={backgroundImage.transformations.quality}
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Contenido */}
        <div className="relative z-10 text-white px-6 w-full text-center">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-wide italic"
            aria-label={translations.anuncio0?.title}
          >
            {translations.anuncio0?.title}
          </h1>
        </div>
          <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-transparent dark:from-green-500 dark:to-transparent"></span>
      </section>
    </>
  );
}