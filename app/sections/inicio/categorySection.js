'use client';
import { useTranslation } from '@/app/hooks/useTranslation';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

export default function CategorySection() {
  const translations = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Lista de imágenes
  const images = ["/galeria_2.webp", "/galeria_3.jpeg", "/galeria_6.jpeg", "/galeria_6.jpeg"];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div role="region" aria-labelledby="categorias-heading" className="relative">
      <section className="py-16 text-center bg-gradient-to-br  to-gray-200">
      <h2 className="text-4xl md:text-5xl font-bold font-serif relative inline-block pb-3">
            {translations.category?.title }
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-transparent"></span>
          </h2>
          <p className="mt-6 text-lg max-w-3xl mx-auto font-serif mb-12">
            {translations.category?.subtitle }
          </p>

        {/* Carrusel */}
        <div className="relative w-full overflow-hidden max-w-5xl mx-auto flex justify-center space-x-4 items-center">
          {images.map((src, index) => {
            const position = (index - currentSlide + images.length) % images.length;

            return (
              <div
                key={index}
                className={`relative w-64 h-80 transition-all duration-500 ease-in-out transform ${
                  position === 0 ? 'scale-110 brightness-110 z-10 shadow-2xl' : 
                  position === 1 || position === images.length - 1 ? 'scale-90 opacity-50' : 'hidden'
                }`}
              >
                <Image
                  src={src}
                  alt={`Producto ${index + 1}`}
                  layout="fill"
                  className="object-cover rounded-3xl shadow-lg"
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>

        {/* Botones de Navegación */}
        <button
          className="absolute left-40 top-1/2 transform -translate-y-1/2 p-4 bg-white/20 backdrop-blur-md border border-white/30 shadow-lg rounded-full transition hover:bg-white/40 hover:scale-110 hover:shadow-xl text-gray-800"
          onClick={prevSlide}
          aria-label="Slide anterior"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        
        <button
          className="absolute right-40 top-1/2 transform -translate-y-1/2 p-4 bg-white/20 backdrop-blur-md border border-white/30 shadow-lg rounded-full transition hover:bg-white/40 hover:scale-110 hover:shadow-xl text-gray-800"
          onClick={nextSlide}
          aria-label="Slide siguiente"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

        {/* Indicadores de Posición (Verdes) */}
        <div className="flex justify-center mt-6 space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-green-600 scale-125 shadow-md' : 'bg-green-300 opacity-70'
              }`}
            />
          ))}
        </div>

       {/* Botón Ver Más */}
       <a
          href="/products"
          className="mt-12 inline-flex items-center text-green-600 font-semibold hover:text-green-800 transition duration-300 text-lg px-6 py-3 rounded-full border border-green-600 shadow-md"
          aria-label="Ver productos"
        >
          {translations.category?.button}
        </a>
      </section>
    </div>
  );
}