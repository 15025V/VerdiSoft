'use client';
import Image from 'next/image';
import React from 'react';
import { useTranslation } from '@/app/hooks/useTranslation';

export default function VendidoSection() {
  const translations = useTranslation();

  return (
    <section id='product' className="py-20 ">
      <div className="max-w-7xl mx-auto text-center ">
      <div className="flex items-center justify-center mb-12 md:mb-16">
            <h2 
              id="ubicacion-heading" 
              className="text-5xl md:text-5xl font-semibold  tracking-wide font-serif pb-3 relative inline-block"
            >
              {translations.vendidos?.title}
              <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-transparent dark:from-green-500 dark:to-transparent"></span>
            </h2>
          </div>
        
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
