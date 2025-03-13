import React from 'react';

export default function ElegirnosSection() {
    return (
        <div role="region" aria-labelledby="elegirnos-heading">
            <section className="py-12 text-center">
                <h2 id="elegirnos-heading" className="text-3xl font-bold text-[#014421] mb-8 font-serif">
                    ¿Por qué elegirnos?
                </h2>
                <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-6">
                    {/* Tarjeta 1: Calidad Garantizada */}
                    <div className="bg-[#e0f2f7] rounded-lg text-center text-justify p-4 relative"> {/* Posición relativa */}
                        <div className="border border-green-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto absolute -top-6 left-1/2 transform -translate-x-1/2"> {/* Posición absoluta y ajuste */}
                            <img src="/escudo_1.png" alt="Calidad Garantizada" className="w-6 h-6 text-white" />
                        </div>
                        <div className="mt-8"> {/* Ajuste del margen superior para el contenido */}
                            <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">Calidad Garantizada</h3>
                            <p className="text-sm text-gray-600">Implementamos Rigurosos Controles De Calidad En Cada Etapa Del Proceso, Asegurando Que Nuestros Productos Cumplan Con Los Más Altos Estándares.</p>
                        </div>
                    </div>
                    {/* Tarjeta 2: Tecnología e Innovación */}
                    <div className="bg-[#e0f2f7] rounded-lg text-center text-justify p-4 relative"> {/* Posición relativa */}
                        <div className="border border-green-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto absolute -top-6 left-1/2 transform -translate-x-1/2"> {/* Posición absoluta y ajuste */}
                            <img src="/tec.png" alt="Tecnología e Innovación" className="w-6 h-6 text-white" />
                        </div>
                        <div className="mt-8"> {/* Ajuste del margen superior para el contenido */}
                            <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">Tecnología e Innovación</h3>
                            <p className="text-sm text-gray-600">Contamos Con Maquinaria Moderna Y Procesos Eficientes Que Optimizan El Empaquetado Y Conservación De Los Productos.</p>
                        </div>
                    </div>
                    {/* Tarjeta 3: Compromiso Con La Sustentabilidad */}
                    <div className="bg-[#e0f2f7] rounded-lg text-center text-justify p-4 relative"> {/* Posición relativa */}
                        <div className="border border-green-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto absolute -top-6 left-1/2 transform -translate-x-1/2"> {/* Posición absoluta y ajuste */}
                            <img src="/compromiso.png" alt="Compromiso Con La Sustentabilidad" className="w-6 h-6 text-white" />
                        </div>
                        <div className="mt-8"> {/* Ajuste del margen superior para el contenido */}
                            <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">Compromiso Con La Sustentabilidad</h3>
                            <p className="text-sm text-gray-600">Usamos Materiales Ecológicos Y Prácticas Responsables Para Minimizar Nuestro Impacto Ambiental.</p>
                        </div>
                    </div>
                    {/* Tarjeta 4: Servicio Confiable */}
                    <div className="bg-[#e0f2f7] rounded-lg text-center text-justify p-4 relative"> {/* Posición relativa */}
                        <div className="border border-green-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto absolute -top-6 left-1/2 transform -translate-x-1/2"> {/* Posición absoluta y ajuste */}
                            <img src="/servicio.png" alt="Servicio Confiable" className="w-6 h-6 text-white" />
                        </div>
                        <div className="mt-8"> {/* Ajuste del margen superior para el contenido */}
                            <h3 className="text-lg font-semibold text-center  text-gray-800 mb-2">Servicio Confiable</h3>
                            <p className="text-sm text-gray-600">Nos Adaptamos A Las Necesidades De Cada Cliente, Ofreciendo Soluciones Flexibles, Entregas Puntuales.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}