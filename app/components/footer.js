'use client'

import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaEnvelope,
  FaPhoneAlt,
  FaTwitter,
} from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { useTranslation } from '@/app/hooks/useTranslation'
import Link from 'next/link'

const Footer = () => {
  const translations = useTranslation()

  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row md:justify-between md:items-start gap-10">
        {/* Contacto */}
        <div className="text-center md:text-left md:flex-1">
          <h4 className="text-white text-lg font-semibold mb-4">
            {translations?.foo?.title || 'Contacto'}
          </h4>
          <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
            <FaPhoneAlt className="text-green-400" />
            <a
              href="tel:5951098274"
              className="hover:text-white transition-colors duration-200"
            >
              595-109-8274
            </a>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-3">
            <FaEnvelope className="text-green-400" />
            <a
              href="mailto:info@example.com"
              className="hover:text-white transition-colors duration-200"
            >
              ejemplo@gmail.com
            </a>
          </div>
        </div>

        {/* Enlaces rápidos */}
        <div className="text-center md:text-left md:flex-1">
          <h4 className="text-white text-lg font-semibold mb-4">
            {translations?.foo?.rapidos || 'Enlaces Rápidos'}
          </h4>
          <nav className="flex flex-col space-y-2">
            <Link
              href="/legal/politicas"
              className="hover:text-white transition-colors duration-200"
            >
              {translations?.foo?.poli || 'Políticas de Privacidad'}
            </Link>
            <Link
              href="/legal/terminos"
              className="hover:text-white transition-colors duration-200"
            >
              {translations?.foo?.ter || 'Términos y Condiciones'}
            </Link>
          </nav>
        </div>

        {/* Redes sociales */}
        <div className="text-center md:text-left md:flex-1">
          <h4 className="text-white text-lg font-semibold mb-4">
            {translations?.foo?.redes || 'Síguenos'}
          </h4>
          <div className="flex justify-center md:justify-start space-x-6 text-3xl">
            <a
              href="https://www.facebook.com/share/1HmTyTB5LW/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-green-400 transition-colors"
            >
              <FaFacebook />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="hover:text-green-400 transition-colors"
            >
              <FaTiktok />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-green-400 transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-green-400 transition-colors"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()}{' '}
        {translations?.foo?.derechos_rosy }
      </div>
    </footer>
  )
}

export default Footer
