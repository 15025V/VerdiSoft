import React from 'react';
import { CldImage } from 'next-cloudinary'; // Importamos CldImage de next-cloudinary
import { useTranslation } from '@/app/hooks/useTranslation';

export default function AreaEmpresaSection() {
  const translations = useTranslation();

  return (
    <section id='área' className="relative py-28 md:py-36 overflow-hidden">
      {/* Fondo con imagen y overlay */}
      <div className="absolute inset-0 w-full h-full">
        <CldImage 
          src="galeria_5_fwglum" 
          alt="Área de la empresa"
          fill
          
          className="object-cover object-center"
          quality={100}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm transition-all duration-500" />
        <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-transparent dark:from-green-500 dark:to-transparent"></span>
      </div>

      {/* Contenido principal */}
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Sección de texto - Card principal */}
          <div className="bg-white dark:bg-gray-900 p-10 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 transition-all duration-500 hover:shadow-xl">
            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-10 leading-tight text-gray-900 dark:text-white">
              {translations.area?.title}
            </h1>
            
            <div className="space-y-8">
              {translations.area?.cards.map((card, index) => (
                <div key={index} className="group">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 w-3 h-3 rounded-full bg-green-500 dark:bg-green-400 flex-shrink-0 group-hover:animate-pulse" />
                    <div>
                      <h3 className="text-2xl font-semibold text-green-600 dark:text-green-400 mb-3 font-serif transition-colors duration-300">
                        {card.title}
                      </h3>
                      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-serif">
                        {card.description}
                      </p>
                    </div>
                  </div>
                  {index < translations.area?.cards.length - 1 && (
                    <div className="my-6 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Sección visual (opcional) */}
          <div className="hidden lg:block relative h-full min-h-[500px] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
            <CldImage
              src="galeria_5_fwglum"
              alt="Detalle de la empresa"
              fill
              className="object-cover"
              quality={90}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
