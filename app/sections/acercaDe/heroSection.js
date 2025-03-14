'use client';
import React from 'react';

export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center min-h-screen flex items-center justify-center text-center p-6"
      style={{
        backgroundImage: "linear-gradient(to bottom, rgba(31,64,55,0.8), rgba(31,64,55,0.6)), url('/asistente.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="text-white max-w-4xl px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-wide font-playfair italic">
          En Flores Sons Farms, cultivamos con pasión y compromiso, ofreciendo productos frescos y de calidad. 🌱🚜
        </h1>
      </div>
    </section>
  );
}
