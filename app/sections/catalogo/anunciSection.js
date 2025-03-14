'use client';
import React from 'react';
import Image from 'next/image';

export default function AnunciSection() {
  return (
    <section
    className="relative bg-cover bg-center h-screen flex items-center justify-center text-center"
    style={{
      backgroundImage: "linear-gradient(to bottom, rgba(31,64,55,0.8), rgba(31,64,55,0.6)), url('/12.jpeg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}
  >
    <div className="text-white px-6">
      <h1 className="text-7xl font-serif font-bold tracking-wide font-playfair italic text-center"><br />Descubre nuestra selección de productos frescos y de alta calidad.</h1>
    
    </div>
  </section>
  );
}
