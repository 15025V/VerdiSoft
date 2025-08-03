'use client'

import React from 'react'
import { useTranslation } from '@/app/hooks/useTranslation'
import { motion } from 'framer-motion'

export default function SomosSection() {
  const translations = useTranslation()

  return (
    <section
      id="whoweare"
      role="main"
      className="relative py-28 md:py-36 overflow-hidden transition-colors duration-500"
      aria-labelledby="quienes-somos-heading"
    >
      {/* Círculos decorativos con animación */}
      <div className="absolute inset-0 duration-700">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut', delay: 2 }}
          className="absolute top-20 left-20 w-40 h-40 rounded-full bg-green-200 dark:bg-green-200 animate-blob transition-colors duration-500"
        ></motion.div>
        <motion.div
          animate={{ y: [0, -25, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut', delay: 4 }}
          className="absolute bottom-20 left-1/3 w-52 h-52 rounded-full bg-green-200 dark:bg-green-200 animate-blob transition-colors duration-500"
        ></motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2
            id="quienes-somos-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-serif inline-block relative transition-colors duration-500 pb-3"
          >
            {translations.somos?.title}
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-green-400 to-transparent dark:from-green-400 dark:via-green-300 transition-colors duration-500"></span>
          </h2>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto backdrop-blur-sm p-10 md:p-14 rounded-2xl shadow-lg dark:shadow-xl dark:shadow-gray-900/50 border border-white/30 dark:border-gray-700/30 transition-all duration-500"
        >
          {/* Párrafos divididos */}
          {translations.somos?.description
            ?.split('\n')
            .map((paragraph, index) => (
              <p
                key={index}
                className="text-lg md:text-xl leading-relaxed md:leading-loose text-justify font-serif mt-4 transition-colors duration-500"
              >
                {paragraph}
              </p>
            ))}

          {/* Misión, Visión, Valores - animados en cascada */}
          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: { staggerChildren: 0.2 }
              }
            }}
          >
            {['mision', 'vision', 'valores'].map((item) => (
              <motion.div
                key={item}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-3 bg-green-50/80 px-6 py-3 rounded-full border border-green-100 dark:border-gray-600 transition-all duration-500 hover:scale-105 hover:bg-green-100/80 cursor-pointer"
              >
                <div className="w-3 h-3 rounded-full bg-green-500 dark:bg-green-400 animate-pulse transition-colors duration-500"></div>
                <span className="font-medium text-green-800 dark:text-green-200 transition-colors duration-500">
                  {translations.somos?.[item]}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
