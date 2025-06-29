import React from "react";

const testimonios = [
    {
        nombre: "Laura Chaves",
        empresa: "Colegio San José",
        mensaje:
            "Los uniformes escolares son de excelente calidad. ¡Superaron nuestras expectativas!",
    },
    {
        nombre: "Carlos Muñoz",
        empresa: "GymPro Training",
        mensaje:
            "Los uniformes deportivos que encargamos quedaron perfectos. Gran servicio y cumplimiento.",
    },
];

const TestimoniosClientes = () => {
    return (
        <section className="bg-white py-16 px-6">
            <h2 className="text-3xl text-center font-bold text-gray-800 mb-10">
                Lo que dicen nuestros clientes
            </h2>
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
                {testimonios.map((testi, i) => (
                    <div
                        key={i}
                        className="bg-gray-50 p-6 rounded-xl shadow-md border-l-4 border-emerald-400"
                    >
                        <p className="text-gray-600 italic mb-4">"{testi.mensaje}"</p>
                        <h4 className="font-semibold text-gray-800">
                            {testi.nombre} – <span className="text-sm">{testi.empresa}</span>
                        </h4>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TestimoniosClientes;
