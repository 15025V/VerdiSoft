import Image from 'next/image';
import React from 'react';

export default function GalerySection() {
    return (
        <div role="region" aria-labelledby="galeria-heading"> {/* Rol y etiqueta ARIA para accesibilidad */}
            <section className="py-16 bg-gray-100 text-center">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-center mb-10 relative">
                        <span className="border-b-2 border-green-800 w-24 mr-4 transform transition-all duration-500 hover:scale-x-125 hover:border-green-600"></span>
                        <h2 id="galeria-heading" className="text-5xl font-bold text-[#014421] inline-block pb-3 font-serif relative">
                            <span className="relative z-10">Galería</span>
                            <span className="absolute bottom-0 left-0 w-full h-1 bg-green-800 transform scale-x-0 origin-left transition-transform duration-500 hover:scale-x-100"></span>
                        </h2>
                        <span className="border-b-2 border-green-800 w-24 ml-4 transform transition-all duration-500 hover:scale-x-125 hover:border-green-600"></span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            {["/13.webp", "/13.jpeg", "/13.webp", "/13.webp", "/13.webp", "/13.webp"].map((src, index) => (
                                <div key={index} className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 relative aspect-square group">
                                    <Image
                                        src={src}
                                        alt={`Galería pequeña ${index + 1}`} 
                                        width={200}
                                        height={200}
                                        className="rounded-xl object-cover transform transition-transform duration-300 group-hover:scale-110"
                                        loading="lazy" 
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="grid grid-cols-1">
                            {["/galeria_2.webp"].map((src, index) => (
                                <div key={index} className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 relative group">
                                    <Image
                                        src={src}
                                        alt={`Galería grande ${index + 1}`} 
                                        width={600}
                                        height={400}
                                        className="rounded-2xl object-cover transform transition-transform duration-300 group-hover:scale-110"
                                        loading="lazy" 
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}