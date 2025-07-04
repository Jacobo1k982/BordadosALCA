import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUserTie, FaRunning, FaSchool, FaTshirt, FaShoppingBag, FaWhatsapp } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";

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
        title: "Uniformes escolares únicos",
    },
];

const HeroSlider = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % videos.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative pt-16 md:pt-20 h-screen w-full overflow-hidden text-white bg-black">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="flex flex-col md:flex-row h-full"
            >
                {/* Imagen Principal */}
                <div className="relative w-full md:w-[100%] h-[calc(100vh-80px)]">
                    <img
                        src="/Imagen/Hero/hero.png"
                        alt="Imagen principal"
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />

                    {/* Contenido superpuesto */}
                    <div className="absolute z-20 top-16 md:top-20 left-0 w-full h-[calc(100%-5rem)] flex flex-col justify-start items-center px-6 text-center">
                        {/* Contenedor fijo para evitar movimiento */}
                        <div className="min-h-[120px] md:min-h-[160px] flex flex-col justify-center">
                            <AnimatePresence mode="wait">
                                <motion.h1
                                    key={videos[current].title}
                                    initial={{ opacity: 0, y: -40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 40 }}
                                    transition={{ duration: 0.9 }}
                                    className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-sky-400 via-fuchsia-500 to-pink-500 text-transparent bg-clip-text animate-pulse"
                                >
                                    {videos[current].title}
                                </motion.h1>
                            </AnimatePresence>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="mt-2 text-lg md:text-2xl text-gray-200 max-w-2xl"
                            >
                                Diseños únicos, materiales de calidad y compromiso en cada prenda.
                            </motion.p>
                        </div>

                        {/* Botones con íconos */}
                        <div className="mt-8 flex flex-row flex-wrap justify-center gap-2">
                            <motion.button
                                whileHover={{ scale: 1.1, boxShadow: "0 0 25px #3b82f6" }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-2 text-sm md:text-base px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg"
                            >
                                <FaShoppingBag className="text-base md:text-lg" />
                                Ver Catálogo
                            </motion.button>

                            <motion.a
                                whileHover={{ scale: 1.1, boxShadow: "0 0 25px white" }}
                                whileTap={{ scale: 0.95 }}
                                href="https://wa.me/506xxxxxxxx"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm md:text-base px-4 py-2 md:px-6 md:py-3 border border-white hover:bg-white hover:text-gray-900 transition-all duration-300 rounded-full font-medium inline-block shadow-md"
                            >
                                <FaWhatsapp className="text-green-400 text-base md:text-lg" />
                                Cotiza tu diseño
                            </motion.a>
                        </div>
                    </div>
                </div>

                {/* Mini videos flotantes responsivos */}
                <div
                    className={`
            absolute z-30 bottom-36
            flex gap-4
            md:flex-col md:left-6 md:bottom-24
            left-1/2 -translate-x-1/2 md:translate-x-0
          `}
                >
                    {videos.map((video, index) => (
                        <motion.video
                            key={video.src}
                            autoPlay
                            muted
                            loop
                            playsInline
                            onClick={() => setCurrent(index)}
                            whileHover={{ scale: 1.1 }}
                            className={`w-20 h-20 rounded-lg object-cover cursor-pointer transition-all duration-300 border-2 ${index === current
                                    ? "border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.8)]"
                                    : "border-white/40 hover:border-blue-300"
                                }`}
                        >
                            <source src={video.src} type="video/mp4" />
                            Tu navegador no soporta video.
                        </motion.video>
                    ))}
                </div>
            </motion.div>

            {/* Categorías */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute bottom-14 left-0 right-0 bg-black/70 backdrop-blur-sm py-4 px-6 z-30"
            >
                <div className="max-w-6xl mx-auto grid grid-cols-4 sm:grid-cols-4 gap-6 text-center">
                    {[
                        { icon: <FaUserTie />, label: "Empresariales" },
                        { icon: <FaRunning />, label: "Deportivos" },
                        { icon: <FaSchool />, label: "Escolares" },
                        { icon: <FaTshirt />, label: "Personalizados" },
                    ].map(({ icon, label }) => (
                        <motion.div
                            key={label}
                            whileHover={{ scale: 1.1 }}
                            className="flex flex-col items-center text-gray-200"
                        >
                            <div className="text-2xl text-blue-400 mb-1">{icon}</div>
                            <span className="text-sm">{label}</span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Scroll Down Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                className="absolute bottom-3 left-0 right-0 flex justify-center z-50"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="text-white text-2xl"
                >
                    <BsChevronDown />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HeroSlider;
