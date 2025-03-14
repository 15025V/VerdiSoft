import Image from "next/image";

export default function CilantroCard() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex bg-white shadow-lg rounded-lg p-6 space-x-6 max-w-3xl">
        {/* Imagen */}
        <div className="w-1/2">
          <Image 
            src="/cilantro.png" 
            alt="Cilantro" 
            width={300} 
            height={300} 
            className="rounded-lg"
          />
        </div>

        {/* Información */}
        <div className="w-1/2 space-y-4">
          <h1 className="text-3xl font-serif text-green-700">Cilantro</h1>
          <div className="text-gray-700">
            <p className="font-semibold">Características generales</p>
            <ul className="text-sm list-disc list-inside">
              <li>Calorías: Aproximadamente 35 kcal</li>
              <li>Agua: 89%</li>
              <li>Proteína: 2.8g</li>
              <li>Carbohidratos: 7g</li>
              <li>Fibra: 2.6g</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-gray-700">Ideal para</p>
            <div className="flex space-x-2">
              <span className="px-3 py-1 text-sm border border-green-600 text-green-700 rounded-full">
                Ensaladas
              </span>
              <span className="px-3 py-1 text-sm border border-green-600 text-green-700 rounded-full">
                Guisos
              </span>
              <span className="px-3 py-1 text-sm border border-green-600 text-green-700 rounded-full">
                Sopas
              </span>
            </div>
          </div>

          {/* Botón de contacto */}
          <button className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition">
            Contactar
          </button>
        </div>
      </div>
    </div>
  );
}
