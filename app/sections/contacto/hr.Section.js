'use client';
import React from 'react';
import { useTranslation } from '@/app/hooks/useTranslation';

export default function HrSection() {
  const translations = useTranslation();

  return (
    <div id='schedule' className="px-6 py-16 sm:px-12 md:px-24 lg:px-36 xl:px-48 bg-gradient-to-br to-[#e1e1e1] flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-8 w-full"> 
      
      {/* Título */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#014421] font-serif border-l-8 border-[#5DBE66] pl-4 md:w-1/2">
        {translations.hora?.title}
      </h2>

      {/* Contenedor horario */}
      <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl border-t-8 border-[#5DBE66] w-full md:w-1/2"> 
        <div className="flex flex-col gap-4 text-left">
          {[
            {
              label: translations.lunes?.title,
              time: translations.lunes?.time
            },
            {
              label: translations.sabado?.title,
              time: translations.sabado?.time
            }
          ].map(({ label, time }, index) => (
            <div key={index} className="flex flex-col sm:flex-row sm:items-center sm:gap-2 break-words">
              <span className="text-[#5DBE66] font-semibold text-lg sm:text-xl whitespace-normal">{label}</span>
              <p className="text-gray-800 text-base sm:text-lg break-words">{time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
