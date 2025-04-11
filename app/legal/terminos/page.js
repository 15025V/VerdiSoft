'use client';
import { useRouter } from 'next/navigation';
export default function TerminosCondiciones() {
  const router = useRouter();
  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100 p-4 py-8">
       <button 
        onClick={() => router.back()}
        className="fixed top-4 left-4 bg-white hover:bg-gray-100 text-gray-800 font-medium py-2 px-4 rounded-lg shadow-md transition-colors duration-200 flex items-center z-50"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
      </button>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full border border-gray-200">

        {/* Encabezado */}
        <div className="bg-green-600 text-white text-center py-4 px-6">
          <h1 className="text-2xl font-bold uppercase">Terminos y Condiciones</h1>
          <p className="text-sm opacity-90">De uso del sitio</p>
        </div>

        {/* Contenido */}
        <div className="p-6 md:p-8 text-gray-800 space-y-6">
          <div className="text-sm text-gray-500 text-right">
            Última actualización: 04/03/2025
          </div>

          <div className="space-y-8">
            {/* Flores Sons Farms*/}
            <div>
              <h2 className="font-semibold text-lg text-green-600 border-b border-green-500 pb-2 mb-3">
                Flores Sons Farms
              </h2>
              <p className="text-justify text-gray-700">
                Bienvenido/a al sitio web de Flores Sons Farms. Al acceder y utilizar este Sitio Web, usted acepta cumplir con los siguientes Términos y Condiciones. Si no está de acuerdo, le recomendamos abstenerse de usarlo.                </p>
            </div>

            {/* Sección 1 */}
            <div>
              <h2 className="font-semibold text-lg text-green-600 border-b border-green-500 pb-2 mb-3">
                1. Objeto del Sitio Web
              </h2>
              <p className="text-justify text-gray-700">
                El Sitio Web tiene como finalidad:
                <ul className="text-justify list-disc pl-5 space-y-1 text-gray-700">
                  <li>Proporcionar información sobre Flores Sons Farms (historia, misión, visión, valores).</li>
                  <li>Mostrar el catálogo de productos.</li>
                  <li>Permitir el contacto a través de: llamadas telefónicas, correo electrónico, formulario de contacto, chatbot y mensajería directa vía WhatsApp.</li>
                </ul>
              </p>
            </div>

            {/* Sección 2 */}
            <div>
              <h2 className="font-semibold text-lg text-green-600 border-b border-green-500 pb-2 mb-3">
                2. Uso Aceptable
              </h2>
              <p className="text-justify text-gray-700">
                El usuario se compromete a utilizar el Sitio Web de manera lícita, sin fines fraudulentos o que vulneren derechos de terceros. <br />Queda prohibido:
                <ul className="text-justify list-disc pl-5 space-y-1 text-gray-700">
                  <li>Copiar, modificar o distribuir contenido sin autorización.</li>
                  <li>Usar bots, spiders o herramientas automatizadas para extraer datos.</li>
                  <li>Realizar acciones que puedan dañar la infraestructura del Sitio Web.</li>
                </ul>
              </p>
            </div>

            {/* Sección 3 */}
            <div>
              <h2 className="font-semibold text-lg text-green-600 border-b border-green-500 pb-2 mb-3">
                3. Contacto y Comunicaciones
              </h2>
              <ul className="text-justify list-disc pl-5 space-y-1 text-gray-700">
                <li>Al usar el formulario, chatbot o WhatsApp, usted acepta que Flores Sons Farms pueda responder a su consulta vía los medios proporcionados.</li>
                <li>La empresa no garantiza disponibilidad inmediata de estos servicios, aunque se esfuerza por atender solicitudes en tiempo razonable.</li>
              </ul>
            </div>
          </div>

          {/* Sección 4 */}
          <div>
            <h2 className="font-semibold text-lg text-green-600 border-b border-green-500 pb-2 mb-3">
              4. Privacidad y Protección de Datos
            </h2>
            <p className="text-justify text-gray-700">
              El tratamiento de datos personales se rige por nuestra Política de Privacidad. Al proporcionar datos (ej. correo, teléfono), usted autoriza su uso para fines de contacto y mejora de servicios.
            </p>
          </div>

          {/* Sección 5 */}
          <div>
            <h2 className="font-semibold text-lg text-green-600 border-b border-green-500 pb-2 mb-3">
              5. Propiedad Intelectual
            </h2>
            <p className="text-justify text-gray-700">
              Usted tiene derecho a:
              <ul className="text-justify list-disc pl-5 space-y-1 text-gray-700">
                <li>Todo el contenido (textos, imágenes, logotipos, catálogos) es propiedad de Flores Sons Farms o cuenta con licencia de uso.</li>
                <li>Queda prohibida su reproducción sin autorización escrita.</li>
              </ul>
            </p>
          </div>

          {/* Sección 6 */}
          <div>
            <h2 className="font-semibold text-lg text-green-600 border-b border-green-500 pb-2 mb-3">
              6. Limitación de Responsabilidad
            </h2>
            <p className="text-justify text-gray-700">
              Flores Sons Farms no se hace responsable por:
              <ul className="text-justify list-disc pl-5 space-y-1 text-gray-700">
                <li>Interrupciones técnicas o fallos en el Sitio Web.</li>
                <li>Mal uso del contenido por parte de terceros.</li>
                <li>Decisiones tomadas por el usuario basadas en información del Sitio Web.</li>
              </ul>
            </p>
          </div>

          {/* Sección 7 */}
          <div>
            <h2 className="font-semibold text-lg text-green-600 border-b border-green-500 pb-2 mb-3">
              7. Enlaces a Terceros
            </h2>
            <p className="text-justify text-gray-700">
              El Sitio Web puede incluir enlaces a sitios externos. Flores Sons Farms no controla ni asume responsabilidad por el contenido o prácticas de privacidad de estos.
            </p>
          </div>

          {/* Sección 8 */}
          <div>
            <h2 className="font-semibold text-lg text-green-600 border-b border-green-500 pb-2 mb-3">
              8. Modificaciones
            </h2>
            <p className="text-justify text-gray-700">
              Estos Términos pueden actualizarse sin previo aviso. Se recomienda revisarlos periódicamente.
            </p>
          </div>

          {/* Aceptación */}
          <div className="bg-gray-50 p-4 rounded border border-gray-200 mt-8">
            <p className="text-justify text-sm text-gray-700 italic">
              Ley Aplicable y Jurisdicción. Se rigen por las leyes de (México/Puebla). Cualquier disputa se resolverá en los tribunales competentes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}