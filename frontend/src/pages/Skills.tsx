import type { SectionProps } from "../types/SectionProps"

export const Skills = ({id} : SectionProps) => {
    return (
        <section id = {id}>
            <h2 className="mt-10 mb-8 text-2xl font-semibold flex items-center gap-3">
                <span className="text-lg text-pink-500 font-bold">04. </span> 
                Habilidades
                <span className="border-b border-gray-600 flex-1"></span>
            </h2>
            <div>
                <p className="text-center text-gray-300 text-lg mb-8">
                    Tecnologías y herramientas que utilizo para desarrollar aplicaciones web mantenibles y escalables.
                </p>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Frontend Skills */}
                    <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/5 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:border-blue-400/60 hover:-translate-y-2 group">
                        <div className="mb-6">
                            <h1 className="text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent text-2xl md:text-3xl font-bold group-hover:from-blue-300 group-hover:to-cyan-300 transition-all p-2">Frontend</h1>
                        </div>
                        <div className="flex flex-wrap gap-3 justify-center">
                            <span className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 text-cyan-300 border border-cyan-500/30 hover:from-cyan-400 hover:to-cyan-500 hover:text-white text-sm font-semibold px-4 py-3 rounded-xl shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl">React (Hooks, manejo de estado)</span>
                            <span className="bg-gradient-to-r from-blue-600/20 to-blue-700/20 text-blue-300 border border-blue-600/30 hover:from-blue-500 hover:to-blue-600 hover:text-white text-sm font-semibold px-4 py-3 rounded-xl shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl">TypeScript (tipado estático)</span>
                            <span className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 text-yellow-300 border border-yellow-500/30 hover:from-yellow-400 hover:to-yellow-500 hover:text-white text-sm font-semibold px-4 py-3 rounded-xl shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl">JavaScript (ES6+)</span>
                            <span className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 text-orange-300 border border-orange-500/30 hover:from-orange-400 hover:to-orange-500 hover:text-white text-sm font-semibold px-4 py-3 rounded-xl shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl">HTML5</span>
                            <span className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 text-blue-300 border border-blue-500/30 hover:from-blue-400 hover:to-blue-500 hover:text-white text-sm font-semibold px-4 py-3 rounded-xl shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl">CSS3</span>
                            <span className="bg-gradient-to-r from-teal-500/20 to-teal-600/20 text-teal-300 border border-teal-500/30 hover:from-teal-400 hover:to-teal-500 hover:text-white text-sm font-semibold px-4 py-3 rounded-xl shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl">Tailwind CSS</span>
                        </div>
                    </div>

                    {/* Backend Skills */}
                    <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/5 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:border-purple-400/60 hover:-translate-y-2 group">
                        <div className="mb-6">
                            <h1 className="text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-2xl md:text-3xl font-bold group-hover:from-purple-300 group-hover:to-pink-300 transition-all p-2">Backend</h1>
                        </div>
                        <div className="flex flex-wrap gap-3 justify-center">
                            <span className="bg-gradient-to-r from-cyan-600/20 to-cyan-700/20 text-cyan-300 border border-cyan-600/30 hover:from-cyan-500 hover:to-cyan-600 hover:text-white text-sm font-semibold px-4 py-3 rounded-xl shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl">APIs REST</span>
                            <span className="bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 text-indigo-300 border border-indigo-500/30 hover:from-indigo-400 hover:to-indigo-500 hover:text-white text-sm font-semibold px-4 py-3 rounded-xl shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl">PHP (APIs, optimización)</span>
                            <span className="bg-gradient-to-r from-red-500/20 to-red-600/20 text-red-300 border border-red-500/30 hover:from-red-400 hover:to-red-500 hover:text-white text-sm font-semibold px-4 py-3 rounded-xl shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl">Spring Boot (nociones básicas)</span>
                            <span className="bg-gradient-to-r from-gray-700/20 to-gray-800/20 text-gray-300 border border-gray-700/30 hover:from-gray-600 hover:to-gray-700 hover:text-white text-sm font-semibold px-4 py-3 rounded-xl shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl">Node.js (configuración y ejecución)</span>
                        </div>
                    </div>

                    {/* Databases */}
                    <div className="bg-gradient-to-br from-green-500/10 to-blue-500/5 backdrop-blur-sm border border-green-500/30 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:border-green-400/60 hover:-translate-y-2 group">
                        <div className="mb-6">
                            <h1 className="text-center bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent text-2xl md:text-3xl font-bold group-hover:from-green-300 group-hover:to-blue-300 transition-all p-2">Bases de datos</h1>
                        </div>
                        <div className="flex flex-wrap gap-3 justify-center">
                            <span className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 text-blue-300 border border-blue-500/30 hover:from-blue-400 hover:to-blue-500 hover:text-white text-sm font-semibold px-4 py-3 rounded-xl shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl">PostgreSQL (optimización)</span>
                            <span className="bg-gradient-to-r from-blue-600/20 to-blue-700/20 text-blue-300 border border-blue-600/30 hover:from-blue-500 hover:to-blue-600 hover:text-white text-sm font-semibold px-4 py-3 rounded-xl shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl">MySQL</span>
                            <span className="bg-gradient-to-r from-cyan-600/20 to-cyan-700/20 text-cyan-300 border border-cyan-600/30 hover:from-cyan-500 hover:to-cyan-600 hover:text-white text-sm font-semibold px-4 py-3 rounded-xl shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl">PL/pgSQL</span>
                        </div>
                    </div>

                    {/* Tools */}
                    <div className="bg-gradient-to-br from-fuchsia-500/10 to-purple-500/5 backdrop-blur-sm border border-fuchsia-500/30 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-fuchsia-500/50 transition-all duration-300 hover:border-fuchsia-400/60 hover:-translate-y-2 group">
                        <div className="mb-6">
                            <h1 className="text-center bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent text-2xl md:text-3xl font-bold group-hover:from-fuchsia-300 group-hover:to-purple-300 transition-all p-2">Herramientas</h1>
                        </div>
                        <div className="flex flex-wrap gap-3 justify-center">
                            <span className="bg-gradient-to-r from-orange-600/20 to-orange-700/20 text-orange-300 border border-orange-600/30 hover:from-orange-500 hover:to-orange-600 hover:text-white text-sm font-semibold px-4 py-3 rounded-xl shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl">Git</span>
                            <span className="bg-gradient-to-r from-gray-600/20 to-gray-700/20 text-gray-200 border border-gray-600/30 hover:from-gray-500 hover:to-gray-600 hover:text-white text-sm font-semibold px-4 py-3 rounded-xl shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl">GitHub</span>
                            <span className="bg-gradient-to-r from-pink-600/20 to-pink-700/20 text-pink-300 border border-pink-600/30 hover:from-pink-500 hover:to-pink-600 hover:text-white text-sm font-semibold px-4 py-3 rounded-xl shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl">Vercel</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}