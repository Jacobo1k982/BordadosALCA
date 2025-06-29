// AppRoutes.jsx
import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../Components/Layout";

// 👇 Lazy import
const HeroSlider = lazy(() => import("../Components/HeroSlider.jsx"));
const ServiciosDestacados = lazy(() => import("../Components/ServiciosDestacados.jsx"));
const CategoriasUniformes = lazy(() => import("../Components/CategoriasUniformes.jsx"));
const TestimoniosClientes = lazy(() => import("../Components/TestimoniosClientes.jsx"));
const ContactoExpress = lazy(() => import("../Components/ContactoExpress.jsx"));


const Loader = () => (
    <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="flex flex-col items-center gap-4">
            <div className="w-10 h-10 border-4 border-[#00e0c7] border-t-transparent rounded-full animate-spin"></div>
            <p className="text-[#00e0c7] text-sm">Cargando contenido...</p>
        </div>
    </div>
);

const AppRoutes = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Layout>
                <Routes>
                    <Route path="/" element={
                        <>
                            <HeroSlider />
                            <ServiciosDestacados />
                            <CategoriasUniformes />
                            <TestimoniosClientes />
                            <ContactoExpress />
                        </>
                    } />
                </Routes>
            </Layout>
        </Suspense>
    );
};

export default AppRoutes;
