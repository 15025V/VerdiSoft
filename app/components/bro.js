import Image from "next/image";

export default function BroccoliCard() {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300">
      {/* Imagen y Título */}
      <div className="bg-green-600 p-4 flex flex-col items-center">
        <h2 className="text-xl font-bold text-white uppercase">BROCOLI</h2>
        <div className="bg-white rounded-lg p-2 mt-3">
          <Image src="/broccoli.jpg" alt="Brócoli fresco" width={200} height={200} className="rounded-md" />
        </div>
      </div>

      {/* Descripción */}
      <div className="p-6 text-gray-800">
        <h3 className="text-lg font-semibold">Descripción</h3>
        <p className="mt-2 text-sm text-justify">
          El brócoli es una hortaliza de la familia de las crucíferas, conocida por su alto valor nutricional. Es rico en vitamina C, fibra y antioxidantes, lo que lo convierte en un excelente aliado para la salud.
        </p>

        {/* Beneficios Nutricionales */}
        <h3 className="text-lg font-semibold mt-4">Beneficios Nutricionales:</h3>
        <ul className="list-disc list-inside text-sm mt-2">
          <li>Rico en vitamina C y antioxidantes.</li>
          <li>Ayuda a fortalecer el sistema inmunológico.</li>
          <li>Favorece la digestión gracias a su alto contenido en fibra.</li>
        </ul>

        {/* Usos Comunes */}
        <h3 className="text-lg font-semibold mt-4">Usos Comunes:</h3>
        <ul className="list-disc list-inside text-sm mt-2">
          <li>Ideal para ensaladas, guisos y sopas.</li>
          <li>Puede consumirse al vapor o asado.</li>
        </ul>

        {/* Peso Promedio */}
        <h3 className="text-lg font-semibold mt-4">Peso Promedio:</h3>
        <p className="text-sm">500g – 500g por pieza</p>

        {/* Condiciones de Conservación */}
        <h3 className="text-lg font-semibold mt-4">Condiciones de Conservación:</h3>
        <ul className="list-disc list-inside text-sm mt-2">
          <li>Mantener refrigerado entre 0°C y 5°C.</li>
          <li>Consumir dentro de 5-7 días de su compra para disfrutar de su frescura.</li>
        </ul>

        {/* Categoría */}
        <h3 className="text-lg font-semibold mt-4">Categoría:</h3>
        <p className="text-sm">Hortaliza de hoja verde</p>

        {/* Botón de Contacto */}
        <div className="mt-6 text-center">
          <button className="bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-700 transition duration-300">
            Contacto
          </button>
        </div>
      </div>
    </div>
  );
}
