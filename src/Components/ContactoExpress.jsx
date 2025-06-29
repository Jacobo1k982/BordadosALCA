import React from "react";

const ContactoExpress = () => {
    return (
        <section className="bg-emerald-600 text-white py-14 px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Listo para hacer tu pedido?
            </h2>
            <p className="mb-6 text-lg max-w-xl mx-auto">
                Escríbenos hoy mismo y cotiza tus uniformes con un equipo que cuida
                cada detalle.
            </p>
            <a
                href="#contacto"
                className="inline-block px-8 py-3 bg-white text-emerald-600 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition"
            >
                Contáctanos
            </a>
        </section>
    );
};

export default ContactoExpress;
