'use client';
import { useTranslation } from '@/app/hooks/useTranslation';
import { CldImage } from 'next-cloudinary';
import React from 'react';

export default function VisualServicesSection() {
  const translations = useTranslation();

  const servicios = [
    {
      image: 'galeria_2_bbvnpg',
      title: translations.servicios?.img1,
      description: translations.servicios?.text1,
    },
    {
      image: 'galeria_2_bbvnpg',
      title: translations.servicios?.img2,
      description: translations.servicios?.text2,
    },
    {
      image: 'galeria_2_bbvnpg',
      title: translations.servicios?.img3,
      description: translations.servicios?.text3,
    },
    {
      image: 'galeria_2_bbvnpg',
      title: translations.servicios?.img4,
      description: translations.servicios?.text4,
    },
  ];

  return (
    <section id="learn more about Flores Sons Farms" className="relative py-24 overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-green-100 mix-blend-multiply animate-blob"></div>
      </div>

      <div className="relative max-w-7xl mx-auto sm:px-4 px-2">
        {/* Encabezado */}
        <div className="text-center mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-800 font-serif relative inline-block pb-3">
            {translations.servicios?.title}
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-transparent"></span>
          </h2>
          <p className="mt-6 text-base sm:text-lg max-w-3xl mx-auto font-serif">
            {translations.servicios?.subtitle}
          </p>
        </div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-2 sm:px-0 mb-16">
          {servicios.map((servicio, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              {/* Imagen con proporción */}
              <div className="relative aspect-[4/3] w-full">
                <CldImage
                  src={servicio.image}
                  alt={servicio.title}
                  width={500}
                  height={375}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  quality={90}
                  priority={index < 2}
                />
              </div>

              {/* Texto */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {servicio.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  {servicio.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Texto final */}
        <div className="text-center">
          <p className="ext-lg italic max-w-3xl mx-auto font-serif border-t border-gray-200 dark:border-gray-700 pt-8">
            {translations.text_final?.title}
          </p>
        </div>
      </div>
      <br />
    </section>
  );
}


