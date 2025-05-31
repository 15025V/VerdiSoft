'use client';

import React, { useState, useEffect } from 'react';
import { useTranslation } from '@/app/hooks/useTranslation';
import { CldImage } from 'next-cloudinary';

const images = [
  'i1_usqk45',
  'i2_lrrh72',
  'i3_lufuul',
  'i4_cggdvq',
  'i5_vh2bev',
  'i7_cskgeu',
  'galeria_6_pacikz',
  'galeria_2_bbvnpg',
  'campo-amarillo_wo1hhy'
];

export default function VisionSection() {
  const translations = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  // Auto-slide cada 5 segundos
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section
      id="vision"
      className="w-screen overflow-hidden px-6 py-14 md:px-20 lg:px-36 flex flex-col items-center text-center space-y-8"
    >
      <h2
        id="quienes-somos-heading"
        className="text-5xl text-center font-bold text-[#014421] font-serif border-l-8 border-[#5DBE66] pl-4 mx-auto inline-block"
      >
        {translations.vision?.title}
      </h2>
      <p className="text-justify font-serif max-w-4xl text-xl mx-auto px-6">
        {translations.vision?.description}
      </p>

      <div className="relative w-full h-[22rem] sm:h-[24rem] md:h-[26rem] lg:h-[28rem] flex justify-center items-center overflow-hidden mt-8">
        {images.map((src, index) => {
          const position = (index - currentIndex + images.length) % images.length;
          let style = '';
          let blur = '';

          if (position === 0) {
            style = 'z-30 scale-110 sm:scale-120 translate-x-0 opacity-100';
          } else if (position === 1) {
            style = 'z-20 scale-95 translate-x-24 sm:translate-x-32 md:translate-x-40 opacity-60';
            blur = 'blur-sm';
          } else if (position === images.length - 1) {
            style = 'z-20 scale-95 -translate-x-24 sm:-translate-x-32 md:-translate-x-40 opacity-60';
            blur = 'blur-sm';
          } else {
            style = 'hidden sm:block opacity-0 scale-75';
          }

          return (
            <div
              key={index}
              className={`absolute transition-all duration-700 ease-in-out transform 
                w-40 h-56 sm:w-64 sm:h-80 md:w-72 md:h-[22rem] lg:w-80 lg:h-[24rem] 
                ${style}`}
            >
              <CldImage
                src={src}
                alt={`Imagen ${index + 1}`}
                layout="fill"
                className={`object-cover rounded-3xl shadow-xl ${blur}`}
              />
            </div>
          );
        })}

        {/* Indicadores 
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ${
                currentIndex === index ? 'bg-green-600 w-5 h-5' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>*/}
      </div>
    </section>
  );
}
