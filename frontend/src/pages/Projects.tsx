import type { SectionProps } from "../types/SectionProps"
import GuitarStorePreview from "../assets/images/previews/guitar-store-1.png";
import PortfolioPreview from "../assets/images/previews/portafolio-web.png";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export const Projects = ({id} : SectionProps) => {
    return (
        <section id = {id}>
            <h2 className="mt-10 mb-8 text-2xl font-semibold flex items-center gap-3">
                <span className="text-lg text-pink-500 font-bold">03. </span>
                Proyectos
                <span className="border-b border-gray-600 flex-1"></span>
            </h2>
            <div className="space-y-8">
                <div className="text-center">
                    <p className='text-lg leading-relaxed max-w-3xl mx-auto'>
                        Aplicaciones y soluciones desarrolladas para aprender, experimentar y resolver problemas reales.
                    </p>
                </div>

                <div className="flex justify-center">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-blue-400/50 max-w-2xl w-full">
                        {/* Project Image */}

                        <div className="mb-4">
                            <h3 className="text-xl font-bold text-blue-400 mb-2">Tienda de Guitarras Online</h3>
                            <p className="text-gray-300 leading-relaxed mb-3">
                                <strong className="text-gray-200">E-commerce simulado</strong> - Aplicación frontend con catálogo dinámico, carrito de compras interactivo (agregar/eliminar/modificar cantidades), cálculo automático de totales, modo oscuro persistente, formulario con validaciones en tiempo real y diseño responsive. Arquitectura basada en componentes reutilizables, manejo de estado con Hooks (useState, useEffect) y renderizado condicional optimizado.
                            </p>
                        <div className="mb-6">
                            <div className="relative w-full h-80 bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-lg overflow-hidden group">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center p-4">
                                        <p className="text-lg text-gray-300">GuitarStore</p>
                                        <img src={GuitarStorePreview} alt="Tienda de Guitarras" />
                                        <p className="text-xs text-gray-500 mt-1">React + JS</p>
                                    </div>
                                </div>
                                {/* Subtle Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                        </div>
                            <p className="text-sm text-amber-400/80 bg-amber-500/10 border border-amber-500/20 rounded-lg p-3 mb-4">
                                ⚠️ <strong>Nota importante:</strong> Esta es una simulación educativa sin sistema de pagos real.
                                Solo permite explorar productos y agregar al carrito de compras.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">React</span>
                            <span className="text-xs bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded">JavaScript</span>
                            <span className="text-xs bg-gray-500/20 text-gray-300 px-2 py-1 rounded">Vercel</span>
                        </div>
                        <div className="flex gap-3 flex-wrap">
                            <a 
                                href="https://guitar-store-react-js.vercel.app/" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-animated bg-gradient-to-r from-blue-700 to-cyan-600 hover:from-blue-600 hover:to-cyan-500 text-white border-2 border-blue-400/50 px-4 py-2 rounded-lg font-medium flex items-center justify-center gap-2 cursor-pointer shadow-lg btn-glow-cyan text-sm"
                            >
                                <FiExternalLink className="w-4 h-4 btn-icon-animate" />
                                Ver Demo
                            </a>
                            <a 
                                href="https://github.com/BAASprogrammer/GuitarStore-React-JS" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-animated bg-gradient-to-r from-pink-700 to-purple-700 hover:from-pink-600 hover:to-purple-600 text-white border-2 border-pink-400/50 px-4 py-2 rounded-lg font-medium flex items-center justify-center gap-2 cursor-pointer shadow-lg btn-glow-pink text-sm"
                            >
                                <FiGithub className="w-4 h-4 btn-icon-rotate" />
                                Ver Código
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-purple-400/50 max-w-2xl w-full">
                        <div className="mb-4">
                            <h3 className="text-xl font-bold text-purple-400 mb-2">Portafolio Profesional</h3>
                            <p className="text-gray-300 leading-relaxed mb-3">
                                <strong>Sitio web personal</strong> desarrollado con React y TypeScript, estructurado en componentes reutilizables y tipado estático para mayor mantenibilidad. Implementa manejo de estado con Hooks, diseño responsive y despliegue continuo en Vercel.
                            </p>
                        </div>
                        <div className="mb-6">
                            <div className="relative w-full h-80 bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-lg overflow-hidden group">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center p-4">
                                        <p className="text-lg text-gray-300">Portafolio Web</p>
                                        <img src={PortfolioPreview} alt="Portafolio Profesional" />
                                        <p className="text-xs text-gray-500 mt-1">React + TypeScript</p>
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded">React</span>
                            <span className="text-xs bg-blue-600/20 text-blue-300 px-2 py-1 rounded">TypeScript</span>
                            <span className="text-xs bg-pink-500/20 text-pink-300 px-2 py-1 rounded">Vercel</span>
                        </div>
                        <div className="flex gap-3 flex-wrap">
                            <a 
                                href="https://github.com/BAASprogrammer/Portfolio-Web" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-animated bg-gradient-to-r from-pink-700 to-purple-700 hover:from-pink-600 hover:to-purple-600 text-white border-2 border-pink-400/50 px-4 py-2 rounded-lg font-medium flex items-center justify-center gap-2 cursor-pointer shadow-lg btn-glow-pink text-sm"
                            >
                                <FiGithub className="w-4 h-4 btn-icon-rotate" />
                                Ver Código
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}