'use client';
import { useTranslation } from '@/app/hooks/useTranslation';
import Image from 'next/image';
import React from 'react';

export default function CategorySection() {
  const translations = useTranslation();

  return (
    <div role="region" aria-labelledby="categorias-heading">
      <section className="py-15 text-center bg-gradient-to-br  to-green-100"> 
        <h2 id="categorias-heading" className="text-5xl font-semibold text-green-800 tracking-wide font-serif mb-4  border-green-300 pb-4 inline-block">
          {translations.category?.title}
        </h2>
        <p className="text-lg text-gray-700  leading-relaxed mb-12 font-serif">
          {translations.category?.subtitle}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-8 max-w-6xl mx-auto"> 
          {["/galeria_6.jpeg", "/galeria_2.webp", "/galeria_6.jpeg", "/galeria_2.webp"].map((src, index) => (
            <div key={index} className="relative overflow-hidden rounded-3xl shadow-2xl group transition-transform transform hover:scale-105 duration-300"> 
              <Image
                src={src}
                alt={`Producto ${index + 1}`}
                width={400}
                height={400}
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <a
          href="/products"
          className="mt-12 inline-flex items-center text-green-600 font-semibold hover:text-green-800 transition-colors duration-300" 
          aria-label="Ver producto"
          role="button"
        >
          {translations.category?.button}
        </a>
      </section>
    </div>
  );
}