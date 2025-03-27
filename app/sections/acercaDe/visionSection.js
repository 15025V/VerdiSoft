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
    <section className="w-screen overflow-hidden">
      <h1 id="quienes-somos-heading" className="text-6xl font-bold text-[#014421] text-center mb-8 pt-12 font-serif">
        {translations.vision?.title}
      </h1>
      <p className="text-justify font-serif max-w-4xl text-xl mx-auto px-6">
        {translations.vision?.description}
      </p>

      <div className="relative w-screen max-w-none overflow-hidden rounded-lg shadow-lg mt-9">
        <img src={images[currentIndex]} alt="Carrusel" className="w-full h-[500px] object-cover transition-transform duration-500"/>
        
        {/* Botón izquierdo */}
        <button 
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 text-white p-3"
          onClick={prevSlide}
        >
          <ChevronLeft size={40} />
        </button>
        
        {/* Botón derecho */}
        <button 
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 text-white p-3"
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
