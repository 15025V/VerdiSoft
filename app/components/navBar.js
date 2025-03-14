'use client'; // Indica que este es un Client Component
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { FaBars, FaTimes, FaSun, FaMoon, FaMicrophone } from 'react-icons/fa';
import { useLanguage } from '@/app/context/languageContext'; // Importa useLanguage

export default function Navbar() {
  // Estados
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const [searchQuery, setSearchQuery] = useState('');
  const [listening, setListening] = useState(false);

  // Obtener la ruta actual
  const pathname = usePathname();

  // Usar el contexto de idioma
  const { language, changeLanguage } = useLanguage();

  // Cargar el tema guardado en localStorage al montar el componente
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  // Cambiar entre temas claro y oscuro
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Elementos del menú
  const menuItems = [
    { path: '/', es: 'Inicio', en: 'Home' },
    { path: '/about', es: 'Acerca de', en: 'About' },
    { path: '/products', es: 'Catálogo', en: 'Catalog' },
    { path: '/contact', es: 'Contacto', en: 'Contact' },
  ];

  // Iniciar el reconocimiento de voz
  const startListening = () => {
    if (typeof window !== 'undefined' && 'webkitSpeechRecognition' in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.lang = 'es-ES';
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
      alert('Tu navegador no soporta reconocimiento de voz.');
    }
  };

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
        <div className="hidden md:flex items-center border-b ">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={language === 'es' ? 'Buscar...' : 'Search...'}
            className="px-2 py-1 focus:outline-none bg-transparent text-black"
          />
          <button onClick={startListening} className="text-black text-xl ml-2 hover:text-[#49c351]">
            <FaMicrophone className={listening ? 'text-[#49c351] animate-pulse' : ''} />
          </button>
        </div>

        {/* Íconos de idioma y tema */}
        <div className="flex items-center space-x-4">
          <button onClick={() => changeLanguage(language === 'es' ? 'en' : 'es')} className="text-black text-xl cursor-pointer hover:text-[#49c351]">
            {language === 'es' ? '🇪🇸' : '🇬🇧'}
          </button>

          <button onClick={toggleTheme} className="text-black text-xl cursor-pointer hover:text-[#49c351]">
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>

          {/* Botón para abrir/cerrar el menú móvil */}
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