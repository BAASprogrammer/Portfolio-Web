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
                <div className="mt-4 flex gap-8 flex-wrap justify-center">
                    <div id="skills-frontend" className="border-2 border-pink-400 rounded-2xl w-90 h-90 p-3 shadow-xl flex flex-col">
                        <div>
                            <h1 className="text-center text-fuchsia-600 text-3xl font-bold p-2">Frontend</h1>
                            <p className="p-4 text-center">Interfaces modernas</p>
                        </div>
                        <div className="flex flex-wrap gap-3 p-4 justify-center">
                            <div className="border-2 bg-orange-600 text-orange-100 text-sm font-bold w-24 h-10 flex items-center justify-center text-center rounded-xl shadow-lg hover:shadow-xl hover:bg-orange-500 transition-all duration-300 cursor-default border-orange-600">HTML</div>
                            <div className="border-2 bg-blue-600 text-blue-100 text-sm font-bold w-20 h-10 flex items-center justify-center text-center rounded-xl shadow-lg hover:shadow-xl hover:bg-blue-500 transition-all duration-300 cursor-default border-blue-600">CSS</div>
                            <div className="border-2 bg-yellow-600 text-yellow-100 text-sm font-bold w-36 h-10 flex items-center justify-center text-center rounded-xl shadow-lg hover:shadow-xl hover:bg-yellow-500 transition-all duration-300 cursor-default border-yellow-600">JavaScript (ES6+)</div>
                            <div className="border-2 bg-cyan-600 text-cyan-100 text-sm font-bold w-24 h-10 flex items-center justify-center text-center rounded-xl shadow-lg hover:shadow-xl hover:bg-cyan-500 transition-all duration-300 cursor-default border-cyan-600">React</div>
                            <div className="border-2 bg-blue-500 text-blue-100 text-sm font-bold w-28 h-10 flex items-center justify-center text-center rounded-xl shadow-lg hover:shadow-xl hover:bg-blue-400 transition-all duration-300 cursor-default border-blue-500">TypeScript</div>
                            <div className="border-2 bg-teal-600 text-teal-100 text-sm font-bold w-30 h-10 flex items-center justify-center text-center rounded-xl shadow-lg hover:shadow-xl hover:bg-teal-500 transition-all duration-300 cursor-default border-teal-600">Tailwind CSS</div>
                            <div className="border-2 bg-indigo-600 text-indigo-100 text-sm font-bold w-26 h-10 flex items-center justify-center text-center rounded-xl shadow-lg hover:shadow-xl hover:bg-indigo-500 transition-all duration-300 cursor-default border-indigo-600">Bootstrap</div>
                        </div>
                    </div>
                    <div id="skills-backend" className="border-2 border-green-400 rounded-2xl w-90 h-90 p-3 shadow-xl flex flex-col">
                        <div>
                            <h1 className="text-center text-green-600 text-3xl font-bold p-2">Backend y Datos</h1>
                            <p className="p-4 text-center">Lógica y bases de datos</p>
                        </div>
                        <div className="flex flex-wrap gap-3 p-4 justify-center">
                            <div className="border-2 bg-purple-600 text-purple-100 text-sm font-bold w-18 h-10 flex items-center justify-center text-center rounded-xl shadow-lg hover:shadow-xl hover:bg-purple-500 transition-all duration-300 cursor-default border-purple-600">PHP</div>
                            <div className="border-2 bg-red-600 text-red-100 text-sm font-bold w-36 h-10 flex items-center justify-center text-center rounded-xl shadow-lg hover:shadow-xl hover:bg-red-500 transition-all duration-300 cursor-default border-red-600 relative">
                                Java (Spring Boot)
                            </div>
                            <div className="border-2 bg-sky-600 text-sky-100 text-sm font-bold w-32 h-10 flex items-center justify-center text-center rounded-xl shadow-lg hover:shadow-xl hover:bg-sky-500 transition-all duration-300 cursor-default border-sky-600">PostgreSQL</div>
                            <div className="border-2 bg-orange-600 text-orange-100 text-sm font-bold w-24 h-10 flex items-center justify-center text-center rounded-xl shadow-lg hover:shadow-xl hover:bg-orange-500 transition-all duration-300 cursor-default border-orange-600">MySQL</div>
                            <div className="border-2 bg-blue-600 text-blue-100 text-sm font-bold w-24 h-10 flex items-center justify-center text-center rounded-xl shadow-lg hover:shadow-xl hover:bg-blue-500 transition-all duration-300 cursor-default border-blue-600">PL/pgSQL</div>
                        </div>
                    </div>
                    <div id="skills-tools" className="border-2 border-purple-400 rounded-2xl w-90 h-90 p-3 shadow-xl flex flex-col">
                        <div>
                            <h1 className="text-center text-purple-600 text-3xl font-bold p-2">Herramientas</h1>
                            <p className="p-4 text-center">Control y despliegue</p>
                        </div>
                        <div className="flex flex-wrap gap-3 p-4 justify-center">
                            <div className="border-2 bg-amber-600 text-amber-100 text-sm font-bold w-24 h-10 flex items-center justify-center text-center rounded-xl shadow-lg hover:shadow-xl hover:bg-amber-500 transition-all duration-300 cursor-default border-amber-600">GIT</div>
                            <div className="border-2 bg-gray-700 text-gray-100 text-sm font-bold w-24 h-10 flex items-center justify-center text-center rounded-xl shadow-lg hover:shadow-xl hover:bg-gray-600 transition-all duration-300 cursor-default border-gray-700">GitHub</div>
                            <div className="border-2 bg-rose-600 text-rose-100 text-sm font-bold w-24 h-10 flex items-center justify-center text-center rounded-xl shadow-lg hover:shadow-xl hover:bg-rose-500 transition-all duration-300 cursor-default border-rose-600">Vercel</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}