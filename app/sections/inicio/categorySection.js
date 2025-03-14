import { useTranslation } from '@/app/hooks/useTranslation';
import Image from 'next/image';

import React from 'react';

export default function CategorySection() {
  const  translations = useTranslation();
  return (
    <div role="region" aria-labelledby="categorias-heading">
      <section className="py-12 text-center">
        <h2 id="categorias-heading" className="text-5xl font-bold text-[#49c351] mb-2 font-serif">
          {translations.category?.title}
        </h2>
        <p className="text-lg text-gray-600 mb-8">
        {translations.category?.subtitle}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
          {["/cilantroo.jpeg", "/cilantroo.jpeg", "/cilantroo.jpeg", "/cilantroo.jpeg"].map((src, index) => (
            <div key={index} className="relative overflow-hidden group aspect-square">
              <Image
                src={src}
                alt={`Producto ${index + 1}`}
                width={400}
                height={400}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <a
          href="/products"
          className="mt-6 md:mt-9 inline-block px-8 py-3 text-[#014421] rounded-full transition-all"
          aria-label="Ver más productos"
          role="button"
        >
          {translations.button?.category}
        </a>
   
      </section>
    </div>
  );
}