export default function TerminosCondiciones() {
  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100 p-4 py-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full border border-gray-200">
        {/* Encabezado */}
        <div className="bg-green-600 text-white text-center py-4 px-6">
          <h1 className="text-2xl font-bold uppercase">Política de Privacidad</h1>
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
                En Flores Sons Farms nos comprometemos a proteger la privacidad de los usuarios de nuestro sitio web. Esta política explica cómo recopilamos, usamos y protegemos su información personal. Al utilizar nuestro sitio, usted acepta estas prácticas.              </p>
            </div>

            {/* Sección 1 */}
            <div>
              <h2 className="font-semibold text-lg text-green-600 border-b border-green-500 pb-2 mb-3">
                1. Información que Recopilamos
              </h2>
              <p className="text-justify text-gray-700">
                Podemos recopilar los siguientes datos cuando usted interactúa con nuestro sitio web:
                <ul className="text-justify list-disc pl-5 space-y-1 text-gray-700">
                  <li>Datos de contacto: Nombre, correo electrónico, teléfono, empresa (si los proporciona en formularios o chatbot).</li>
                  <li>Datos de comunicación: Mensajes enviados vía WhatsApp, correo electrónico o chatbot.</li>
                  <li>Datos técnicos: Dirección IP, tipo de navegador, páginas visitadas (mediante cookies o herramientas de análisis como Google Analytics).</li>
                </ul>
              </p>
            </div>

            {/* Sección 2 */}
            <div>
              <h2 className="font-semibold text-lg text-green-600 border-b border-green-500 pb-2 mb-3">
                2. Finalidad del Tratamiento de Datos
              </h2>
              <p className="text-justify text-gray-700">
                Usamos su información para:
                <ul className="text-justify list-disc pl-5 space-y-1 text-gray-700">
                  <li>Responder consultas enviadas por formularios, correo, WhatsApp o chatbot.</li>
                  <li>Mejorar nuestros productos y servicios.</li>
                  <li>Enviar información comercial (solo si usted dio consentimiento expreso).</li>
                  <li>Garantizar la seguridad del sitio web.</li>
                </ul>
              </p>
            </div>

            {/* Sección 3 */}
            <div>
              <h2 className="font-semibold text-lg text-green-600 border-b border-green-500 pb-2 mb-3">
                3. Bases Legales para el Tratamiento
              </h2>
              <ul className="text-justify list-disc pl-5 space-y-1 text-gray-700">
                <li>Consentimiento: Al enviar un formulario o mensaje, acepta el procesamiento de sus datos para responder su consulta.</li>
                <li>Interés legítimo: Para análisis de tráfico web y prevención de fraudes.</li>
                <li>Cumplimiento legal: Si la ley lo exige (ej. facturación).</li>
              </ul>
            </div>
          </div>
          {/* Sección 4 */}
          <div>
            <h2 className="font-semibold text-lg text-green-600 border-b border-green-500 pb-2 mb-3">
              4. Compartir Datos con Terceros
            </h2>
            <p className="text-justify text-gray-700">
              Sus datos no serán vendidos. Podrán ser compartidos con:
              <ul className="text-justify list-disc pl-5 space-y-1 text-gray-700">
                <li>Proveedores de servicios: Empresas de hosting, herramientas de análisis web o plataformas de mensajería (WhatsApp, Meta).</li>
                <li>Autoridades: Solo si existe obligación legal.</li>
              </ul>
            </p>
          </div>
          {/* Sección 5 */}
          <div>
            <h2 className="font-semibold text-lg text-green-600 border-b border-green-500 pb-2 mb-3">
            5. Derechos del Usuario
            </h2>
            <p className="text-justify text-gray-700">
            Usted tiene derecho a:
            <ul className="text-justify list-disc pl-5 space-y-1 text-gray-700">
                <li>Acceder, rectificar o eliminar sus datos.</li>
                <li>Revocar su consentimiento (contactándonos a [correo/teléfono]).</li>
                <li>Presentar reclamo ante la autoridad de protección de datos de su país.</li>
              </ul>
            </p>
          </div>
          {/* Sección 6 */}
          <div>
            <h2 className="font-semibold text-lg text-green-600 border-b border-green-500 pb-2 mb-3">
            6. Seguridad de los Datos
            </h2>
            <p className="text-justify text-gray-700">
            Implementamos medidas técnicas y organizativas para proteger su información, aunque ningún sistema es 100% invulnerable.</p>
          </div>
                 {/* Sección 7 */}
                 <div>
            <h2 className="font-semibold text-lg text-green-600 border-b border-green-500 pb-2 mb-3">
            7. Cookies y Tecnologías Similares
            </h2>
            <p className="text-justify text-gray-700">
            Usamos cookies para:
            <ul className="text-justify list-disc pl-5 space-y-1 text-gray-700">
                <li>Analizar tráfico web (Google Analytics).</li>
                <li>Mejorar la experiencia de usuario.</li>
                <li>Puede gestionarlas desde la configuración de su navegador.</li>
              </ul>
            </p>
          </div>
          {/* Sección 8 */}
          <div>
            <h2 className="font-semibold text-lg text-green-600 border-b border-green-500 pb-2 mb-3">
            8. Enlaces a Terceros
            </h2>
            <p className="text-justify text-gray-700">
            Nuestro sitio puede contener enlaces a otros sitios. No somos responsables por sus prácticas de privacidad.</p>
          </div>
           {/* Sección 9 */}
           <div>
            <h2 className="font-semibold text-lg text-green-600 border-b border-green-500 pb-2 mb-3">
            9. Menores de Edad
            </h2>
            <p className="text-justify text-gray-700">
            No recopilamos datos de menores de [edad según legislación local, ej. 16 años]. Si es padre/tutor y cree que su hijo nos ha proporcionado datos, contáctenos.</p>
          </div>
           {/* Sección 10 */}
           <div>
            <h2 className="font-semibold text-lg text-green-600 border-b border-green-500 pb-2 mb-3">
            10. Cambios en esta Política
            </h2>
            <p className="text-justify text-gray-700">
            Actualizaremos esta política ocasionalmente. Las modificaciones se publicarán en esta página con la nueva fecha de vigencia.</p>
            </div>

          {/* Aceptación */}
          <div className="bg-gray-50 p-4 rounded border border-gray-200 mt-8">
            <p className="text-justify text-sm text-gray-700 italic">
            Al utilizar este sitio, usted reconoce que ha leído y acepta estos Términos y Condiciones.            </p>
          </div>
        </div>
      </div>
    </div>
  );
}