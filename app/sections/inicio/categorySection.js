'use client';
import { useTranslation } from '@/app/hooks/useTranslation';
import { CldImage } from 'next-cloudinary';
import React, { useState, useEffect } from 'react';

export default function CategorySection() {
  const translations = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = ["galeria_2_dfb2nj", "galeria_3_mage9c", "galeria_6_pacikz", "galeria_6_pacikz"];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div role="region" aria-labelledby="categorias-heading" className="relative">
      <section
        id="get to know our products"
        className="py-16 text-center bg-gradient-to-br to-gray-200 px-4 sm:px-6 lg:px-8"
      >
        {/* Título */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif relative inline-block pb-3">
          {translations.category?.title}
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-transparent"></span>
        </h2>
        <p className="mt-6 text-base sm:text-lg max-w-3xl mx-auto font-serif mb-12">
          {translations.category?.subtitle}
        </p>

        {/* Carrusel tipo ruleta */}
        <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-[22rem] flex justify-center items-center overflow-hidden">
          {images.map((src, index) => {
            const position = (index - currentSlide + images.length) % images.length;
            let style = '';
            let blurEffect = '';

            if (position === 0) {
              // Imagen central
              style = 'z-30 scale-110 sm:scale-[1.2] md:scale-[1.25] translate-x-0 opacity-100';
            } else if (position === 1) {
              // Imagen a la derecha
              style = 'z-20 scale-90 sm:scale-100 md:scale-[1.05] translate-x-20 sm:translate-x-28 md:translate-x-32 opacity-60';
              blurEffect = 'blur-sm';
            } else if (position === images.length - 1) {
              // Imagen a la izquierda
              style = 'z-20 scale-90 sm:scale-100 md:scale-[1.05] -translate-x-20 sm:-translate-x-28 md:-translate-x-32 opacity-60';
              blurEffect = 'blur-sm';
            } else {
              // Oculta otras
              style = 'hidden sm:block opacity-0 scale-75';
            }

            return (
              <div
                key={index}
                className={`absolute transition-all duration-700 ease-in-out transform 
          w-40 h-56 sm:w-60 sm:h-72 md:w-72 md:h-80 lg:w-80 lg:h-[22rem] 
          ${style}`}
              >
                <CldImage
                  src={src}
                  alt={`Producto ${index + 1}`}
                  layout="fill"
                  className={`object-cover rounded-3xl shadow-xl ${blurEffect}`}
                />
              </div>
            );
          })}
        </div>




        {/* Indicadores */}
        <div className="flex justify-center mt-6 space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-green-600 scale-125 shadow-md' : 'bg-green-300 opacity-70'
                }`}
            />
          ))}
        </div>

        {/* Botón Ver más */}
        <a
          href="/products"
          className="mt-12 inline-flex items-center text-green-600 font-semibold hover:text-green-800 transition duration-300 text-base sm:text-lg px-5 sm:px-6 py-3 rounded-full border border-green-600 shadow-md"
          aria-label="Ver productos"
        >
          {translations.category?.button}
        </a>
      </section>
    </div>
  );
}
