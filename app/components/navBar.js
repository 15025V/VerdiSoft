'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const pathname = usePathname();

  const isActive = (path, string) =>
    pathname === path ? 'text-orange-400 font-semibold' : theme === 'light' ? 'text-gray-700' : 'text-gray-200';

  const handleLinkClick = () => setIsMenuOpen(false);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme = prefersDarkMode ? 'dark' : 'light';
      setTheme(initialTheme);
      document.documentElement.setAttribute('data-theme', initialTheme);
    }
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 z-50 shadow-md ${
          theme === 'light' ? 'bg-white' : 'bg-black'
        }`}
      >
        <div>
          <Image src="/logo1.png" alt="Logo" width={80} height={75} />
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="block md:hidden text-green-400 focus:outline-none"
          aria-label="Abrir menú"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5m-16.5 5.25h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>

        <ul
          className={`flex flex-col md:flex-row gap-4 absolute md:static top-20 left-0 w-full ${
            theme === 'light' ? 'bg-white' : 'bg-gray-900'
          } md:w-auto md:bg-transparent md:items-center transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'block z-50 opacity-100' : 'hidden md:flex opacity-0 md:opacity-100'
          }`}
        >
          {[
            { path: '/', label: 'Inicio' },
            { path: '/about', label: 'Nosotros' },
            { path: '/products', label: 'Catalogo' },
            { path: '/contact', label: 'Contacto' }
          ].map(({ path, label }) => (
            <li key={path}>
              <Link href={path} className={`relative block px-4 py-2 md:inline ${isActive(path)} hover:text-orange-400 transition-all duration-300 ease-in-out group`} onClick={handleLinkClick}>
                {label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </Link>
            </li>
          ))}

          <li>
            <button onClick={toggleTheme} className="text-2xl ml-4 hover:text-orange-400 transition-all duration-300 ease-in-out" aria-label="Cambiar tema">
              {theme === 'light' ? <FaMoon className="text-gray-700 hover:shadow-lg" /> : <FaSun className="text-gray-200 hover:shadow-lg" />}
            </button>
          </li>
        </ul>
      </nav>

      {/* Espacio para evitar que el contenido quede oculto detrás de la navbar */}
      <div className="pt-20"></div>
    </>
  );
}
