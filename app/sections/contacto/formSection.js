'use client';
import React, { useState, useRef } from 'react';
import { useTranslation } from '@/app/hooks/useTranslation';

export default function FormSection() {
  const translations = useTranslation();
  const [formData, setFormData] = useState({ nombre: '', telefono: '', correo: '', mensaje: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.nombre) newErrors.nombre = translations.d_nom?.title;
    if (!formData.telefono) newErrors.telefono = translations.d_tel?.title;
    if (!formData.correo) newErrors.correo = translations.d_cor?.title;
    if (!formData.mensaje) newErrors.mensaje = translations.d_men?.title;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
    form.current.reset();
    setFormData({ nombre: '', telefono: '', correo: '', mensaje: '' });
  };

  return (
    <section className="flex justify-center items-center min-h-screen px-6 py-10 font-serif">
      <div className="relative w-full max-w-5xl flex rounded-tl-[80px] rounded-br-[80px] shadow-2xl overflow-hidden">
        <img
          src="/cill.png"
          alt="Hoja de cilantro"
          className="hidden md:block absolute w-72 z-20 left-3/4 transform -translate-x-1/2 top-1/2 -translate-y-1/2"
        />

        <div className="w-3/4 bg-[#033521] p-10 text-white flex flex-col items-center justify-center relative z-10">
          <h2 className="text-5xl text-white font-bold mb-2 text-center">{translations.for?.title}</h2>
          <p className="text-gray-300 text-2x1 mb-4 text-center w-3/4">{translations.for?.description}</p>

          <form ref={form} onSubmit={handleSubmit} className="space-y-3 w-2/3">
            <div className="w-full">
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder={translations.for?.nombre}
                className="w-full p-2 text-black text-sm border-none rounded-tl-[15px] rounded-br-[15px] focus:ring-2 focus:ring-white"
              />
              {errors.nombre && <p className="text-red-400 text-xs">{errors.nombre}</p>}
            </div>

            <div className="w-full">
              <input
                type="text"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                placeholder={translations.for?.tel}
                className="w-full p-2 text-black text-sm border-none rounded-tl-[15px] rounded-br-[15px] focus:ring-2 focus:ring-white"
              />
              {errors.telefono && <p className="text-red-400 text-xs">{errors.telefono}</p>}
            </div>

            <div className="w-full">
              <input
                type="email"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                placeholder={translations.for?.cor}
                className="w-full p-2 text-black text-sm border-none rounded-tl-[15px] rounded-br-[15px] focus:ring-2 focus:ring-white"
              />
              {errors.correo && <p className="text-red-400 text-xs">{errors.correo}</p>}
            </div>

            <div className="w-full">
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                placeholder={translations.for?.mens}
                rows="3"
                className="w-full p-2 text-black text-sm border-none rounded-tl-[15px] rounded-br-[15px] focus:ring-2 focus:ring-white"
              ></textarea>
              {errors.mensaje && <p className="text-red-400 text-xs">{errors.mensaje}</p>}
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="w-32 bg-green-500 hover:bg-green-600 text-white font-bold py-2 text-sm rounded-tl-[15px] rounded-br-[15px] transition"
              >
                {isSubmitted ? `${translations.but?.title} ✅` : translations.but?.title}
              </button>
            </div>
          </form>
        </div>

        <div className="w-1/4 bg-gradient-to-r from-[#5DBE66] to-[#A7ECA4] relative"></div>
      </div>
    </section>
  );
}
