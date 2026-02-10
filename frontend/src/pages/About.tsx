import type { SectionProps } from "../types/SectionProps"

export const About = ({id} : SectionProps) => {
    return(
        <section id = {id}>
            <h2 className="mt-10 mb-8 text-2xl font-semibold flex items-center gap-3">
                <span className="text-lg text-pink-500 font-bold">01. </span>
                Información sobre mí
                <span className="border-b border-gray-600 flex-1"></span>
            </h2>
            <div className="space-y-8">
                <div className="text-center">
                    <p className='text-lg leading-relaxed max-w-3xl mx-auto text-gray-200'>
                        Soy <span className="text-pink-400 font-semibold">Ingeniera en Computación e Informática</span> especializada en desarrollo web full stack y gestión de bases de datos. Me apasiona crear aplicaciones funcionales, bien diseñadas y accesibles.
                    </p>
                </div>

                <div className='flex flex-col lg:flex-row items-center gap-6 lg:gap-8 mt-6'>
                    <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/5 backdrop-blur-sm border border-blue-500/30 p-6 rounded-xl shadow-xl w-full hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:border-blue-400/60 hover:-translate-y-2 group">
                        <div className="flex items-center justify-center mb-3">
                            <span className='text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-cyan-300 transition-all'>Frontend</span>
                        </div>
                        <p className="text-center text-gray-300 group-hover:text-white transition-colors text-sm md:text-base">
                            Creo interfaces modernas y responsivas con HTML, CSS, JavaScript, TypeScript, React y Tailwind CSS
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/5 backdrop-blur-sm border border-purple-500/30 p-6 rounded-xl shadow-xl w-full hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:border-purple-400/60 hover:-translate-y-2 group">
                        <div className="flex items-center justify-center mb-3">
                            <span className='text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-pink-300 transition-all'>Backend</span>
                        </div>
                        <p className="text-center text-gray-300 group-hover:text-white transition-colors text-sm md:text-base">
                            Desarrollo lógica robusta con PHP, Spring Boot y gestiono bases de datos PostgreSQL y MySQL
                        </p>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 border border-blue-500/20 rounded-lg p-6 hover:border-blue-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                    <h3 className="text-lg font-semibold text-white mb-4">Mi enfoque</h3>
                    <p className="text-gray-300 leading-relaxed">
                        Me enfoco en crear aplicaciones que no solo sean funcionales, sino también escalables, mantenibles y con una excelente experiencia de usuario. Valoró el trabajo colaborativo, el aprendizaje continuo y el código limpio.
                    </p>
                </div>
            </div>
        </section>
    )
}