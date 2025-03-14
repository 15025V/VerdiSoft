import Image from 'next/image';
import React from 'react';
import { useTranslation } from '@/app/hooks/useTranslation';

export default function GalerySection() {
  const translations = useTranslation();
  const imagesLeft = ["/13.webp", "/13.jpeg"];
  const imagesCenter = ["/galeria_2.jpeg", "/galeria_2.webp", "/galeria_3.jpeg"];
  const imagesRight = ["/13.webp", "/13.webp"];

  return (
    <div role="region" aria-labelledby="galeria-heading" className="py-16 px-4">
      <section className="text-center">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <h2 id="galeria-heading" className="text-4xl md:text-6xl font-extrabold text-[#49c351] font-serif relative pb-3 inline-block">
              <span className="relative z-10">{translations.galeria?.title}</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-green-600 transform scale-x-0 origin-left transition-transform duration-500 hover:scale-x-100"></span>
            </h2>
          </div>
          <p className="text-lg text-gray-700 mb-10 italic">{translations.galeria?.subtitle}</p>

          {/* Galería de imágenes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center items-start">
            {/* Imágenes de la izquierda */}
            <div className="grid grid-cols-1 gap-6">
              {imagesLeft.map((src, index) => (
                <div key={index} className="overflow-hidden rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-700">
                  <Image
                    src={src}
                    alt={`Galería izquierda ${index + 1}`}
                    width={380}
                    height={460}
                    className="rounded-3xl object-cover w-full h-auto transition-transform duration-700 hover:scale-110"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Imágenes del centro (más anchas) */}
            <div className="grid grid-cols-1 gap-8">
              {imagesCenter.map((src, index) => (
                <div key={index} className="overflow-hidden rounded-3xl shadow-3xl hover:scale-105 transition-transform duration-700">
                  <Image
                    src={src}
                    alt={`Galería centro ${index + 1}`}
                    width={480}
                    height={320}
                    className="rounded-3xl object-cover w-full h-auto transition-transform duration-700 hover:scale-110"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Imágenes de la derecha */}
            <div className="grid grid-cols-1 gap-6">
              {imagesRight.map((src, index) => (
                <div key={index} className="overflow-hidden rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-700">
                  <Image
                    src={src}
                    alt={`Galería derecha ${index + 1}`}
                    width={380}
                    height={460}
                    className="rounded-3xl object-cover w-full h-auto transition-transform duration-700 hover:scale-110"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}