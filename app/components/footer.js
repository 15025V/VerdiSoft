'use client';
import { FaFacebook, FaInstagram, FaTiktok, FaEnvelope, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { useTranslation } from "@/app/hooks/useTranslation";
import Link from 'next/link'; // Importa el componente Link

const Footer = () => {
  const translations = useTranslation();
  return (
    <footer className="bg-black text-gray-300 py-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold mb-4">{translations?.foo?.title}</p>
            {/* Teléfono ahora aparece primero */}
            <div className="flex items-center justify-center md:justify-start mb-4">
              <a
                href="tel:595-109-8274"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 text-xl gap-3"
                aria-label="Teléfono"
              >
                <FaPhoneAlt />
              </a>
              <a href="tel:+1234567890" className="hover:text-white ml-2">595-109-8274</a>
            </div>
            {/* Correo electrónico ahora aparece después del teléfono */}
            <div className="flex items-center justify-center md:justify-start">
              <a
                href="mailto:info@example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 text-xl gap-3"
                aria-label="Correo"
              >
                <FaEnvelope />
              </a>
              <a href="mailto:info@example.com" className="hover:text-white ml-2">ejemplo@gmail.com</a>
            </div>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold mb-4">{translations?.foo?.rapidos}</p>
            <nav className="flex flex-col space-y-2">
              <Link href="/legal/politicas" className="hover:text-white transition-colors duration-200">
                {translations?.foo?.poli}
              </Link>
              <Link href="/legal/terminos" className="hover:text-white transition-colors duration-200">
                {translations?.foo?.ter}
              </Link>
            </nav>
          </div>
          <div className="text-center md:text-right">
            <p className="text-lg font-semibold mb-4">{translations?.foo?.redes}</p>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 text-xl"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 text-xl"
                aria-label="TikTok"
              >
                <FaTiktok />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 text-xl"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 text-xl"
                aria-label="Twitter"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm">© {new Date().getFullYear()} {translations?.foo?.derechos_rosy}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;