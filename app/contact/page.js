'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';
import Head from 'next/head'; // Importar el componente Head de Next.js

export default function Page() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Este campo es obligatorio';
    if (!formData.phone) newErrors.phone = 'Este campo es obligatorio';
    if (!formData.email) newErrors.email = 'Este campo es obligatorio';
    if (!formData.message) newErrors.message = 'Este campo es obligatorio';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
    // You can add form submission logic here (e.g., sending data to an API or email)
    form.current.reset();
  };

  return (
    <>
      {/* Metadatos para SEO */}
      <Head>
        <title>Contacto - Flores Sons Farms</title>
        <meta name="description" content="Conéctate con Flores Sons Farms. Contáctanos para más información sobre nuestros productos agrícolas frescos y de alta calidad." />
        <meta name="keywords" content="contacto, Flores Sons Farms, productos agrícolas, frescos, calidad, sostenibilidad" />
        <link rel="canonical" href="https://www.floressonsfarms.com/contacto" />
        <meta property="og:title" content="Contacto - Flores Sons Farms" />
        <meta property="og:description" content="Conéctate con Flores Sons Farms. Contáctanos para más información sobre nuestros productos agrícolas frescos y de alta calidad." />
        <meta property="og:image" content="https://www.floressonsfarms.com/logo.png" />
        <meta property="og:url" content="https://www.floressonsfarms.com/contacto" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contacto - Flores Sons Farms" />
        <meta name="twitter:description" content="Conéctate con Flores Sons Farms. Contáctanos para más información sobre nuestros productos agrícolas frescos y de alta calidad." />
        <meta name="twitter:image" content="https://www.floressonsfarms.com/logo.png" />
      </Head>

      {/* Sección principal */}
      <section
        className="relative bg-cover bg-center h-screen flex items-center justify-center text-center"
        style={{
          backgroundImage: "linear-gradient(to bottom, rgba(31,64,55,0.8), rgba(31,64,55,0.6)), url('/asistente.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="text-white px-6">
          <h1 className="text-8xl font-serif font-bold tracking-wide font-playfair italic text-center">¡Conéctate con Flores Sons Farms!</h1>
        </div>
      </section>

      {/* Atención al Cliente */}
      <section className="bg-gray-100 py-12 w-full flex flex-col md:flex-row items-center justify-center px-4">
        <div className="w-full md:w-1/2 flex justify-center">
          <Image src="/12.jpeg" alt="Atención al Cliente" width={500} height={500} className="rounded-lg" />
        </div>
        <div className="w-full md:w-1/2 text-left px-5">
          <h2 className="text-3xl font-bold text-left mb-4 text-green-900">ATENCIÓN DE CONTACTO</h2>
          <p className="text-gray-600 mb-6">Estamos aquí para ayudarte. No dudes en contactarnos si tienes alguna pregunta o necesitas asistencia.</p>
          <div className="space-y-6">
            <div className="flex items-center">
              <Phone className="text-[#014421] w-8 h-8 mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-green-900">Teléfono</h3>
                <p className="text-gray-600">Comunícate con nosotros a los siguientes números.</p>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="text-[#014421] w-8 h-8 mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-green-900">Correo</h3>
                <p>Envíanos un correo electrónico para más información.</p>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="text-[#014421] w-8 h-8 mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-green-900">Dirección</h3>
                <p>Visítanos en nuestras instalaciones para atención personalizada.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horarios de Atención */}
      <section className="bg-white py-12 w-full flex flex-col md:flex-row items-center justify-center px-4">
        <div className="w-full md:w-1/2 text-left px-8">
          <h2 className="text-3xl font-bold text-left mb-6 text-center text-green-900">HORARIOS DE ATENCIÓN</h2>
          <p className="text-center text-gray-700 text-lg">Lunes a Viernes: 8:00 am - 10:00 pm </p>
          <p className="text-center text-gray-700 text-lg">Sábado: 8:00 am - 10:00 pm</p>
          <p className="text-center text-gray-700 text-lg">Domingo: 12:30 pm - 6:00 pm</p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <Image src="/12.jpeg" alt="Horarios de Atención" width={500} height={500} className="rounded-lg" />
        </div>
      </section>

      {/* Visítenos */}
      <section className="bg-gray-100 py-12 w-full flex flex-col items-center justify-center px-4">
        <div className="w-full flex flex-col items-start">
          <h2 className="text-3xl font-bold text-left mb-6 text-green-900">VISÍTENOS EN</h2>
          <p className="text-gray-700 text-lg text-left mb-4">Encuéntranos en nuestra ubicación y visítanos para conocer más sobre nuestros productos y servicios.</p>
        </div>
        <iframe
          className="w-full h-96 rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10677.29880001141!2d-97.65535688162016!3d18.887294427587825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c565aa31a9d30b%3A0xa29268a004b4c9c8!2sSAN%20REY%20PRODUCE!5e0!3m2!1ses-419!2smx!4v1740106822096!5m2!1ses-419!2smx"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          aria-label="Mapa de Ubicación de Flores Sons Farms"
        ></iframe>
      </section>

      {/* Message Form */}
      <section className="px-6 pb-10 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-2xl font-bold text-green-700 mb-4">
            Enviar Mensaje
          </h3>
          <form ref={form} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-semibold text-gray-700 mb-1">Nombre Completo</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ingresa tu nombre"
                className={`w-full border ${errors.name ? "border-red-500" : "border-gray-300" } rounded-md p-3 focus:ring-2 focus:ring-green-400`}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div>
              <label className="block font-semibold text-gray-700 mb-1">Teléfono</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Ingresa tu teléfono"
                className={`w-full border ${errors.phone ? "border-red-500" : "border-gray-300" } rounded-md p-3 focus:ring-2 focus:ring-green-400`}
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>
            <div>
              <label className="block font-semibold text-gray-700 mb-1">Correo electrónico</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Ingresa tu correo"
                className={`w-full border ${errors.email ? "border-red-500" : "border-gray-300" } rounded-md p-3 focus:ring-2 focus:ring-green-400`}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div>
              <label className="block font-semibold text-gray-700 mb-1">Mensaje</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Escribe tu mensaje"
                className={`w-full border ${errors.message ? "border-red-500" : "border-gray-300" } rounded-md p-3 focus:ring-2 focus:ring-green-400`}
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white font-semibold py-3 rounded-md hover:bg-green-700 transition"
            >
              {isSubmitted ? "Mensaje Enviado" : "Enviar"}
            </button>
          </form>
        </div>
      </section>

      {/* Botón de scroll arriba */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-[#014421] text-white p-5 rounded-full shadow-lg hover:bg-[#006400] transition-all"
        aria-label="Subir"
      >
        ↑
      </button>
    </>
  );
}