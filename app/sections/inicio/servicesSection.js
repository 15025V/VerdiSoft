'use client';
import { useTranslation } from '@/app/hooks/useTranslation';
import Image from 'next/image';
import React from 'react';

export default function VisualServicesSection() {
  const translations = useTranslation();

  const services = [
    {
      image: '/galeria_2.webp',
      title: translations.services?.cultivo?.title || "Cultivo Especializado",
      description: translations.services?.cultivo?.description || "Técnicas avanzadas para máxima calidad y producción"
    },
    {
      image: '/galeria_2.webp',
      title: translations.services?.cosecha?.title || "Cosecha Selectiva",
      description: translations.services?.cosecha?.description || "Proceso cuidadoso para preservar frescura"
    },
    {
      image: '/galeria_2.webp',
      title: translations.services?.empaque?.title || "Empaque Premium",
      description: translations.services?.empaque?.description || "Presentación que protege y destaca su calidad"
    },
    {
      image: '/galeria_2.webp',
      title: translations.services?.logistica?.title || "Logística Global",
      description: translations.services?.logistica?.description || "Distribución eficiente a mercados internacionales"
    }
  ];

  return (
    <section className="relative py-24overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-green-100 mix-blend-multiply animate-blob"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Encabezado */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-boldfont-serif mb-6">
            {translations.services?.title || "Nuestros Servicios Integrales"}
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {translations.services?.subtitle || "Soluciones completas para la industria floral"}
          </p>
        </div>

        {/* Grid de servicios con imágenes destacadas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              {/* Imagen con contenedor de altura fija */}
              <div className="relative h-48 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  quality={90}
                  priority={index < 2}
                />
              </div>
              
              {/* Contenido textual */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Texto descriptivo adicional */}
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <p className="text-gray-500 dark:text-gray-400 italic">
            {translations.services?.footer || "Cada servicio diseñado para mantener los más altos estándares de calidad en toda la cadena de producción"}
          </p>
        </div>
      </div>
      <br/>
    </section>
    
  );
}