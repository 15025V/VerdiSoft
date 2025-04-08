'use client';
import React from 'react';
import Image from 'next/image';
import { useTranslation } from '@/app/hooks/useTranslation'


export default function AnunciSection() {
   const  translations = useTranslation();
  return (
    <section
      className="relative bg-cover bg-center h-screen flex items-center justify-start text-left p-10"
      style={{
        backgroundImage: "url('/12.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="text-white max-w-x2">
        
        <h1 className="text-7xl font-serif font-bold tracking-wide font-playfair italic">
        {translations.eslogan?.title}
        </h1>
        <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-transparent dark:from-green-500 dark:to-transparent"></span>
      </div>
    </section>
  );
}
