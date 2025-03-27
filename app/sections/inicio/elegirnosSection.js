import React from 'react';
import Image from 'next/image';
import { useTranslation } from '@/app/hooks/useTranslation';

export default function AreaEmpresaSection() {
  const translations = useTranslation();

  // URL de la imagen de fondo
  const backgroundImage = '/galeria_5.jpeg';

  return (
    <section className="relative py-24"> {/* Aumentar el padding vertical */}
      <div className="relative max-w-7xl mx-auto">
        {/* Imagen de fondo */}
        <div className="absolute inset-0 w-full h-full">
          <Image 
            src={backgroundImage} 
            alt="Área de la empresa" 
            layout="fill" 
            objectFit="cover" 
            className="rounded-3xl shadow-2xl opacity-90" // Bordes redondeados y sombra más intensa
          />
        </div>

        {/* Contenedor de contenido */}
        <div className="relative bg-gradient-to-br from-green-200 to-green-300 bg-opacity-95 rounded-3xl p-12 max-w-lg shadow-2xl"> {/* Gradiente y sombra más intensa */}
          <h2 className="text-4xl font-semibold text-green-800 font-serif mb-8 tracking-wide"> {/* Texto más grande y espaciado */}
            {translations.area?.title}
          </h2>
          {translations.area?.cards.map((card, index) => (
            <div key={index} className="mb-8"> {/* Aumentar el margen inferior */}
              <h3 className="text-2xl font-serif text-gray-800 font-serif mb-4">
                {card.title}
              </h3>
              <p className="text-lg text-gray-700 font-serif leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}