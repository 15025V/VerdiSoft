'use client';
import React from 'react';
import { useTranslation } from '@/app/hooks/useTranslation';

export default function HrSection() {
  const translations = useTranslation();
  return (
    <div className="px-6 py-16 sm:px-12 md:px-24 lg:px-36 xl:px-48 bg-gradient-to-br to-[#e1e1e1] flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-8 w-full"> 
      {/* Título */}
      <h2 id="quienes-somos-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#014421] font-serif border-l-8 border-[#5DBE66] pl-4 md:w-1/2">
        {translations.hora?.title}
      </h2>

      {/* Contenedor horario de atención */}
      <div className="bg-white p-8 sm:p-10 md:p-14 rounded-[20px] sm:rounded-[25px] md:rounded-[30px] shadow-2xl max-w-4xl border-t-8 border-[#5DBE66] w-full md:w-1/2"> 
        <div className="flex flex-col space-y-4 text-left">
          {[{ day: 'lunes', label: 'Lunes a Viernes' }, { day: 'sabado', label: 'Sábado' }, { day: 'domi', label: 'Domingo' }].map(({ day, label }) => (
            <div key={day} className="text-base sm:text-lg text-gray-900 font-serif flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="text-[#5DBE66] text-lg sm:text-xl font-semibold whitespace-nowrap">{label}:</span>
              <p className="text-gray-800 text-justify">{translations[day]?.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}