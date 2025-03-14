import React from 'react';
import { useTranslation } from '@/app/hooks/useTranslation';
import { FaShieldAlt, FaMicrochip, FaLeaf } from 'react-icons/fa';
import { BsFillCarFrontFill } from "react-icons/bs";

export default function ElegirnosSection() {
  const translations = useTranslation();

  return (
    <div role="region" aria-labelledby="elegirnos-heading">
      <section className="py-12 text-center">
        <h2 id="elegirnos-heading" className="text-5xl font-bold text-[#49c351] mb-8 font-serif">
          {translations.elegirnos?.title}
        </h2>
        <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          {translations.elegirnos?.cards.map((card, index) => (
            <div key={index} className="bg-[#e0f2f7] rounded-lg text-center text-justify p-4 relative">
              <div className="border border-green-600 bg-white rounded-full w-12 h-12 flex items-center justify-center mx-auto absolute -top-6 left-1/2 transform -translate-x-1/2">
                {index === 0 ? (
                  <FaShieldAlt className="w-6 h-6 text-green-600" />
                ) : index === 1 ? (
                  <FaMicrochip className="w-6 h-6 text-green-600" />
                ) : index === 2 ? (
                  <FaLeaf className="w-6 h-6 text-green-600" />
                ) : (
                  <BsFillCarFrontFill className="w-6 h-6 text-green-600" />
                )}
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">{card.title}</h3>
                <p className="text-sm text-gray-600">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}