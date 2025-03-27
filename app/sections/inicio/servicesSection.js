import React from 'react';
import Image from 'next/image';
import { useTranslation } from '@/app/hooks/useTranslation';

export default function ServicesSection() {
  const translations = useTranslation();

  const imageSources = [
    '/galeria_6.jpeg',
    '/galeria_2.webp',
    '/galeria_6.jpeg',
  ];

  return (
    <section role="region" aria-labelledby="servicios-heading" className="py-20 px-8 bg-gradient-to-br from-gray-150 to-green-50"> 
      <div className="max-w-7xl mx-auto text-center">
        <h2 id="servicios-heading" className="text-5xl md:text-6xl font-bold text-green-900 tracking-wide font-serif relative pb-4 inline-block">
          <span className="relative z-10">{translations.servicios?.title}</span>
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mt-6 italic max-w-2xl mx-auto">
          {translations.servicios?.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 max-w-7xl mx-auto px-4"> 
        {imageSources.map((src, index) => (
          <div key={index} className="overflow-hidden shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105 duration-500 bg-white rounded-lg"> 
            <Image
              src={src}
              alt={`Servicio ${index + 1}`}
              width={500}
              height={350}
              className="object-cover w-full h-80"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}