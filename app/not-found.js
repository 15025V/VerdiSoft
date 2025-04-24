// app/not-found.js
'use client';
import Link from 'next/link';
import { CldImage } from 'next-cloudinary';


{/*export const metadata = {
  title: '404 - Página no encontrada',
  description: 'Lo sentimos, la página que estás buscando no existe.',
};*/}

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center p-6">
      {/* Imagen de cilantro (parte superior) */}
      <div className="mb-8">
        <CldImage
          src="404_pxbddj" // Ruta de la imagen en la carpeta public
          alt="Error 404"
          width={300} // Ancho de la imagen
          height={300} // Alto de la imagen
          className="rounded-full shadow-lg" // Estilos adicionales
        />
      </div>

      {/* Frase chistosa */}
      <p className="text-2xl font-semibold text-gray-800 mb-4">
        ¡Ups! La página que buscas no está disponible. Parece que se ha perdido como una hoja de cilantro.
      </p>

    

      {/* Botón para volver al inicio */}
      <Link
        href="/"
        className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow-lg"
      >
        Volver al inicio
      </Link>
    </div>
  );
}