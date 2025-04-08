'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { FaBars, FaTimes, FaSun, FaMoon, FaMicrophone } from 'react-icons/fa';
import { useLanguage } from '@/app/context/languageContext';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const [searchQuery, setSearchQuery] = useState('');
  const [listening, setListening] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [voiceFeedback, setVoiceFeedback] = useState('');

  const pathname = usePathname();
  const router = useRouter();
  const { language, changeLanguage } = useLanguage();

  useEffect(() => {
    setIsMounted(true);
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Cargar idioma guardado
    const savedLang = localStorage.getItem('language');
    if (savedLang && changeLanguage) {
      changeLanguage(savedLang);
    }
  }, [changeLanguage]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const handleLanguageChange = () => {
    const newLang = language === 'es' ? 'en' : 'es';
    changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  const menuItems = [
    { path: '/', es: 'Inicio', en: 'Home' },
    { path: '/about', es: 'Acerca de', en: 'About' },
    { path: '/products', es: 'Productos', en: 'Products' },
    { path: '/contact', es: 'Contacto', en: 'Contact' },
  ];

  const sectionMap = {
    '¿quiénes somos?': { page: '/', id: 'who we are' },
    'who we are': { page: '/', id: 'who we are' },
    '¿conoce nuestros productos?': { page: '/', id: 'get to know our products' },
    'get to know our products': { page: '/', id: 'get to know our products' },
    'área de la empresa': { page: '/', id: 'área' },
    'galería': { page: '/', id: 'gallery' },
    'gallery': { page: '/', id: 'gallery' },
    'ubicacion': { page: '/', id: 'find us on' },
    'find us on': { page: '/', id: 'find us on' },
    'certificaciones': { page: '/', id: 'certifications' },
    'certifications': { page: '/', id: 'certifications' },
    'conoce más de flores sons farms': { page: '/', id: 'learn more about Flores Sons Farms' },
    'learn more about flores sons farms': { page: '/', id: 'learn more about Flores Sons Farms' },
    'conoce nuesta historia': { page: '/about', id: 'history' },
    'history': { page: '/about', id: 'history' },
    'nuestra misión': { page: '/about', id: 'mission' },
    'misión': { page: '/about', id: 'mission' },
    'mission': { page: '/about', id: 'mission' },
    'nuestra visión': { page: '/about', id: 'vision' },
    'visión': { page: '/about', id: 'vision' },
    'vision': { page: '/about', id: 'vision' },
    'nuestros valores': { page: '/about', id: 'values' },
    'valores': { page: '/about', id: 'values' },
    'values': { page: '/about', id: 'values' },
    'productos más vendidos': { page: '/products', id: 'product' },
    'product': { page: '/products', id: 'product' },
    'cebolla': { page: '/products', id: 'cebo' },
    'cebo': { page: '/products', id: 'cebo' },
    'información de contacto': { page: '/contact', id: 'information' },
    'information': { page: '/contact', id: 'information' },
    'horario de atención.': { page: '/contact', id: 'schedule' },
    'schedule': { page: '/contact', id: 'schedule' },
    'sucursales': { page: '/contact', id: 'located in' },
    'located in': { page: '/contact', id: 'located in' },
    'formulario': { page: '/contact', id: 'contact-form' },
    'contact form': { page: '/contact', id: 'contact-form' },
  };

  const normalizeText = (text) =>
    text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  const navigateToSection = (sectionKey) => {
    const section = sectionMap[sectionKey];
    if (!section) {
      setVoiceFeedback(language === 'es' ? 'Sección no encontrada' : 'Section not found');
      return;
    }

    if (pathname === section.page) {
      const element = document.getElementById(section.id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setVoiceFeedback(language === 'es' ? `Mostrando ${sectionKey}` : `Showing ${sectionKey}`);
      } else {
        setVoiceFeedback(language === 'es' ? 'Sección no encontrada' : 'Section not found');
      }
    } else {
      router.push(`${section.page}#${section.id}`);
      setVoiceFeedback(language === 'es' ? `Redirigiendo a ${sectionKey}` : `Redirecting to ${sectionKey}`);
    }
  };

  const handleTextSearch = () => {
    const query = normalizeText(searchQuery.trim());

    const matchedItem = menuItems.find((item) =>
      normalizeText(language === 'es' ? item.es : item.en).includes(query)
    );

    const matchedSection = Object.keys(sectionMap).find((key) =>
      normalizeText(key).includes(query)
    );

    if (matchedItem) {
      router.push(matchedItem.path);
      setVoiceFeedback(
        language === 'es' ? `Redirigiendo a ${matchedItem.es}` : `Redirecting to ${matchedItem.en}`
      );
    } else if (matchedSection) {
      navigateToSection(matchedSection);
    } else {
      setVoiceFeedback(language === 'es' ? `No se encontró: "${searchQuery}"` : `Not found: "${searchQuery}"`);
    }

    setSearchQuery('');
  };

  const startListening = () => {
    if (!isMounted || !('webkitSpeechRecognition' in window)) {
      alert(
        language === 'es'
          ? 'Tu navegador no soporta reconocimiento de voz.'
          : 'Your browser does not support speech recognition.'
      );
      return;
    }

    const recognition = new (window.webkitSpeechRecognition || window.SpeechRecognition)();
    recognition.lang = language === 'es' ? 'es-ES' : 'en-US';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      setListening(true);
      setVoiceFeedback(language === 'es' ? 'Escuchando...' : 'Listening...');
    };

    recognition.onresult = (event) => {
      const result = event.results[0][0].transcript.toLowerCase();
      setSearchQuery(result);

      const normalizedResult = normalizeText(result);

      const matchedItem = menuItems.find((item) =>
        normalizeText(language === 'es' ? item.es : item.en).includes(normalizedResult)
      );

      const matchedSection = Object.keys(sectionMap).find((key) =>
        normalizeText(key).includes(normalizedResult)
      );

      if (matchedItem) {
        router.push(matchedItem.path);
        setVoiceFeedback(
          language === 'es' ? `Redirigiendo a ${matchedItem.es}` : `Redirecting to ${matchedItem.en}`
        );
      } else if (matchedSection) {
        navigateToSection(matchedSection);
      } else {
        setVoiceFeedback(language === 'es' ? `No se encontró: "${result}"` : `Not found: "${result}"`);
      }
    };

    recognition.onerror = () => {
      setListening(false);
      setVoiceFeedback(language === 'es' ? 'Error en reconocimiento' : 'Recognition error');
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognition.start();
  };

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
        <div className="flex items-center">
          <Image src="/flores.png" alt="Logo" width={200} height={90} priority />
        </div>

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

        <div className="hidden md:flex items-center border-b">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleTextSearch()}
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

        <div className="flex items-center space-x-4">
          <button
            onClick={handleLanguageChange}
            className="text-black text-xl cursor-pointer hover:text-[#49c351]"
          >
            {language === 'es' ? '🇪🇸' : '🇬🇧'}
          </button>

          <button
            onClick={toggleTheme}
            className="text-black text-xl cursor-pointer hover:text-[#49c351]"
          >
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </div>

      {voiceFeedback && (
        <div className="fixed top-20 right-4 bg-white p-3 rounded-lg shadow-lg border border-gray-200 z-50 max-w-xs">
          <p className="text-sm text-gray-800">
            {listening ? (
              <span className="flex items-center">
                <span className="relative flex h-3 w-3 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                {voiceFeedback}
              </span>
            ) : (
              voiceFeedback
            )}
          </p>
        </div>
      )}
    </nav>
  );
}