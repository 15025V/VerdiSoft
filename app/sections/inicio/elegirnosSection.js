import { CheckCircle, MapPin, Star } from 'lucide-react';
import React from 'react';

export default function ElegirnosSection() {
    return (
        <div role="region" aria-labelledby="elegirnos-heading"> {/* Rol y etiqueta ARIA para accesibilidad */}
            <section className="py-12 bg-green-900 text-center">
                <h2 id="elegirnos-heading" className="text-5xl font-bold text-white mb-8 border-b-2 border-white inline-block pb-2 font-serif">
                    ¿Por qué elegir Flores Sons Farms?
                </h2>
                <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300" role="article" aria-labelledby="frescura-heading">
                        <CheckCircle className="text-[#014421] w-12 h-12 mb-4 mx-auto" aria-hidden="true" /> {/* Icono decorativo */}
                        <h3 id="frescura-heading" className="text-2xl font-semibold text-[#014421] mb-2">Frescura Garantizada</h3>
                        <p className="text-lg text-gray-700 text-justify">
                            Nuestros productos son cultivados con los más altos estándares de calidad y frescura, directamente del campo a tu mesa.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300" role="article" aria-labelledby="calidad-heading">
                        <Star className="text-[#014421] w-12 h-12 mb-4 mx-auto" aria-hidden="true" /> {/* Icono decorativo */}
                        <h3 id="calidad-heading" className="text-2xl font-semibold text-[#014421] mb-2">Calidad Superior</h3>
                        <p className="text-lg text-gray-700">
                            Nos comprometemos a ofrecerte productos de la más alta calidad, seleccionados cuidadosamente para brindarte lo mejor de la cosecha.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300" role="article" aria-labelledby="sostenibilidad-heading">
                        <MapPin className="text-[#014421] w-12 h-12 mb-4 mx-auto" aria-hidden="true" /> {/* Icono decorativo */}
                        <h3 id="sostenibilidad-heading" className="text-2xl font-semibold text-[#014421] mb-2">Producción Sostenible</h3>
                        <p className="text-lg text-gray-700 text-justify">
                            Practicamos métodos de cultivo sostenibles y respetuosos con el medio ambiente, para cuidar la tierra que nos alimenta.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}