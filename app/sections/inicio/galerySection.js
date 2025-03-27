import Image from 'next/image';
import React from 'react';
import { useTranslation } from '@/app/hooks/useTranslation';

export default function GalerySection() {
  const translations = useTranslation();
  const images = [
    "/galeria_6.jpeg", "/galeria_5.jpeg", "/galeria_6.jpeg",
    "/galeria_5.jpeg", "/galeria_5.jpeg", "/galeria_6.jpeg",
    "/galeria_5.jpeg", "/galeria_6.jpeg", "/galeria_6.jpeg",
    "/galeria_5.jpeg", "/galeria_6.jpeg", "/galeria_5.jpeg"
  ];

  return (
    <section className="py-15 px-6 bg-gradient-to-br -100 to-green-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 id="galeria-heading" className="text-5xl md:text-6xl font-bold text-green-900 tracking-wide font-serif relative pb-4 inline-block">
          <span className="relative z-10">{translations.galeria?.title}</span>
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mt-6 font-serif max-w-2xl mx-auto">
          {translations.galeria?.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16 max-w-7xl mx-auto px-4">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-500 bg-white">
            <Image
              src={src}
              alt={`Galería ${index + 1}`}
              width={400}
              height={300}
              className="object-cover w-full h-64"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}