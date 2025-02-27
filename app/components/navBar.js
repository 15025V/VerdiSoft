'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function navBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path ? 'text-green-500 font-semibold' : 'text-gray-700';

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50 transition-all">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/">
          <Image src="/logo1.png" alt="Logo" width={80} height={75} />
        </Link>

        <ul className="hidden md:flex gap-6">
          {[{ path: '/', label: 'Inicio' }, { path: '/about', label: 'Nosotros' }, { path: '/products', label: 'Catálogo' }, { path: '/contact', label: 'Contacto'}].map(({ path, label }) => (
            <li key={path}>
              <Link href={path} className={`relative px-4 py-2 ${isActive(path)} hover:text-green-500 transition-all`}>
                {label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 transition-all group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-3">
            <FaFacebookF className="text-gray-600 hover:text-green-500 transition-all cursor-pointer" />
            <FaTwitter className="text-gray-600 hover:text-green-500 transition-all cursor-pointer" />
            <FaInstagram className="text-gray-600 hover:text-green-500 transition-all cursor-pointer" />
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-green-500 focus:outline-none">
            ☰
          </button>
        </div>
      </nav>

      <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 transition-all ${isMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col gap-4">
          {[{ path: '/', label: 'Inicio' }, { path: '/about', label: 'Nosotros' }, { path: '/products', label: 'Catálogo' }, { path: '/contact', label: 'Contacto' }].map(({ path, label }) => (
            <li key={path}>
              <Link href={path} className={`block px-4 py-2 ${isActive(path)} hover:text-green-500 transition-all`} onClick={() => setIsMenuOpen(false)}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
