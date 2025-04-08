'use client';
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from '@/app/hooks/useTranslation';

const images = [
  "/galeria_6.jpeg",
  "/galeria_5.jpeg",
  "/galeria_2.webp",
];

export default function VisionSection() {
  const translations = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section id='vision' className="w-screen overflow-hidden px-6 py-14 md:px-20 lg:px-36 flex flex-col items-center text-center space-y-8">
      <h2 id="quienes-somos-heading" className="text-5xl text-center font-bold text-[#014421] font-serif border-l-8 border-[#5DBE66] pl-4 mx-auto inline-block">
        {translations.vision?.title}
      </h2>
      <p className="text-justify font-serif max-w-4xl text-xl mx-auto px-6">
        {translations.vision?.description}
      </p>

      <div className="relative w-screen max-w-none overflow-hidden rounded-lg shadow-lg mt-9">
        <img src={images[currentIndex]} alt="Carrusel" className="w-full h-[500px] object-cover transition-transform duration-500"/>
        <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-transparent dark:from-green-500 dark:to-transparent"></span>
        {/* Botón izquierdo */}
        <button 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-4 bg-white/20 backdrop-blur-md border border-white/30 shadow-lg rounded-full transition hover:bg-white/40 hover:scale-110 hover:shadow-xl text-gray-800"
          onClick={prevSlide}
        >
          <ChevronLeft size={40} />
        </button>
        
        {/* Botón derecho */}
        <button 
          className="absolute top-1/2 right-0 transform -translate-y-1/2 p-4 bg-white/20 backdrop-blur-md border border-white/30 shadow-lg rounded-full transition hover:bg-white/40 hover:scale-110 hover:shadow-xl text-gray-800"
          onClick={nextSlide}
        >
          <ChevronRight size={40} />
        </button>

        {/* Indicadores (puntos) */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ${
                currentIndex === index ? "bg-green-600 w-5 h-5" : "bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
