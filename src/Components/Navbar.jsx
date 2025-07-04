import React, { useState, useEffect } from "react";
import {
    FaBars,
    FaTimes,
    FaHome,
    FaListAlt,
    FaPhone,
    FaTools,
} from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [submenuOpen, setSubmenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = [
        { name: "Inicio", href: "/", icon: <FaHome /> },
        { name: "Servicios", href: "#servicios", icon: <FaTools /> },
        {
            name: "Categorías",
            icon: <FaListAlt />,
            submenu: [
                { name: "Escolares", href: "#escolares" },
                { name: "Empresariales", href: "#empresariales" },
                { name: "Deportivos", href: "#deportivos" },
            ],
        },
        { name: "Contacto", href: "#contacto", icon: <FaPhone /> },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full z-50 text-white transition-all duration-500 ${scrolled
                        ? "bg-black/80 backdrop-blur-md border-b border-white/10 shadow-lg"
                        : "bg-white/10 backdrop-blur-md"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    {/* Logo */}
                    <a href="/" onClick={() => setOpen(false)} className="flex items-center gap-2">
                        <img
                            src="/logo1.png"
                            alt="Logo UNIFORMES ALCA"
                            className="h-10 w-auto object-contain cursor-pointer"
                        />
                    </a>

                    {/* Desktop menu */}
                    <ul className="hidden md:flex gap-8 items-center">
                        {links.map((link, index) =>
                            link.submenu ? (
                                <li key={index} className="relative group">
                                    <button className="flex items-center gap-2 hover:text-emerald-400 font-medium transition">
                                        {link.icon}
                                        {link.name}
                                        <MdKeyboardArrowDown />
                                    </button>
                                    <ul className="absolute top-full left-0 mt-2 bg-black/90 rounded-lg shadow-lg p-2 w-48 hidden group-hover:block z-50">
                                        {link.submenu.map((sub, i) => (
                                            <li key={i}>
                                                <a
                                                    href={sub.href}
                                                    className="block px-4 py-2 hover:text-emerald-400 text-sm transition"
                                                >
                                                    {sub.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ) : (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="flex items-center gap-2 relative hover:text-emerald-400 font-medium transition group"
                                    >
                                        {link.icon}
                                        {link.name}
                                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
                                    </a>
                                </li>
                            )
                        )}
                    </ul>

                    {/* Mobile toggle */}
                    <div className="md:hidden">
                        <button onClick={() => setOpen(!open)}>
                            {open ? <FaTimes size={22} /> : <FaBars size={22} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Fondo oscuro al abrir menú móvil */}
            <div
                className={`fixed inset-0 z-40 transition-opacity duration-300 ease-in-out bg-black/50 backdrop-blur-sm ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                onClick={() => setOpen(false)}
            />

            {/* Menú móvil deslizante */}
            <div
                className={`fixed top-0 left-0 h-full w-72 bg-black text-white z-50 transform transition-transform duration-500 ease-in-out ${open ? "translate-x-0" : "-translate-x-full"
                    } md:hidden shadow-2xl`}
            >
                <div className="flex justify-between items-center px-6 py-4 border-b border-white/10">
                    <img src="/logo1.png" alt="Logo" className="h-8" />
                    <button onClick={() => setOpen(false)}>
                        <FaTimes size={22} />
                    </button>
                </div>

                <ul className="flex flex-col gap-4 px-6 py-6">
                    {links.map((link, i) => (
                        <li key={i}>
                            {link.submenu ? (
                                <div>
                                    <button
                                        onClick={() => setSubmenuOpen(!submenuOpen)}
                                        className="flex items-center gap-2 w-full text-left font-medium hover:text-emerald-400"
                                    >
                                        {link.icon}
                                        {link.name}
                                        <MdKeyboardArrowDown />
                                    </button>
                                    {submenuOpen && (
                                        <ul className="ml-6 mt-2 space-y-1">
                                            {link.submenu.map((sub, j) => (
                                                <li key={j}>
                                                    <a
                                                        href={sub.href}
                                                        onClick={() => setOpen(false)}
                                                        className="block text-sm hover:text-emerald-400"
                                                    >
                                                        {sub.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ) : (
                                <a
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className="flex items-center gap-2 font-medium hover:text-emerald-400 transition"
                                >
                                    {link.icon}
                                    {link.name}
                                </a>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Navbar;
