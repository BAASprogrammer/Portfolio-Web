import type { SectionProps } from "../types/SectionProps"

export const Skills = ({id} : SectionProps) => {
    return (
        <section id = {id}>
            <h2 className="mt-10 mb-4 text-2xl font-semibold flex items-center gap-3">
                <span className="text-lg text-pink-500 font-bold">04. </span> 
                Habilidades
                <span className="border-b border-gray-600 flex-1"></span>
            </h2>
            <div>
                <p className="text-center">
                    Tecnologías y herramientas con las que trabajo para crear aplicaciones 
                </p>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div id="skills-frontend" className="border-2 border-fuchsia-600 rounded-2xl p-4 shadow-xl">
                        <div className="mb-4">
                            <h1 className="text-center text-fuchsia-600 text-2xl md:text-3xl font-bold p-2">Frontend</h1>
                            <p className="p-2 text-center text-sm">Interfaces modernas</p>
                        </div>
                        <div className="flex flex-wrap gap-2 justify-center">
                            <div className="border-2 border-orange-600 bg-orange-600 text-orange-100 text-xs md:text-sm font-bold px-3 py-1 rounded-lg hover:bg-orange-500 transition-all">HTML</div>
                            <div className="border-2 border-blue-600 bg-blue-600 text-blue-100 text-xs md:text-sm font-bold px-3 py-1 rounded-lg hover:bg-blue-500 transition-all">CSS</div>
                            <div className="border-2 border-yellow-600 bg-yellow-600 text-yellow-100 text-xs md:text-sm font-bold px-3 py-1 rounded-lg hover:bg-yellow-500 transition-all">JavaScript</div>
                            <div className="border-2 border-cyan-600 bg-cyan-600 text-cyan-100 text-xs md:text-sm font-bold px-3 py-1 rounded-lg hover:bg-cyan-500 transition-all">React</div>
                            <div className="border-2 border-blue-500 bg-blue-500 text-blue-100 text-xs md:text-sm font-bold px-3 py-1 rounded-lg hover:bg-blue-400 transition-all">TypeScript</div>
                            <div className="border-2 border-teal-600 bg-teal-600 text-teal-100 text-xs md:text-sm font-bold px-3 py-1 rounded-lg hover:bg-teal-500 transition-all">Tailwind</div>
                        </div>
                    </div>
                    <div id="skills-backend" className="border-2 border-green-600 rounded-2xl p-4 shadow-xl">
                        <div className="mb-4">
                            <h1 className="text-center text-green-600 text-2xl md:text-3xl font-bold p-2">Backend</h1>
                            <p className="p-2 text-center text-sm">Lógica y datos</p>
                        </div>
                        <div className="flex flex-wrap gap-2 justify-center">
                            <div className="border-2 border-purple-600 bg-purple-600 text-purple-100 text-xs md:text-sm font-bold px-3 py-1 rounded-lg hover:bg-purple-500 transition-all">PHP</div>
                            <div className="border-2 border-red-600 bg-red-600 text-red-100 text-xs md:text-sm font-bold px-3 py-1 rounded-lg hover:bg-red-500 transition-all">Spring Boot</div>
                            <div className="border-2 border-sky-600 bg-sky-600 text-sky-100 text-xs md:text-sm font-bold px-3 py-1 rounded-lg hover:bg-sky-500 transition-all">PostgreSQL</div>
                            <div className="border-2 border-orange-600 bg-orange-600 text-orange-100 text-xs md:text-sm font-bold px-3 py-1 rounded-lg hover:bg-orange-500 transition-all">MySQL</div>
                            <div className="border-2 border-blue-600 bg-blue-600 text-blue-100 text-xs md:text-sm font-bold px-3 py-1 rounded-lg hover:bg-blue-500 transition-all">PL/pgSQL</div>
                        </div>
                    </div>
                    <div id="skills-tools" className="border-2 border-purple-600 rounded-2xl p-4 shadow-xl">
                        <div className="mb-4">
                            <h1 className="text-center text-purple-600 text-2xl md:text-3xl font-bold p-2">Herramientas</h1>
                            <p className="p-2 text-center text-sm">Control y despliegue</p>
                        </div>
                        <div className="flex flex-wrap gap-2 justify-center">
                            <div className="border-2 border-amber-600 bg-amber-600 text-amber-100 text-xs md:text-sm font-bold px-3 py-1 rounded-lg hover:bg-amber-500 transition-all">GIT</div>
                            <div className="border-2 border-gray-700 bg-gray-700 text-gray-100 text-xs md:text-sm font-bold px-3 py-1 rounded-lg hover:bg-gray-600 transition-all">GitHub</div>
                            <div className="border-2 border-rose-600 bg-rose-600 text-rose-100 text-xs md:text-sm font-bold px-3 py-1 rounded-lg hover:bg-rose-500 transition-all">Vercel</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}