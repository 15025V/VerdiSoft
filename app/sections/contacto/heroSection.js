'use client';
import React from 'react';
import { useTranslation } from '@/app/hooks/useTranslation';

export default function HeroSection() {
  const translations = useTranslation();
  return (
    <section
      className="w-full h-screen flex flex-col items-center justify-center text-center px-6 md:px-12 lg:px-20"
      style={{
        backgroundImage: "url('/12.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-white max-w-4xl"> 
        <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-wide italic">
          {translations.anuncio3?.title}
        </h1>
        <p className="text-lg md:text-2xl font-light mt-6 max-w-3xl mx-auto">
          {translations.anuncio3?.description}
        </p>
      </div>
    </section>
  );
}
