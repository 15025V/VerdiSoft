'use client';
import React from 'react';

export default function MisionSection() {
  return (
    <section className="w-screen overflow-hidden">
    <h2 id="quienes-somos-heading" className="text-5xl font-bold text-[#014421] text-center mb-8 font-serif">Nuestra Misión</h2>
      <p className="text-center px-7 font-scrip">
        Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.
      </p>
      <div className="grid md:grid-cols-3 gap-6 mt-9">
        {/* Primera fila */}
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
          <img src="/asistente.jpg" alt="Compromiso con la calidad" className="w-full h-60 object-cover" />
        </div>
        <div className="bg-green-600 text-white p-6 rounded-2xl flex flex-col justify-center">
          <h3 className="text-xl font-bold">Compromiso con la Calidad</h3>
          <p className="mt-2 text-sm text-justify">
            Garantizar productos empacados con los más altos estándares de higiene y frescura, cumpliendo con las expectativas de nuestros clientes y regulaciones del mercado.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
          <img src="/asistente.jpg" alt="Reunión de trabajo" className="w-full h-60 object-cover" />
        </div>
        
        {/* Segunda fila */}
        <div className="bg-green-600 text-white p-6 rounded-2xl flex flex-col justify-center">
          <h3 className="text-xl font-bold">Innovación y Eficiencia</h3>
          <p className="mt-2 text-sm text-justify">
            Implementar tecnología avanzada y procesos optimizados para ofrecer soluciones de empaque seguras, eficientes y sustentables.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
          <img src="/asistente.jpg" alt="Uso de tecnología" className="w-full h-60 object-cover" />
        </div>
        <div className="bg-green-600 text-white p-6 rounded-2xl flex flex-col justify-center">
          <h3 className="text-xl font-bold">Responsabilidad y Sostenibilidad</h3>
          <p className="mt-2 text-sm text-justify">
            Operar con responsabilidad social y ambiental, promoviendo prácticas ecológicas y un entorno laboral justo para nuestros colaboradores.
          </p>
        </div>
      </div>
    </section>
  );
}