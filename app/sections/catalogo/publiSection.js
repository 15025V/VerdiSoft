'use client';

import React from 'react';
import { CldImage } from 'next-cloudinary';
import { useTranslation } from '@/app/hooks/useTranslation';

export default function AnunciSection() {
  const translations = useTranslation();

  return (
    <section className="relative h-screen flex items-center justify-center text-center p-10 overflow-hidden">
      {/* Imagen de fondo */}
      <CldImage
        src="galeria_2_dfb2nj" // Asegúrate que el publicId "12" corresponde a tu imagen en Cloudinary
        alt="Fondo Anuncio"
        fill
        loading="lazy"
        className="object-cover object-center z-0"
      />

      {/* Capa oscura opcional */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-10" />

      {/* Contenido sobre la imagen */}
      <div className="text-white max-w-2xl z-20 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white font-serif italic mb-6 leading-tight">
          {translations.eslogan?.title}
        </h1>
        <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-transparent dark:from-green-500 dark:to-transparent"></span>
      </div>
    </section>
  );
}
