import React from 'react';
import { useTranslation } from '@/app/hooks/useTranslation';


export default function SomosSection() {
  const translations = useTranslation();

  return (
    <div role="main">
      <section className="py-12" aria-labelledby="quienes-somos-heading">
        <header>
          <h2 id="quienes-somos-heading" className="text-5xl font-bold text-[#49c351] mb-8 font-serif ml-14">
            {translations.somos?.title}
          </h2>
        </header>
        <div className="w-3/4 mx-auto">
          <p className="text-justify px-7 font-scrip">
            {translations.somos?.description}
          </p>
        </div>
      </section>
    </div>
  );
}