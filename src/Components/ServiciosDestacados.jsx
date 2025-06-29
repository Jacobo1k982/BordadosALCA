import React from "react";

const servicios = [
    {
        titulo: "Diseño Personalizado",
        desc: "Creamos uniformes únicos según tus colores y estilo corporativo.",
        icon: "🎨",
    },
    {
        titulo: "Entrega Puntual",
        desc: "Comprometidos con tus fechas. Producción y entrega confiables.",
        icon: "⏱️",
    },
    {
        titulo: "Calidad Garantizada",
        desc: "Materiales textiles duraderos, cómodos y con acabados profesionales.",
        icon: "✅",
    },
];

const ServiciosDestacados = () => {
    return (
        <section className="bg-white py-16 text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                ¿Por qué elegirnos?
            </h2>
            <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
                {servicios.map((serv, index) => (
                    <div
                        key={index}
                        className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition"
                    >
                        <div className="text-4xl mb-4">{serv.icon}</div>
                        <h3 className="text-xl font-semibold text-gray-700">
                            {serv.titulo}
                        </h3>
                        <p className="text-gray-500 mt-2">{serv.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServiciosDestacados;
