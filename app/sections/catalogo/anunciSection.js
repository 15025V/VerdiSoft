'use client';
import React from 'react';
import Image from 'next/image';
import { useTranslation } from '@/app/hooks/useTranslation';

export default function AnunciSection() {
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
      <div className="text-white px-6">
        <h1 className="text-6xl font-serif font-bold tracking-wide font-playfair italic text-center">
          {translations.anuncio0?.title}</h1>

      </div>
    </section>
  );
}
