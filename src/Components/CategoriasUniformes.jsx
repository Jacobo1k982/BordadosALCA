import React from "react";
import { FaUserTie, FaRunning, FaSchool, FaTshirt } from "react-icons/fa";

const categorias = [
    { nombre: "Empresariales", icon: <FaUserTie /> },
    { nombre: "Deportivos", icon: <FaRunning /> },
    { nombre: "Escolares", icon: <FaSchool /> },
    { nombre: "Personalizados", icon: <FaTshirt /> },
];

const CategoriasUniformes = () => {
    return (
        <section className="bg-gray-100 py-14 px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Nuestras categorías
            </h2>
            <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
                {categorias.map((cat, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col items-center p-4 bg-white rounded-xl shadow hover:shadow-lg transition"
                    >
                        <div className="text-3xl text-emerald-500 mb-2">{cat.icon}</div>
                        <span className="text-gray-700 font-medium">{cat.nombre}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CategoriasUniformes;
