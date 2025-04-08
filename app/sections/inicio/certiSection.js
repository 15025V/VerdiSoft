'use client';

import Image from 'next/image';
import React from 'react';
import { useTranslation } from '@/app/hooks/useTranslation';

export default function CertiSection() {
  const translations = useTranslation();

  const certifications = [
    { 
      src: "/primusGFS.png", 
      alt:  translations.primus?.title ,
      description: translations.primus?.title
    },
    { 
      src: "/senasica.png", 
      alt: "Certificación SENASICA",
      description: translations.senasica?.title 
    },
    { 
      src: "/buma.png", 
      alt: "Certificación BUMA",
      description: translations.buma?.title
    }
  ];

  return (
    <section id='certifications' className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 font-serif relative inline-block pb-3">
            {translations.certi?.title}
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-transparent"></span>
          </h2>
          <p className="mt-6 text-lg max-w-3xl mx-auto font-serif">
            {translations.certi?.description}
          </p>
        </div>

        {/* Certificaciones */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="group relative bg-white dark:bg-[#1f2937] rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-600 flex flex-col items-center"
            >
              <div className="mb-6 p-4 bg-gray-50 dark:bg-white rounded-lg w-full flex justify-center">
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
          <p className="text-lg italic max-w-3xl mx-auto font-serif border-t border-gray-200 dark:border-gray-700 pt-8">
            {translations.certi?.tex}
          </p>
        </div>
      </div>
    </section>
  );
}