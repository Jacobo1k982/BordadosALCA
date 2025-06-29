import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
                {/* Marca con logo */}
                <div>
                    <img
                        src="/logo1.png"
                        alt="Logo UNIFORMES ALCA"
                        className="h-12 w-auto mb-4"
                    />
                    <p>
                        Fabricamos uniformes con identidad, calidad y compromiso. Empresa
                        textil con soluciones personalizadas.
                    </p>
                </div>

                {/* Enlaces */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Navegación</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="/" className="hover:text-emerald-400">Inicio</a>
                        </li>
                        <li>
                            <a href="#servicios" className="hover:text-emerald-400">Servicios</a>
                        </li>
                        <li>
                            <a href="#categorias" className="hover:text-emerald-400">Categorías</a>
                        </li>
                        <li>
                            <a href="#testimonios" className="hover:text-emerald-400">Testimonios</a>
                        </li>
                        <li>
                            <a href="#contacto" className="hover:text-emerald-400">Contacto</a>
                        </li>
                    </ul>
                </div>

                {/* Contacto */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Contacto</h3>
                    <p>San José, Costa Rica</p>
                    <p>Correo: info@bordadosalca.com</p>
                    <p>Tel: +506 8888 8888</p>
                    <div className="mt-4">
                        <a
                            href="https://wa.me/50688888888"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-emerald-500 text-white px-4 py-2 rounded-full hover:bg-emerald-600 transition"
                        >
                            Escríbenos por WhatsApp
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="mt-10 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} UNIFORMES ALCA. Todos los derechos reservados.
            </div>
        </footer>
    );
};

export default Footer;
