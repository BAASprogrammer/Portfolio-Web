import drownarrow from '../assets/images/down-arrow-icon6.png';
import pdfCV from '../assets/images/PDF-file.png';

export const PersonalIntro = () => {
    const scrollToProjects = () => {
        const section = document.getElementById('projects');
        section?.scrollIntoView({ behavior: 'smooth' });
    }
    
    const DownloadCV = () => {
        window.open('/CV-BARBARA-ARIAS.pdf', '_blank', 'noopener,noreferrer');
    }
      
    return (
        <div className='p-4'>
            <h5
                className="text-pink-400 font-bold mt-4 typing-animation text-sm sm:text-base"
                style={{
                    ['--typing-ch' as any]: 18,
                    ['--typing-steps' as any]: 18,
                    ['--typing-duration' as any]: '2.6s',
                }}
            >
                Hola, mi nombre es
            </h5>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold pt-6 text-gradient-animate">Bárbara Arias</h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-white py-6 font-semibold">Genero programas para la web.</h2>
            <p className='mt-2 mb-4 text-white text-sm md:text-base'>
                Desarrollo aplicaciones web claras y mantenibles, con foco en una buena experiencia y código ordenado.
                Trabajo principalmente con <span className='text-orange-400 font-semibold'>HTML</span>, <span className='text-blue-500 font-semibold'>CSS</span>, <span className='text-yellow-400 font-semibold'>JavaScript</span>, <span className='text-blue-400 font-semibold'>PHP</span> y <span className='text-sky-400 font-semibold'>PostgreSQL</span>, y también me enfoco en proyectos que utilizan <span className='text-cyan-400 font-semibold'>React</span>, <span className='text-blue-600 font-semibold'>TypeScript</span> y <span className='text-teal-400 font-semibold'>Tailwind CSS</span>, con nociones en <span className='text-red-400 font-semibold'>Spring Boot</span>.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-2.5">
                <button
                type='button'
                className="btn btn-primary btn-glow-hover cursor-pointer transform transition-transform duration-300 ease-in-out hover:-translate-y-1 w-full sm:w-auto" 
                onClick={scrollToProjects} title="Ver Proyectos">
                Ver proyectos
                <img className='size-5 ml-2' src={drownarrow} alt="Ver Proyectos" />
                </button>
                <button type='button' className="btn btn-primary btn-glow-hover cursor-pointer transform transition-transform duration-300 ease-in-out hover:-translate-y-1 w-full sm:w-auto" title='Descargar CV' onClick={DownloadCV}>Descargar CV<img className='size-5 ml-2' src={pdfCV} alt="Descargar CV" /></button>
            </div>
        </div>
    )
}