'use client';

import React from 'react';
import { CldImage } from 'next-cloudinary';
import { useTranslation } from '@/app/hooks/useTranslation';

export default function HeroSection() {
  const translations = useTranslation();

  return (
    <section className="relative w-full h-screen flex flex-col md:flex-row items-center justify-between px-4 md:px-25 pt-28 overflow-hidden">
      {/* Imagen de fondo */}
      <CldImage
        src="galeria_2_dfb2nj" // Asegúrate de que este sea tu `publicId` en Cloudinary
        alt="Fondo Hero"
        fill
        loading='lazy'
        className="object-cover object-top z-0"
      />

      {/* Capa oscura opcional */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-10" />

      {/* Contenido */}
      <div className="text-white px-15 mt-20 z-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-white font-serif italic mb-6 leading-tight">
          {translations.anuncio0?.title}
        </h1>
        <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-transparent dark:from-green-500 dark:to-transparent"></span>
      </div>
    </section>
  );
}
