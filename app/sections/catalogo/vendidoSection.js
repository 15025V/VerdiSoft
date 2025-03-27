'use client';
import Image from 'next/image';
import React from 'react';
import { useTranslation } from '@/app/hooks/useTranslation';

export default function VendidoSection() {
  const translations = useTranslation();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2
          id="categorias-heading"
          className="text-5xl font-bold text-green-800 tracking-wide font-['Playfair_Display'] pb-8"
        >
          {translations.vendidos?.title}
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 md:px-12">
          {["/galeria_6.jpeg", "/galeria_2.webp", "/galeria_6.jpeg", "/galeria_2.webp"].map((src, index) => (
            <div key={index} className="relative overflow-hidden rounded-2xl shadow-lg border border-gray-300 group">
              <Image
                src={src}
                alt="Producto"
                width={300} 
                height={300} 
                className="w-full h-72 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
