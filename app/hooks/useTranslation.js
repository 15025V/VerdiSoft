'use client';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/app/context/languageContext';

export const useTranslation = () => {
  const { language } = useLanguage();
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    // Cargar el archivo JSON correspondiente al idioma
    import(`@/app/locales/${language}.json`)
      .then((module) => {
        setTranslations(module.default);
      })
      .catch((error) => {
        console.error(`Error loading translations for ${language}:`, error);
      });
  }, [language]);

  return translations;
};