'use client';
import React from 'react';
import { useTranslation } from '@/app/hooks/useTranslation';

export default function MisionSection() {
  const translations = useTranslation();

  return (
    <section className="w-screen overflow-hidden px-6 py-14 md:px-20 lg:px-36 flex flex-col items-center text-center">
      <h2 id="quienes-somos-heading" className="text-5xl text-center font-bold text-[#014421] font-serif border-l-8 border-[#5DBE66] pl-4 mx-auto inline-block">
        {translations.mision?.title}
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mt-10">
        {/* Primera fila */}
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden flex h-full">
          <img src="/galeria_6.jpeg" alt="Compromiso con la calidad" className="w-full h-full object-cover" />
        </div>
        <div className="bg-green-600 text-white p-8 rounded-2xl flex flex-col justify-center h-full">
          <p className="text-x4 leading-loose text-justify font-serif flex-grow">
            {translations.tar1?.description}
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden flex h-full">
          <img src="/galeria_6.jpeg" alt="Reunión de trabajo" className="w-full h-full object-cover" />
        </div>

        {/* Segunda fila */}
        <div className="bg-green-600 text-white p-8 rounded-2xl flex flex-col justify-center h-full">
          <p className="text-x4 leading-loose text-justify font-serif flex-grow">
            {translations.tar2?.description}
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden flex h-full">
          <img src="/galeria_5.jpeg" alt="Uso de tecnología" className="w-full h-full object-cover" />
        </div>
        <div className="bg-green-600 text-white p-8 rounded-2xl flex flex-col justify-center h-full">
          <p className="text-x4 leading-loose text-justify font-serif flex-grow">
            {translations.tar3?.description}
          </p>
        </div>
      </div>
    </section>
  );
}
