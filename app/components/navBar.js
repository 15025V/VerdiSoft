'use client'
import { useState } from 'react';
import Image from 'next/image';
import { FaSearch, FaBars, FaTimes, FaMicrophone, FaSun, FaMoon } from 'react-icons/fa';
import { useLanguage } from '../context/languageContext';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const [searchQuery, setSearchQuery] = useState('');
  const { language, changeLanguage } = useLanguage();

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const handleLanguageChange = () => {
    changeLanguage(language === 'es' ? 'en' : 'es');
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

  // Traducciones del menú
  const menuItems = [
    { path: '/', es: 'Inicio', en: 'Home' },
    { path: '/about', es: 'Acerca de', en: 'About' },
    { path: '/products', es: 'Catálogo', en: 'Catalog' },
    { path: '/contact', es: 'Contacto', en: 'Contact' },
  ];

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center">
      <div className="max-w-[1100px] w-full bg-white/30 backdrop-blur-lg shadow-md rounded-full px-6 lg:px-12 py-2 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/flores.png" alt="Logo" width={200} height={90} />
        </div>

        {/* Menú en escritorio */}
        <ul className="hidden md:flex space-x-8 font-semibold">
          {menuItems.map((item) => (
            <li key={item.path}>
              <a href={item.path} className="hover:text-[#49c351]">
                {language === 'es' ? item.es : item.en}
              </a>
            </li>
          ))}
        </ul>

        {/* Ícono de búsqueda, micrófono, idioma y tema */}
        <div className="flex items-center space-x-4">
    <div className="hidden md:flex items-center bg-white/20 backdrop-blur-sm rounded-full">
        <input 
            type="text" 
            className="p-2 bg-transparent rounded-l-full w-full max-w-xs text-white placeholder-black focus:outline-none"
            placeholder={language === 'es' ? 'Buscar...' : 'Search...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
        />
   
            <button className="p-2 rounded-r-full bg-[#49c351] text-white hover:bg-[#3aa742] transition-colors duration-300">
              <FaSearch />
            </button>
          </div>

          <button onClick={startVoiceSearch} className="text-black text-xl cursor-pointer hover:text-[#49c351]">
            <FaMicrophone />
          </button>

          <button onClick={handleLanguageChange} className="text-black text-xl cursor-pointer hover:text-[#49c351]">
            {language === 'es' ? '🇪🇸' : '🇬🇧'}
          </button>

          <button onClick={toggleTheme} className="text-black text-xl cursor-pointer hover:text-[#49c351]">
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
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
                  className="hover:text-green-600 block py-2"
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