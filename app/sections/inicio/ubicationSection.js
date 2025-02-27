import React from 'react';

export default function UbicationSection() {
    return (
        <div role="region" aria-labelledby="ubicacion-heading"> {/* Rol y etiqueta ARIA para accesibilidad */}
            <section className="py-16 bg-gray-50 text-center">
                <div className="flex items-center justify-center mb-10">
                    <span className="border-b-2 border-green-800 w-24 mr-4"></span>
                    <h2 id="ubicacion-heading" className="text-5xl font-bold text-[#014421] inline-block pb-3 font-serif">
                        Ubicación
                    </h2>
                    <span className="border-b-2 border-green-800 w-24 ml-4"></span>
                </div>
                <div className="flex flex-col md:flex-row gap-12 px-8 items-center">
                    <div className="md:w-1/2">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10677.29880001141!2d-97.65535688162016!3d18.887294427587825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c565aa31a9d30b%3A0xa29268a004b4c9c8!2sSAN%20REY%20PRODUCE!5e0!3m2!1ses-419!2smx!4v1740106822096!5m2!1ses-419!2smx"
                            className="w-full h-96 rounded-xl shadow-lg"
                            title="Mapa de Ubicación de Flores Sons Farms"
                            aria-label="Mapa de Ubicación de Flores Sons Farms"
                            loading="lazy" 
                        ></iframe>
                    </div>
                    <div className="md:w-1/2 text-left">
                        <div className="bg-white p-10 rounded-xl shadow-lg border border-gray-200">
                            <h3 className="text-2xl font-semibold mb-6 text-[#014421] font-['Playfair_Display']">
                                Flores Sons Farms
                            </h3>
                            <div className="mb-6 text-lg text-gray-700 leading-relaxed">
                                <p>📍 Dirección: Froylán C. Manjarrez, 75470 Froylán C. Manjarrez, Pue.</p>
                                <p>📞 Teléfono: 0000-000-00-00</p>
                                <p>📧 Correo electrónico: ooooooogmail.com</p>
                            </div>
                            <a
                                href="/contact"
                                className="bg-[#014421] text-white px-8 py-3 rounded-xl text-lg font-medium hover:bg-[#008000] transition-all duration-300 shadow-md hover:shadow-xl inline-block"
                                aria-label="Visítanos"
                                role="button" 
                            >
                                Visítanos
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}