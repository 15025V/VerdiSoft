'use client';
import React from 'react';

import { useTranslation } from '@/app/hooks/useTranslation';

export default function HistoriaSection() {
      const translations = useTranslation();
    
    return (
        <section id='history' className="px-6 py-12 md:px-16 lg:px-32">

            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <h2 id="quienes-somos-heading" className="text-5xl font-bold text-[#014421] font-serif border-l-8 border-[#5DBE66] pl-4">
                    {translations.conoce?.title}
                    </h2>
                    <p className="text-lg  leading-relaxed text-justify px-7 font-serif">
                    {translations.conoce?.description}
                    </p>
                </div>
                <div className="relative bg-white shadow-xl rounded-3xl overflow-visible ">
                    <img src="/galeria_6.jpeg" alt="Campo de flores" className="w-full h-90 object-cover rounded-3xl " />
                    <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 bg-white px-8 py-3 rounded-lg shadow-lg text-gray-800 font-bold text-lg">
                    {translations.conoce?.button}
                    
                    </div>
                </div>
                <div className="relative bg-white shadow-xl rounded-3xl overflow-visible ">
                    <img src="/galeria_6.jpeg " alt="Campo de cosecha" className="w-full h-90 object-cover rounded-3xl" />
                    <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 bg-white px-8 py-3 rounded-lg shadow-lg text-gray-800 font-bold text-lg">
                    {translations.conoce?.button2}
                    
                    </div>
                </div>
                <div>
                    <p className="text-lg  leading-relaxed text-justify px-7 font-serif">
                    {translations.conoce?.description2}
                    </p>
                </div>
            </div>
        </section>
    );
}