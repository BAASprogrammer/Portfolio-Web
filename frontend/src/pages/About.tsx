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
                    <p className='whitespace-pre-wrap text-lg leading-relaxed max-w-3xl mx-auto'>
                    Ingeniera en Computación e Informática especializada en desarrollo web y gestión de bases de datos.
                    </p>
                </div>

                <div className='flex flex-col lg:flex-row items-center gap-6 lg:gap-8 mt-6'>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl shadow-xl w-full hover:shadow-2xl transition-all duration-300 hover:border-blue-400/50 hover:-translate-y-1">
                        <div className="flex items-center justify-center mb-3">
                            <span className='text-xl md:text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors'>Frontend</span>
                        </div>
                        <p className="text-center text-gray-300 hover:text-white transition-colors text-sm md:text-base">
                            HTML, CSS, JavaScript, TypeScript, React y Tailwind CSS
                        </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl shadow-xl w-full hover:shadow-2xl transition-all duration-300 hover:border-green-400/50 hover:-translate-y-1">
                        <div className="flex items-center justify-center mb-3">
                            <span className='text-xl md:text-2xl font-bold text-green-400 hover:text-green-300 transition-colors'>Backend</span>
                        </div>
                        <p className="text-center text-gray-300 hover:text-white transition-colors text-sm md:text-base">
                            PHP, PostgreSQL y nociones en Spring Boot
                        </p>
                    </div>
                </div>

                <div className="text-center mt-8">
                    <p className="text-lg leading-relaxed max-w-4xl mx-auto text-gray-600 dark:text-gray-400 italic">
                    "Me enfoco en crear aplicaciones funcionales y bien diseñadas, aprender nuevas tecnologías y colaborar en equipos para entregar proyectos de calidad."
                    </p>
                </div>
            </div>
        </section>
    )
}