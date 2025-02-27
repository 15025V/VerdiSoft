import React, { useState } from "react";
import Image from "next/image";
import Modal from "react-modal";

Modal.setAppElement("#__next"); // Configura el elemento raíz para react-modal

export default function CilantroCard() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <button onClick={openModal} className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition">
        Ver detalles del Cilantro
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Detalles del Cilantro"
        className="Modal"
        overlayClassName="Overlay"
      >
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

            {/* Botón de cerrar modal */}
            <button
              className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition"
              onClick={closeModal}
            >
              Cerrar
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}