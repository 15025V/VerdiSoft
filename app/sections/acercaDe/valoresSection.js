'use client';
import React from 'react';
import { FaBalanceScale, FaGlobeAmericas, FaRegHandshake } from 'react-icons/fa';
import { useTranslation } from '@/app/hooks/useTranslation';

function ValueCard({ title, icon, text, bgColor, headerColor }) {
  
  return (
    <div className={`p-8 sm:p-12 rounded-lg text-white w-full sm:w-80 relative ${bgColor} h-auto`}> 
      <div
        className={`text-center py-2 rounded-t-lg absolute -top-8 left-1/2 transform -translate-x-1/2 w-3/4 ${headerColor}`}
      >
        {title}
      </div>
      <div className="flex justify-center my-6 text-4xl sm:text-5xl">{icon}</div>
      <hr className="border-t-2 border-white my-4" />
      <p className="text-justify mt-4">{text}</p>
    </div>
  );
}

export default function ValoresSection() {
   const translations = useTranslation();
  return (
    <div className="px-8 py-12 md:px-16 lg:px-32 text-center">
      <div>
        <h2 id="quienes-somos-heading" className="text-5xl font-bold text-[#014421] text-center mb-16 font-serif border-l-8 border-[#5DBE66] pl-4 mx-auto inline-block">
        {translations.valores?.title}
         
        </h2>
        
        <div className="text-lg  leading-relaxed text-justify px-7 font-serif flex flex-col px-7 font-serif md:flex-row gap-6 md:gap-6 justify-center items-center mt-6 space-y-10 md:space-y-0">
          <ValueCard
  
            title= {translations.valor1?.title}
            icon={<FaBalanceScale />}
            text= {translations.valor1?.description}
            bgColor="bg-green-900"
            headerColor="bg-green-600"
          />
          <ValueCard
            title= {translations.valor2?.title}
            icon={<FaGlobeAmericas />}
            text= {translations.valor2?.description}
            bgColor="bg-green-600"
            headerColor="bg-green-900"
          />
          <ValueCard
            title= {translations.valor3?.title}
            icon={<FaRegHandshake />}
            text={translations.valor3?.description}
            bgColor="bg-green-900"
            headerColor="bg-green-600"
          />
        </div>
      </div>
    </div>
  );
}
