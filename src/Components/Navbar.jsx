import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const links = [
        { name: "Inicio", href: "/" },
        { name: "Servicios", href: "#servicios" },
        { name: "Categorías", href: "#categorias" },
        { name: "Testimonios", href: "#testimonios" },
        { name: "Contacto", href: "#contacto" },
    ];

    return (
        <nav className="fixed w-full z-50 bg-transparent text-white">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo + texto */}
                <div className="flex items-center gap-2">
                    <img
                        src="/logo1.png"
                        alt="Logo UNIFORMES ALCA"
                        className="h-10 w-auto object-contain"
                    />
                </div>

                {/* Desktop menu */}
                <ul className="hidden md:flex gap-6">
                    {links.map((link, i) => (
                        <li key={i}>
                            <a
                                href={link.href}
                                className="hover:text-emerald-400 font-medium transition"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile toggle */}
                <div className="md:hidden">
                    <button onClick={() => setOpen(!open)}>
                        {open ? <FaTimes size={20} /> : <FaBars size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {open && (
                <ul className="md:hidden px-6 pb-4 bg-black bg-opacity-80">
                    {links.map((link, i) => (
                        <li key={i} className="py-2 border-b border-white/10">
                            <a
                                href={link.href}
                                className="block hover:text-emerald-400 font-medium transition"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
