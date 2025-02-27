'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FaSun, FaMoon, FaMicrophone, FaBars } from 'react-icons/fa';
import { useLanguage } from '../context/languageContext';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const [searchQuery, setSearchQuery] = useState('');
  const pathname = usePathname();
  const { language, changeLanguage } = useLanguage();

  const isActive = (path) =>
    pathname === path ? 'text-orange-400 font-semibold' : theme === 'light' ? 'text-gray-700' : 'text-gray-200';

  const handleLinkClick = () => setIsMenuOpen(false);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const startVoiceSearch = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert('Tu navegador no soporta reconocimiento de voz.');
      return;
    }
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = language === 'es' ? 'es-ES' : 'en-US';
    recognition.start();
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setSearchQuery(transcript);
      searchOnPage(transcript);
    };
  };

  const searchOnPage = (query) => {
    const elements = document.body.querySelectorAll('*');
    for (let element of elements) {
      if (element.textContent.toLowerCase().includes(query.toLowerCase())) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }
    }
    alert(`No se encontró "${query}" en la página.`);
  };

  return (
    <nav className={`sticky top-0 left-0 w-full flex items-center justify-between px-4 z-50 shadow-md ${theme === 'light' ? 'bg-white' : 'bg-black'}`}>
      <div className="flex items-center">
        <Image src="/logo1.png" alt="Logo" width={80} height={75} />
      </div>

      <div className="hidden md:flex items-center justify-center flex-grow">
        <ul className="flex gap-6">
          {[ 
            { path: '/', label: language === 'es' ? 'Inicio' : 'Home' },
            { path: '/about', label: language === 'es' ? 'Nosotros' : 'About Us' },
            { path: '/products', label: language === 'es' ? 'Catálogo' : 'Catalog' },
            { path: '/contact', label: language === 'es' ? 'Contacto' : 'Contact' },
          ].map(({ path, label }) => (
            <li key={path}>
              <Link href={path} className={`relative block px-4 py-2 ${isActive(path)} hover:text-orange-400 transition-all duration-300 ease-in-out group`} onClick={handleLinkClick}>
                {label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-center flex-grow">
        <input 
          type="text" 
          className="p-2 border rounded-md w-full max-w-xs text-black"
          placeholder={language === 'es' ? 'Buscar...' : 'Search...'}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={startVoiceSearch} className="ml-2 text-2xl hover:text-orange-400 transition-all duration-300 ease-in-out">
          <FaMicrophone />
        </button>
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl hover:text-orange-400 transition-all duration-300 ease-in-out">
          <FaBars />
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-black shadow-md p-4 flex flex-col items-center md:hidden">
          {[ 
            { path: '/', label: language === 'es' ? 'Inicio' : 'Home' },
            { path: '/about', label: language === 'es' ? 'Nosotros' : 'About Us' },
            { path: '/products', label: language === 'es' ? 'Catálogo' : 'Catalog' },
            { path: '/contact', label: language === 'es' ? 'Contacto' : 'Contact' },
          ].map(({ path, label }) => (
            <Link key={path} href={path} className="block py-2 w-full text-center hover:text-orange-400" onClick={handleLinkClick}>
              {label}
            </Link>
          ))}

          <button onClick={() => changeLanguage(language === 'es' ? 'en' : 'es')} className="mt-2 text-2xl hover:text-orange-400 transition-all duration-300 ease-in-out">
            {language === 'es' ? '🇪🇸' : '🇬🇧'}
          </button>
        </div>
      )}

      <div className="hidden md:flex items-center gap-4">
        <button
          onClick={() => changeLanguage(language === 'es' ? 'en' : 'es')}
          className="text-xl hover:text-orange-400 transition-all duration-300 ease-in-out"
        >
          {language === 'es' ? '🇪🇸' : '🇬🇧'}
        </button>

        <button
          onClick={toggleTheme}
          className="text-2xl hover:text-orange-400 transition-all duration-300 ease-in-out"
        >
          {theme === 'light' ? <FaMoon className="text-gray-700 hover:shadow-lg" /> : <FaSun className="text-gray-200 hover:shadow-lg" />}
        </button>
      </div>
    </nav>
  );
}
