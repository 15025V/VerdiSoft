import React from 'react';
import { useTranslation } from '@/app/hooks/useTranslation';

export default function SomosSection() {
  const translations = useTranslation();

  return (
    <section 
      role="main" 
      className="relative py-28 md:py-36 overflow-hidden transition-colors duration-500"
      aria-labelledby="quienes-somos-heading"
    >
      {/* Elementos decorativos */}
      <div className="absolute inset-0  duration-700">
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-green-300 dark:bg-green-300 mix-blend-multiply animate-blob animation-delay-2000 transition-colors duration-500"></div>
        <div className="absolute top-1/3 right-32 w-48 h-48 rounded-full bg-green-200 dark:bg-green-200 mix-blend-multiply animate-blob transition-colors duration-500"></div>
        <div className="absolute bottom-20 left-1/3 w-52 h-52 rounded-full bg-green-100 dark:bg-green-100 mix-blend-multiply animate-blob animation-delay-4000 transition-colors duration-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <header className="mb-20 text-center">
          <h2 
            id="quienes-somos-heading" 
            className="text-4xl md:text-5xl lg:text-6xl font-bold  tracking-tight font-serif inline-block relative transition-colors duration-500"
          >
            {translations.somos?.title}
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-green-400 to-transparent dark:from-green-400 dark:via-green-300 transition-colors duration-500"></span>
          </h2>
        </header>

        <div className="max-w-4xl mx-auto bg-white/90 dark:bg-gray-800/80 backdrop-blur-sm p-10 md:p-14 rounded-2xl shadow-lg dark:shadow-xl dark:shadow-gray-900/50 border border-white/30 dark:border-gray-700/30 transition-all duration-500">
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed md:leading-loose text-justify font-serif transition-colors duration-500">
            {translations.somos?.description }
          </p>
          
          {/* Elementos de misión, visión y valores */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {['mision', 'vision', 'valores'].map((item) => (
              <div 
                key={item}
                className="flex items-center gap-3 bg-green-50/80 dark:bg-gray-700/90 px-6 py-3 rounded-full border border-green-100 dark:border-gray-600 transition-all duration-500 hover:scale-105"
              >
                <div className="w-3 h-3 rounded-full bg-green-500 dark:bg-green-400 animate-pulse transition-colors duration-500"></div>
                <span className="font-medium text-green-800 dark:text-green-200 transition-colors duration-500">
                  {translations.somos?.[item]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}