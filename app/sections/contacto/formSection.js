'use client';
import { CldImage } from "next-cloudinary";
import React, { useState, useRef } from 'react';
import { useTranslation } from '@/app/hooks/useTranslation';
import emailjs from '@emailjs/browser';

export default function FormSection() {
  const translations = useTranslation();
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'name') {
      const lettersOnly = value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
      setFormData({ ...formData, [name]: lettersOnly });
      return;
    }
    
    if (name === 'phone') {
      const numbersOnly = value.replace(/\D/g, '');
      setFormData({ ...formData, [name]: numbersOnly });
      return;
    }
    
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = translations.d_nom?.title || 'Nombre es requerido';
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(formData.name)) {
      newErrors.name = 'El nombre solo debe contener letras';
    } else if (formData.name.length > 25) {
      newErrors.name = 'El nombre no debe exceder 25 caracteres';
    }
    
    if (!formData.phone) {
      newErrors.phone = translations.d_tel?.title || 'Teléfono es requerido';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'El teléfono debe tener exactamente 10 dígitos';
    }
    
    if (!formData.email) newErrors.email = translations.d_cor?.title || 'Email es requerido';
    if (!formData.message) newErrors.message = translations.d_men?.title || 'Mensaje es requerido';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

    if (!serviceId || !templateId || !userId) {
      console.error("Error: Variables de entorno de EmailJS no están configuradas correctamente.");
      return;
    }

    if (!form.current) {
      console.error("Error: El formulario no está definido.");
      return;
    }

    emailjs.send(serviceId, templateId, {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      message: formData.message,
    }, userId)
      .then((result) => {
        console.log("Formulario enviado con éxito:", result.text);
        setIsSubmitted(true);
        form.current.reset();
        setFormData({ name: '', phone: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error("Error al enviar el formulario:", error);
      });
  };

  return (
    <section id='contactform' className="relative flex justify-center items-center min-h-screen px-6 py-10 font-serif">
      {/* Fondo de cilantro para móvil */}
      <div className="md:hidden absolute inset-0 overflow-hidden z-0">
        <CldImage
          src="cill_plkkbr"
          alt="Hoja de cilantro"
          width={1200}  // Ajusta según necesites
          height={800}  // Ajusta según necesites
          className="w-full h-full object-cover opacity-90"
          sizes="100vw" // Para responsive
        />
      </div>

      <div className="relative w-full max-w-5xl flex rounded-tl-[80px] rounded-br-[80px] shadow-2xl overflow-hidden z-10">
        {/* Imagen de cilantro para desktop (posición absoluta) */}
        <CldImage
          src="cill_plkkbr"
          alt="Hoja de cilantro"
          width={1200}
          height={800}
          className="hidden md:block absolute w-72 z-20 left-3/4 transform -translate-x-1/2 top-1/2 -translate-y-1/2"
        />

        {/* Contenido principal */}
        <div className="w-full md:w-3/4 bg-[#033521] bg-opacity-90 md:bg-opacity-100 p-6 sm:p-8 md:p-10 text-white flex flex-col items-center justify-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-2 text-center">{translations.for?.title}</h1>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-4 text-center w-full md:w-3/4 px-2">
            {translations.for?.description}
          </p>

          <form ref={form} onSubmit={handleSubmit} className="space-y-3 w-full md:w-2/3 px-2 sm:px-0">
            <div className="w-full">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                maxLength={25}
                placeholder={translations.for?.nombre}
                className="w-full p-2 text-black text-sm border-none rounded-tl-[10px] sm:rounded-tl-[15px] rounded-br-[10px] sm:rounded-br-[15px] focus:ring-2 focus:ring-white"
              />
              {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
            </div>

            <div className="w-full">
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                maxLength={10}
                placeholder={translations.for?.tel}
                className="w-full p-2 text-black text-sm border-none rounded-tl-[10px] sm:rounded-tl-[15px] rounded-br-[10px] sm:rounded-br-[15px] focus:ring-2 focus:ring-white"
              />
              {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
            </div>

            <div className="w-full">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={translations.for?.cor}
                className="w-full p-2 text-black text-sm border-none rounded-tl-[10px] sm:rounded-tl-[15px] rounded-br-[10px] sm:rounded-br-[15px] focus:ring-2 focus:ring-white"
              />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
            </div>

            <div className="w-full">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={translations.for?.mens}
                rows="3"
                className="w-full p-2 text-black text-sm border-none rounded-tl-[10px] sm:rounded-tl-[15px] rounded-br-[10px] sm:rounded-br-[15px] focus:ring-2 focus:ring-white"
              ></textarea>
              {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
            </div>

            <div className="flex justify-center md:justify-end">
              <button
                type="submit"
                className="w-full sm:w-32 bg-green-500 hover:bg-green-600 text-white font-bold py-2 text-sm rounded-tl-[10px] sm:rounded-tl-[15px] rounded-br-[10px] sm:rounded-br-[15px] transition"
              >
                {isSubmitted ? `${translations.but?.title} ✅` : translations.but?.title}

              </button>
            </div>
          </form>
        </div>

        {/* Barra lateral */}
        <div className="hidden md:block w-1/4 bg-gradient-to-r from-[#5DBE66] to-[#A7ECA4] relative "></div>
      </div>
    </section>
  );
}