'use client';
import React from 'react';
import { useTranslation } from '@/app/hooks/useTranslation';

export default function HeroSection() {
  const translations = useTranslation();
  return (
    <section
      className="w-full h-screen flex flex-col md:flex-row items-center justify-between px-4 md:px-25 pt-28"
      style={{
        backgroundImage: "url('/12.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    > 
      <div className="text-white px-15 mt-20 text-center"> 
        <h1 className="text-8xl font-serif font-bold tracking-wide font-playfair italic">
          {translations.anuncio3?.title}
        </h1>
        <h2 className="text-2xl text-gray-300 font-light font-serif mt-6 max-w-3xl mx-auto">
          {translations.anuncio3?.description}
        </h2>
      </div>
    </section>
  );
}