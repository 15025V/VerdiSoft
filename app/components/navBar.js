'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { FaBars, FaTimes, FaSun, FaMoon, FaMicrophone } from 'react-icons/fa';
import { useLanguage } from '@/app/context/languageContext';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const [searchQuery, setSearchQuery] = useState('');
  const [listening, setListening] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const pathname = usePathname();
  const { language, changeLanguage } = useLanguage();

  // Efecto para manejar el montaje y el tema
  useEffect(() => {
    setIsMounted(true);
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const menuItems = [
    { path: '/', es: 'Inicio', en: 'Home' },
    { path: '/about', es: 'Acerca de', en: 'About' },
    { path: '/products', es: 'Catálogo', en: 'Catalog' },
    { path: '/contact', es: 'Contacto', en: 'Contact' },
  ];

  const startListening = () => {
    if (isMounted && 'webkitSpeechRecognition' in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.lang = language === 'es' ? 'es-ES' : 'en-US';
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onstart = () => setListening(true);
      recognition.onresult = (event) => {
        setSearchQuery(event.results[0][0].transcript);
      };
      recognition.onerror = () => setListening(false);
      recognition.onend = () => setListening(false);

      recognition.start();
    } else {
      alert(language === 'es' 
        ? 'Tu navegador no soporta reconocimiento de voz.' 
        : 'Your browser does not support speech recognition.');
    }
  };

  // Render simplificado durante SSR
  if (!isMounted) {
    return (
      <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center">
        <div className="max-w-[1100px] w-full bg-white shadow-md rounded-full px-6 lg:px-12 py-2 h-16" />
      </nav>
    );
  }

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center">
      <div className="max-w-[1100px] w-full text-black bg-white shadow-md rounded-full px-6 lg:px-12 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image 
            src="/flores.png" 
            alt="Logo" 
            width={200} 
            height={90} 
            priority
          />
        </div>

        {/* Menú en escritorio */}
        <ul className="hidden md:flex space-x-8 font-semibold">
          {menuItems.map((item) => (
            <li key={item.path}>
              <a
                href={item.path}
                className={`hover:text-[#49c351] transition-colors duration-300 ${
                  pathname === item.path ? 'text-[#49c351] font-bold' : ''
                }`}
              >
                {language === 'es' ? item.es : item.en}
              </a>
            </li>
          ))}
        </ul>

        {/* Barra de búsqueda con micrófono */}
        <div className="hidden md:flex items-center border-b">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={language === 'es' ? 'Buscar...' : 'Search...'}
            className="px-2 py-1 focus:outline-none bg-transparent text-black w-40"
          />
          <button 
            onClick={startListening} 
            className="text-black text-xl ml-2 hover:text-[#49c351]"
            aria-label={language === 'es' ? 'Buscar por voz' : 'Voice search'}
          >
            <FaMicrophone className={listening ? 'text-[#49c351] animate-pulse' : ''} />
          </button>
        </div>

        {/* Controles de idioma y tema */}
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => changeLanguage(language === 'es' ? 'en' : 'es')} 
            className="text-black text-xl cursor-pointer hover:text-[#49c351]"
            aria-label={language === 'es' ? 'Cambiar idioma' : 'Change language'}
          >
            {language === 'es' ? '🇪🇸' : '🇬🇧'}
          </button>

          <button 
            onClick={toggleTheme} 
            className="text-black text-xl cursor-pointer hover:text-[#49c351]"
            aria-label={theme === 'light' ? 'Cambiar a modo oscuro' : 'Change to light mode'}
          >
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>

          {/* Botón de menú móvil */}
          <button 
            className="md:hidden" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {menuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-14 left-0 w-full py-4">
          <ul className="flex flex-col items-center space-y-4 text-gray-900">
            {menuItems.map((item) => (
              <li key={item.path}>
                <a
                  href={item.path}
                  className={`hover:text-[#49c351] block py-2 ${
                    pathname === item.path ? 'text-[#49c351] font-bold' : ''
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {language === 'es' ? item.es : item.en}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}