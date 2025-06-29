import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaUserTie, FaRunning, FaSchool, FaTshirt } from "react-icons/fa";

const videos = [
    {
        src: "/Video/70515-535363059_tiny.mp4",
        title: "Uniformes deportivos personalizados",
    },
    {
        src: "/Video/72684-544133658_tiny.mp4",
        title: "Producción textil de alta calidad",
    },
    {
        src: "/Video/118039-713887520_tiny.mp4",
        title: "Productos de alta calidad",
    }
];

const HeroSlider = () => {
    const [current, setCurrent] = useState(0);

    // ⏱️ Avance automático cada 3 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % videos.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const next = () => setCurrent((current + 1) % videos.length);
    const prev = () => setCurrent((current - 1 + videos.length) % videos.length);

    return (
        <section className="relative h-screen w-full overflow-hidden text-white bg-black">
            {/* 🎥 Animación de video */}
            <div className="absolute w-full h-full">
                <AnimatePresence mode="wait">
                    <motion.video
                        key={videos[current].src}
                        autoPlay
                        muted
                        loop
                        playsInline
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute w-full h-full object-cover brightness-[0.4]"
                    >
                        <source src={videos[current].src} type="video/mp4" />
                        Tu navegador no soporta video.
                    </motion.video>
                </AnimatePresence>
            </div>

            {/* Botones de navegación */}
            <button
                onClick={prev}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black/40 hover:bg-black/70 p-3 rounded-full z-20"
            >
                <FaChevronLeft />
            </button>
            <button
                onClick={next}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black/40 hover:bg-black/70 p-3 rounded-full z-20"
            >
                <FaChevronRight />
            </button>

            {/* Texto overlay */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
                    {videos[current].title}
                </h1>
                <p className="mt-4 text-lg md:text-2xl text-gray-200 max-w-2xl">
                    Diseños únicos, materiales de calidad y compromiso en cada prenda.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <button className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-full shadow-lg transition">
                        Ver Catálogo
                    </button>
                    <button className="px-6 py-3 border border-white hover:bg-white hover:text-gray-900 transition rounded-full font-medium">
                        Cotiza tu diseño
                    </button>
                </div>
            </div>

            {/* Categorías */}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 py-4 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                    <div className="flex flex-col items-center">
                        <FaUserTie className="text-2xl text-emerald-400 mb-1" />
                        <span className="text-sm text-gray-300">Empresariales</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaRunning className="text-2xl text-emerald-400 mb-1" />
                        <span className="text-sm text-gray-300">Deportivos</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaSchool className="text-2xl text-emerald-400 mb-1" />
                        <span className="text-sm text-gray-300">Escolares</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaTshirt className="text-2xl text-emerald-400 mb-1" />
                        <span className="text-sm text-gray-300">Personalizados</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSlider;
