import type { SectionProps } from "../types/SectionProps"

export const Experience = ({id} : SectionProps) => {
    return (
        <section id = {id}>
            <h2 className="mt-10 mb-8 text-2xl font-semibold flex items-center gap-3">
                <span className="text-lg text-pink-500 font-bold">02. </span> 
                Experiencia
                <span className="border-b border-gray-600 flex-1"></span>
            </h2>
            <div className="space-y-8">
                <div className="text-center">
                    <p className='text-lg leading-relaxed max-w-3xl mx-auto text-gray-200'>
                        Experiencia en desarrollo full stack con foco en backend y mejora de interfaces web.
                    </p>
                </div>

                <div className="space-y-8">
                    {/* Work Experience */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-purple-400/50">
                        {/* Experience Header */}
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                            <div className="mb-4 lg:mb-0">
                                <h3 className="text-2xl font-bold text-purple-400 mb-2">Desarrolladora Full Stack</h3>
                                <p className="text-base text-gray-300 font-medium">Desis Limitada</p>
                                <p className="text-sm text-gray-400">2021 - Presente</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-sm bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full border border-purple-500/30 w-fit hover:bg-purple-500/30 transition-transform duration-300 ease-in-out hover:-translate-y-1">
                                    Full Stack Developer
                                </span>
                                <span className="text-xs text-gray-500 bg-gray-800/50 px-3 py-1 rounded-full w-fit hover:bg-gray-800/70 transition-colors">
                                    3+ años de experiencia
                                </span>
                            </div>
                        </div>

                        {/* Key Contributions */}
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/5 border border-purple-500/20 p-4 rounded-lg hover:border-purple-400/40 transition-colors hover:-translate-y-1">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                    <h4 className="text-lg font-semibold text-purple-300">Backend & APIs</h4>
                                </div>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Desarrollo y mantenimiento de aplicaciones empresariales con <span className="text-purple-400 font-medium">PHP</span> y <span className="text-green-400 font-medium">PostgreSQL</span>, optimizando consultas y procedimientos almacenados para mejorar el rendimiento. Integración y consumo de APIs REST para la comunicación entre módulos.
                                </p>
                            </div>

                            <div className="bg-gradient-to-r from-cyan-500/10 to-cyan-600/5 border border-cyan-500/20 p-4 rounded-lg hover:border-cyan-400/40 transition-colors hover:-translate-y-1">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                                    <h4 className="text-lg font-semibold text-cyan-300">Optimización & Liderazgo</h4>
                                </div>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Mejora de interfaces web responsivas (HTML, CSS) y participación en revisiones de código. Liderazgo técnico durante 6 meses, coordinando tareas, seguimiento de entregables y análisis de requerimientos junto a equipos funcionales.
                                </p>
                            </div>
                        </div>

                        {/* Technologies Used */}
                        <div className="border-t border-gray-700/50 pt-6">
                            <h4 className="text-lg font-semibold text-gray-200 mb-4">Stack Tecnológico</h4>
                            <div className="flex flex-wrap gap-3">
                                <span className="text-sm bg-yellow-500/20 text-yellow-300 px-3 py-2 rounded-lg border border-yellow-500/30 hover:bg-yellow-500/30 transition-transform duration-300 ease-in-out hover:-translate-y-1">
                                    JavaScript
                                </span>
                                <span className="text-sm bg-indigo-500/20 text-indigo-300 px-3 py-2 rounded-lg border border-indigo-500/30 hover:bg-indigo-500/30 transition-transform duration-300 ease-in-out hover:-translate-y-1">
                                    PHP
                                </span>
                            <span className="text-sm bg-blue-500/20 text-blue-300 px-3 py-2 rounded-lg border border-blue-500/30 hover:bg-blue-500/30 transition-transform duration-300 ease-in-out hover:-translate-y-1">
                                    PostgreSQL
                                </span>
                                <span className="text-sm bg-blue-600/20 text-blue-200 px-3 py-2 rounded-lg border border-blue-500/30 hover:bg-blue-500/30 transition-transform duration-300 ease-in-out hover:-translate-y-1">
                                    PL/pgSQL
                                </span>
                                <span className="text-sm bg-orange-500/20 text-orange-300 px-3 py-2 rounded-lg border border-orange-500/30 hover:bg-orange-500/30 transition-transform duration-300 ease-in-out hover:-translate-y-1">
                                    iReport
                                </span>
                                <span className="text-sm bg-pink-500/20 text-pink-300 px-3 py-2 rounded-lg border border-pink-500/30 hover:bg-pink-500/30 transition-transform duration-300 ease-in-out hover:-translate-y-1">
                                    Liderazgo
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Teaching Experience */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-pink-400/50">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                            <div className="mb-4 lg:mb-0">
                                <h3 className="text-2xl font-bold text-pink-400 mb-2">Docente Virtual</h3>
                                <p className="text-base text-gray-300 font-medium">IPG</p>
                                <p className="text-sm text-gray-400">2021</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-sm bg-pink-500/20 text-pink-300 px-4 py-2 rounded-full border border-pink-500/30 w-fit hover:bg-pink-500/30 transition-transform duration-300 ease-in-out hover:-translate-y-1">
                                    Educación Digital
                                </span>
                            </div>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Impartí asignaturas de competencias digitales y fundamentos de hardware y software para carreras del área informática, fortaleciendo habilidades técnicas y prácticas en estudiantes.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}