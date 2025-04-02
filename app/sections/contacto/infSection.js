'use client';
import React from 'react';
import { HiPhone, HiMail, HiLocationMarker } from "react-icons/hi";
import { useTranslation } from '@/app/hooks/useTranslation';

export default function HeroSection() {
    const translations = useTranslation();
    
    return (
        <section className="px-8 py-16 md:px-20 lg:px-36 flex flex-col md:flex-row items-center gap-12">
            {/* Información de contacto */}
            <div className="md:w-1/2 space-y-8">
                <h2 id="quienes-somos-heading" className="text-5xl font-bold text-[#014421] font-serif border-l-8 border-[#5DBE66] pl-4">
                    {translations.atencion?.title}
                </h2>
                <p className="text-lg leading-relaxed px-2 font-serif">
                    {translations.atencion?.description}
                </p>
                <div className="space-y-6">
                    {[
                        { icon: <HiPhone className="w-6 h-6 text-white" />, title: translations.tele?.title, description: translations.tele?.description },
                        { icon: <HiMail className="w-6 h-6 text-white" />, title: translations.correo?.title, description: translations.correo?.description },
                        { icon: <HiLocationMarker className="w-6 h-6 text-white" />, title: translations.dire?.title, description: translations.dire?.description }
                    ].map((item, index) => (
                        <div key={index} className="flex items-center gap-5 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
                            <div className="bg-green-500 p-4 rounded-lg">
                                {item.icon}
                            </div>
                            <div>
                                <p className="font-serif text-gray-900 font-semibold">{item.title}</p>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Imagen de atención al cliente */}
            <div className="md:w-1/2 flex justify-center">
                <div className="relative">
                    <img src="/galeria_6.jpeg" alt="Atención al cliente" className="rounded-lg shadow-lg w-3/4 md:w-full max-w-md h-auto transform hover:scale-105 transition-all duration-300" />
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#5DBE66] rounded-full opacity-30 blur-lg"></div>
                </div>
            </div>
        </section>
    );
}
