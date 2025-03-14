'use client';
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/asistente.jpg",
  "/cebollinn.jpeg",
  "/brocolii.jpeg",
];

export default function VisionSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="w-screen overflow-hidden">
      <h2 id="quienes-somos-heading" className="text-5xl font-bold text-[#014421] text-center mb-8 pt-12 font-serif">
        Nuestra Visión
      </h2>
      <p className="text-justify max-w-4xl mx-auto px-6">
        Somos una empresa dedicada a la exportación de flores frescas de la más alta calidad, cultivadas con pasión y cuidado en nuestros campos. Nuestro compromiso con la excelencia, la sostenibilidad y la innovación nos ha posicionado como un referente en el mercado internacional, llevando la belleza de nuestras flores a cada rincón del mundo.
      </p>

      <div className="relative w-screen max-w-none overflow-hidden rounded-lg shadow-lg mt-9">
        <img src={images[currentIndex]} alt="Carrusel" className="w-full h-[500px] object-cover transition-transform duration-500"/>
        {/* Botón izquierdo */}
        <button 
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 text-white p-3"
          onClick={prevSlide}
        >
          <ChevronLeft size={32} />
        </button>
        
        {/* Botón derecho */}
        <button 
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 text-white p-3"
          onClick={nextSlide}
        >
          <ChevronRight size={32} />
        </button>

        {/* Indicadores (puntos) */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                currentIndex === index ? "bg-green-600 w-4 h-4" : "bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
