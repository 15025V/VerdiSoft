export default function TerminosCondiciones() {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-6xl w-full border">
          {/* Encabezado */}
          <div className="bg-green-600 text-white text-center py-3 rounded-t-lg">
            <h1 className="text-xl font-bold uppercase">Términos y Condiciones</h1>
            <p className="text-sm">De uso del sitio</p>
          </div>
  
          {/* Contenido */}
          <div className="p-6 text-gray-800">
            <h2 className="font-semibold text-lg mt-2">Última actualización: [04/03/2025]</h2>
            <p className="text-sm mt-1">
            Bienvenido/a al sitio web de Flores Sons Farms. Al acceder y utilizar este Sitio Web, usted acepta cumplir con los siguientes Términos y Condiciones. Si no está de acuerdo, le recomendamos abstenerse de usarlo.
            </p>
  
            <h2 className="font-semibold text-lg mt-4">1. Objeto del Sitio Web</h2>
            <p className="text-sm mt-1">
            El Sitio Web tiene como finalidad:
            </p>
            <ul className="list-disc pl-5 text-sm mt-1 space-y-1">
              <li>Proporcionar información sobre Flores Sons Farms (historia, misión, visión, valores)</li>
              <li>Mostrar el catálogo de productos.</li>
              <li>Permitir el contacto a través de: llamadas telefónicas, correo electrónico, formulario de contacto, chatbot y mensajería directa vía WhatsApp.</li>
            </ul>
  
            <h2 className="font-semibold text-lg mt-4">2. Uso Aceptable</h2>
            <p className="text-sm mt-1">
            El usuario se compromete a utilizar el Sitio Web de manera lícita, sin fines fraudulentos o que vulneren derechos de terceros.
            </p>
            <p className="text-sm mt-1">Queda prohibido:</p>
            <ul className="list-disc pl-5 text-sm mt-1 space-y-1">
              <li>Copiar, modificar o distribuir contenido sin autorización.</li>
              <li>Usar bots, spiders o herramientas automatizadas para extraer datos.</li>
              <li>Realizar acciones que puedan dañar la infraestructura del Sitio Web.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }