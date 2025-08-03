'use client';

import React from 'react';
import { CldImage } from 'next-cloudinary';
import { useTranslation } from '@/app/hooks/useTranslation';

export default function HistoriaSection() {
  const translations = useTranslation();

  return (
    <section id="history" className="px-6 py-12 md:px-16 lg:px-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h2
            id="quienes-somos-heading"
            className="text-5xl font-bold text-[#014421] font-serif border-l-8 border-[#5DBE66] pl-4"
          >
            {translations.conoce?.title}
          </h2>
          <p >
            {translations.conoce?.description
            ?.split('\n')
            .map((paragraph, index) => (
              <p
                key={index}
                className="text-lg md:text-xl leading-relaxed md:leading-loose text-justify font-serif mt-4 transition-colors duration-500"
              >
                {paragraph}
              </p>
            ))}

          </p>
        </div>

        <div className="relative bg-white shadow-xl rounded-3xl overflow-visible">
          <CldImage
            src="galeria_6_pacikz" // Asegúrate de que este sea el `publicId` en Cloudinary
            alt="Campo de flores"
            width={800}
            height={500}
            className="w-full h-90 object-cover rounded-3xl"
          />
          <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 bg-white px-8 py-3 rounded-lg shadow-lg text-gray-800 font-bold text-lg">
            {translations.conoce?.button}
          </div>
        </div>

        <div className="relative bg-white shadow-xl rounded-3xl overflow-visible">
          <CldImage
            src="galeria_6_pacikz" // Puedes cambiar este si es diferente en Cloudinary
            alt="Campo de cosecha"
            width={800}
            height={500}
            className="w-full h-90 object-cover rounded-3xl"
          />
          <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 bg-white px-8 py-3 rounded-lg shadow-lg text-gray-800 font-bold text-lg">
            {translations.conoce?.button2}
          </div>
        </div>

        <div>
          <p >
            {translations.conoce?.description2
             ?.split('\n')
            .map((paragraph, index) => (
              <p
                key={index}
                className="text-lg md:text-xl leading-relaxed md:leading-loose text-justify font-serif mt-4 transition-colors duration-500"
              >
                {paragraph}
              </p>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
