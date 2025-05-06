'use client'

import { CldImage } from 'next-cloudinary'
import { FaInstagram, FaFacebook, FaTiktok, FaPagelines,FaSeedling  } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { useTranslation } from '@/app/hooks/useTranslation'
import { motion } from 'framer-motion'

export default function HeroSection() {
  const translations = useTranslation()

  return (
    <section className="relative w-full h-screen flex items-center justify-center">
      {/* Imagen de fondo con overlay */}
      <div className="absolute inset-0 z-0">
        <CldImage
          src="galeria_2_dfb2nj"
          alt="Fondo Flores Sons Farms"
          fill
          className="object-cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
        <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-transparent dark:from-green-500 dark:to-transparent"></span>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full h-full flex flex-col">
        <div className="flex-grow flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Texto y CTA con animación */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2 text-center md:text-left pt-12 md:pt-0"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white font-serif italic mb-6 leading-tight">
              Flores Sons Farms
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 italic mb-8 font-serif">
              {translations.hero?.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="/contact"
                className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 text-lg animate-pulse hover:animate-none"
              >
                {translations.hero?.boton}
              </a>

              <a
                href="/about"
                className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 text-lg flex items-center justify-center gap-2"
                aria-label="Conoce nuestros servicios"
              >
               
                {translations.hero?.boton1}
                <FaPagelines className=" text-4xl animate-bounce" />
              </a>
            </div>
          </motion.div>

          {/* Imagen destacada con animación flotante */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 transition-transform duration-300">
              <CldImage
                src="galeria_2_dfb2nj"
                alt="Productos Flores Sons Farms"
                fill
                className="rounded-full object-cover border-4 border-white/30 shadow-2xl"
                quality={90}
                priority
              />
            </div>
          </motion.div>

        </div>

        {/* Redes sociales */}
        <div className="sticky bottom-8 left-0 right-0 flex justify-center gap-3 sm:gap-5 text-white text-xl sm:text-2xl w-full z-20 py-2">
          {[
            { icon: <FaFacebook />, url: 'https://facebook.com', label: 'Facebook' },
            { icon: <FaTiktok />, url: 'https://tiktok.com', label: 'TikTok' },
            { icon: <FaInstagram />, url: 'https://instagram.com', label: 'Instagram' },
            { icon: <FaXTwitter />, url: 'https://twitter.com', label: 'Twitter' },
          ].map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
