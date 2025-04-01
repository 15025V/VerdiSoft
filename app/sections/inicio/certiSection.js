'use client';
import Image from 'next/image';
import React from 'react';
import { useTranslation } from '@/app/hooks/useTranslation';

export default function CertiSection() {
  const translations = useTranslation();

  const certifications = [
    { 
      src: "/primusGFS.png", 
      alt: "Certificación Primus GFS",
      description: translations.certifications?.primus || "Certificación internacional en seguridad alimentaria"
    },
    { 
      src: "/senasica.png", 
      alt: "Certificación SENASICA",
      description: translations.certifications?.senasica || "Reconocimiento oficial de sanidad vegetal"
    },
    { 
      src: "/buma.png", 
      alt: "Certificación BUMA",
      description: translations.certifications?.buma || "Excelencia en buenas prácticas agrícolas"
    }
  ];

  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 dark:text-green-100 font-serif relative inline-block">
            {translations.certifications?.title || "Certificaciones"}
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-transparent"></span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-serif">
            {translations.certifications?.subtitle || "Garantía de calidad y excelencia en nuestros procesos"}
          </p>
        </div>

        {/* Certificaciones */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="group relative bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-600 flex flex-col items-center"
            >
              <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-600 rounded-lg w-full flex justify-center">
                <Image 
                  src={cert.src} 
                  alt={cert.alt}
                  width={220}
                  height={110}
                  className="object-contain h-24 transition-transform duration-500 group-hover:scale-105"
                  quality={100}
                />
              </div>
              <p className="text-center text-gray-700 dark:text-gray-300 mt-auto">
                {cert.description}
              </p>
            </div>
          ))}
        </div>

        {/* Texto final */}
        <div className="text-center">
          <p className="text-lg italic text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-serif border-t border-gray-200 dark:border-gray-700 pt-8">
            {translations.certifications?.footer || "Nuestros certificados reflejan el compromiso con la excelencia y la calidad en cada etapa de producción."}
          </p>
        </div>
      </div>
    </section>
  );
}