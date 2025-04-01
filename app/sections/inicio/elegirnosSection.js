import React from 'react';
import Image from 'next/image';
import { useTranslation } from '@/app/hooks/useTranslation';

export default function AreaEmpresaSection() {
  const translations = useTranslation();

  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      {/* Fondo con imagen y overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image 
          src="/galeria_5.jpeg" 
          alt="Área de la empresa"
          fill
          priority
          className="object-cover object-center"
          quality={100}
        />
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm transition-all duration-500" />
      </div>

      {/* Contenido principal */}
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Sección de texto */}
          <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md p-10 rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/50 transition-all duration-500 hover:shadow-xl">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white font-serif mb-10 leading-tight">
              {translations.area?.title}
            </h2>
            
            <div className="space-y-8">
              {translations.area?.cards.map((card, index) => (
                <div key={index} className="group">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 w-3 h-3 rounded-full bg-[#49c351] flex-shrink-0 group-hover:animate-pulse" />
                    <div>
                      <h3 className="text-2xl font-semibold text-[#49c351] mb-3 font-serif">
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
            <Image
              src="/galeria_5.jpeg"
              alt="Detalle de la empresa"
              fill
              className="object-cover"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
