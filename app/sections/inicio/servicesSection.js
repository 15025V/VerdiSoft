'use client';
import { useTranslation } from '@/app/hooks/useTranslation';
import Image from 'next/image';
import React from 'react';

export default function VisualServicesSection() {
  const translations = useTranslation();

  const servicios = [
    {
      image: '/galeria_2.webp',
      title: translations.servicios?.img1,
      description: translations.servicios?.text1,}, 
    {
      image: '/galeria_2.webp',
      title:  translations.servicios?.img2,
      description: translations.servicios?.text2,
    },
    {
      image: '/galeria_2.webp',
      title:  translations.servicios?.img3,
      description:  translations.servicios?.text3,
    },
    {
      image: '/galeria_2.webp',
      title:  translations.servicios?.img4,
      description: translations.servicios?.text4,
    }
  ];

  return (
    <section id='learn more about Flores Sons Farms' className="relative py-24overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-green-100 mix-blend-multiply animate-blob"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 font-serif relative inline-block pb-3">
            {translations.servicios?.title}
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-transparent"></span>
          </h2>
          <p className="mt-6 text-lg max-w-3xl mx-auto font-serif">
            {translations.servicios?.subtitle}
          </p>
        </div>

        {/* Grid de servicios con imágenes destacadas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicios.map((servicios, index) => (
            <div 
              key={index} 
              className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              {/* Imagen con contenedor de altura fija */}
              <div className="relative h-48 w-full">
                <Image
                  src={servicios.image}
                  alt={servicios.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  quality={90}
                  priority={index < 2}
                />
              </div>
              
              {/* Contenido textual */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  {servicios.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {servicios.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Texto descriptivo adicional */}
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <p className="italic">
            {translations.text_final?.title }
          </p>
        </div>
      </div>
      <br/>
    </section>
    
  );
}