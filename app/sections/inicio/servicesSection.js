import React from 'react';
import { useTranslation } from '@/app/hooks/useTranslation';

export default function ServicesSection() {
  const translations = useTranslation();

  return (
    <div role="region" aria-labelledby="servicios-heading">
      <section className="bg-green-900 text-white py-20 px-8 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 id="servicios-heading" className="text-5xl font-semibold mb-16 border-b-4 border-white inline-block pb-3 font-serif">
            {translations.servicios?.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {translations.servicios?.cards.map((service, index) => (
              <div
                key={index}
                className="bg-white text-[#014421] p-8 rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col items-center relative"
                role="article"
                aria-labelledby={`servicio-${index + 1}-heading`}
              >
                <p id={`servicio-${index + 1}-heading`} className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}