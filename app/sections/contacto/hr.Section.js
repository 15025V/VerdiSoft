'use client';
import React from 'react';
import { useTranslation } from '@/app/hooks/useTranslation';

export default function HrSection() {
  const translations = useTranslation();
  return (
    <div className="px-12 py-24 md:px-36 lg:px-48 bg-gradient-to-br from-[#f7f7f7] to-[#e1e1e1]">
      {/* Título de la sección */}
      <h2 id="quienes-somos-heading" className="text-7xl font-extrabold text-[#014421] mb-14 font-serif ml-8 border-l-8 border-[#5DBE66] pl-8 tracking-tight leading-snug">
        Horario de Atención
      </h2>

      {/* Contenedor horario de atención */}
      <div className="bg-white p-14 rounded-[30px] shadow-2xl max-w-4xl mx-auto border-t-8 border-[#5DBE66]">
        <div className="flex flex-col space-y-8">
          <div className="text-lg text-gray-900 font-serif flex items-center gap-4">
            <span className="text-[#5DBE66] text-xl font-semibold">Lunes a Viernes:</span>
            <p className="ml-2 text-gray-800">{translations.lunes?.title}</p>
          </div>
          <div className="text-lg text-gray-900 font-serif flex items-center gap-4">
            <span className="text-[#5DBE66] text-xl font-semibold">Sábado:</span>
            <p className="ml-2 text-gray-800">{translations.sabado?.title}</p>
          </div>
          <div className="text-lg text-gray-900 font-serif flex items-center gap-4">
            <span className="text-[#5DBE66] text-xl font-semibold">Domingo:</span>
            <p className="ml-2 text-gray-800">{translations.domi?.title}</p>
          </div>
        </div>
      </div>

      
    </div>
  );
}
