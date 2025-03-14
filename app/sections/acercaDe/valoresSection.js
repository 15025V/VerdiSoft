'use client';
import React from 'react';
import { FaBalanceScale, FaGlobeAmericas, FaRegHandshake } from 'react-icons/fa';

function ValueCard({ title, icon, text, bgColor, headerColor }) {
  return (
    <div className={`p-8 sm:p-12 rounded-lg text-white w-full sm:w-80 relative ${bgColor} h-auto`}> 
      <div
        className={`text-center py-2 rounded-t-lg absolute -top-8 left-1/2 transform -translate-x-1/2 w-3/4 ${headerColor}`}
      >
        {title}
      </div>
      <div className="flex justify-center my-6 text-4xl sm:text-5xl">{icon}</div>
      <hr className="border-t-2 border-white my-4" />
      <p className="text-justify mt-4">{text}</p>
    </div>
  );
}

export default function ValoresSection() {
  return (
    <div className="px-6 py-12 md:px-16 lg:px-32 text-center">
      <div>
        <h2 id="quienes-somos-heading" className="text-5xl font-bold text-[#014421] text-center mb-6 font-serif">
          Nuestros Valores
        </h2>
        <p className="text-center font-sans mt-2 mb-12">
          Li Europan lingues es membres del sam familie. Lor separat existente es un myth Por scientie, musica.
        </p>
        <div className="flex flex-col md:flex-row gap-6 md:gap-6 justify-center items-center mt-6 space-y-10 md:space-y-0">
          <ValueCard
            title="Integridad"
            icon={<FaBalanceScale />}
            text="Actuamos con rectitud y transparencia, cumpliendo nuestros compromisos con honestidad y responsabilidad."
            bgColor="bg-green-900"
            headerColor="bg-green-600"
          />
          <ValueCard
            title="Responsabilidad Social"
            icon={<FaGlobeAmericas />}
            text="Contribuimos activamente al bienestar de la sociedad y el medio ambiente mediante nuestras acciones y decisiones."
            bgColor="bg-green-600"
            headerColor="bg-green-900"
          />
          <ValueCard
            title="Trabajo en Equipo"
            icon={<FaRegHandshake />}
            text="Valoramos la colaboración y el respeto mutuo para alcanzar nuestros objetivos comunes."
            bgColor="bg-green-900"
            headerColor="bg-green-600"
          />
        </div>
      </div>
    </div>
  );
}
