'use client';
import Image from 'next/image';
import React from 'react';

export default function CertiSection() {
  return (
    <section className="max-w-7xl mx-auto py-18 px-8 bg-gradient-to-br to-gray-200 rounded-3xl"> 
      <div className="border-t border-b border-gray-400 py-12 flex flex-col md:flex-row justify-center items-center gap-12"> 
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-xl p-6 transition-transform transform hover:scale-105 duration-300 border border-gray-300"> 
            <Image src="/primusGFS.png" alt="Primus GFS" width={220} height={110} className="object-contain" />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-xl p-6 transition-transform transform hover:scale-105 duration-300 border border-gray-300">
            <Image src="/senasica.png" alt="SENASICA" width={220} height={110} className="object-contain" />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-xl p-6 transition-transform transform hover:scale-105 duration-300 border border-gray-300">
            <Image src="/buma.png" alt="BUMA" width={220} height={110} className="object-contain" />
          </div>
        </div>
      </div>
      <div className="mt-12 text-center text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"> 
        <p className="italic">Nuestra empresa está certificada con los más altos estándares de calidad y seguridad.</p>
      </div>
    </section>
  );
}
