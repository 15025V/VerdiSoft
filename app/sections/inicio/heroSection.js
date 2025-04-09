import { CldImage } from "next-cloudinary";
import { FaInstagram, FaFacebook, FaTiktok, FaTwitter, FaArrowDown } from "react-icons/fa";
import { useTranslation } from '@/app/hooks/useTranslation';

export default function HeroSection() {
  const translations = useTranslation();

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo con overlay */}
      <div className="absolute inset-0 z-0">
        <CldImage
          src="12_fs6kw7"
          alt="Fondo Flores Sons Farms"
          layout="fill"
          className="object-cover"
          quality={100}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
        <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-transparent dark:from-green-500 dark:to-transparent"></span>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Texto y CTA */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white font-serif italic mb-6 leading-tight">
              Flores Sons Farms
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 italic mb-8 font-serif">
              {translations.hero?.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="/contact"
                className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                aria-label="ContÃ¡ctanos"
              >
                {translations.hero?.boton}
              </a>
              <a
                href="/about"
                className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 text-lg flex items-center justify-center gap-2"
                aria-label="Conoce nuestros servicios"
              >
                {translations.hero?.boton1}<FaArrowDown className="animate-bounce" />
              </a>
            </div>
          </div>

          {/* Imagen destacada */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <CldImage
                src="galeria_3_mage9c"
                alt="Productos Flores Sons Farms"
                layout="fill"
                className="rounded-full object-cover border-4 border-white/30 shadow-2xl"
                quality={90}
                loading="lazy"
              />
              <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>

        {/* Redes sociales */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-6 text-white text-2xl">
          {[
            { icon: <FaFacebook />, url: "https://facebook.com", label: "Facebook" },
            { icon: <FaTiktok />, url: "https://tiktok.com", label: "TikTok" },
            { icon: <FaInstagram />, url: "https://instagram.com", label: "Instagram" },
            { icon: <FaTwitter />, url: "https://twitter.com", label: "Twitter" }
          ].map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <FaArrowDown className="text-white text-2xl" />
      </div>
    </section>
  );
}
