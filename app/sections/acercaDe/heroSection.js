'use client';
import React from 'react';
import { useTranslation } from '@/app/hooks/useTranslation';
export default function HeroSection() {
  const translations = useTranslation();
  return (
    <section
      className="w-full h-screen flex flex-col md:flex-row items-center justify-between px-4 md:px-25 pt-28"
      style={{
        backgroundImage: " url('/12.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    > 
      <div className="text-white px-15 mt-20"> {/* Añadido mt-20 */}
        <h1 className="text-5xl font-serif font-bold tracking-wide font-playfair italic text-center">
        {translations.anuncio0?.title}

        </h1>
        <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-transparent dark:from-green-500 dark:to-transparent"></span>
      </div>
    </section>
  );
}