import React from 'react';
import { useTranslation } from '@/app/hooks/useTranslation';

export default function SomosSection() {
  const translations = useTranslation();

  return (
    <div role="main">
      <section className="py-24 bg-gradient-to-br to-green-100" aria-labelledby="quienes-somos-heading">
        <header className="mb-17">
          <h2 id="quienes-somos-heading" className="text-5xl font-semibold text-green-800 tracking-wide font-serif ml-14  border-green-300 pb-4 inline-block">
            {translations.somos?.title}
          </h2>
        </header>
        <div className="max-w-3xl mx-auto px-8"> 
          <p className="text-lg text-gray-700 leading-relaxed text-justify font-serif"> 
            {translations.somos?.description}
          </p>
        </div>
      </section>
    </div>
  );
}